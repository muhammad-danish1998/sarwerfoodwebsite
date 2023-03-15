import { modal } from '@/components/Dialog';
import { useAppDispatch, useAppSelector, useAxios } from '@/hooks';
import { addToCart } from '@/redux/slice/cart.slice';
import { Dialog } from '@headlessui/react';
import { useMap } from 'ahooks';
import { useEffect, useState } from 'react';
import { Button } from 'ui';
const Cart = ({ menu }) => {
  const [{ data: menuList }, loadMenu] = useAxios({ url: `/ajax/_api_ajax_get_menu.php?menu_id=${menu.id}` });
  const cartItem = useAppSelector((state) => state.cart.item);
  const [map, { get, remove, reset, set }] = useMap<string, any>();
  const dispatch = useAppDispatch();
  const [optionLimit, setOptionLimit] = useState(2);
  useEffect(() => {
    if (menu.id) loadMenu();
  }, [menu]);

  const addItemToCart = (menu) => {
    dispatch(addToCart(menu));
  };
  const getTotalAmmount = (id) => {
    let total = 0;
    const current = get(id);
    if (!current) return total.toFixed(2);
    const price = Number(current.price);
    if (!isNaN(price)) total += price * current.quantity;
    return total.toFixed(2);
  };
  return (
    <>
      <div>
        <div className="mt-3  sm:mt-2">
          <div className="  flex flex-col">
            <p className="w-full mb-4 ">
              {menu.image ? <img src={menu.image} className="object-cover h-36 w-full rounded-xl" /> : ''}
            </p>

            <Dialog.Title as="h3" className="lg:text-2xl  text-xl font-medium leading-6 text-gray-900">
              {menu.name}
            </Dialog.Title>
            <Dialog.Title as="h3" className="text-sm  font-normal leading-6 text-gray-900">
              {menu.description}
            </Dialog.Title>
            <div className="scroll ">
              {menuList?.options && (
                <div className="">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    {menuList?.options?.optionname}
                  </label>

                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {menuList.options?.optionarr?.map((val) => (
                      <>
                        <option value={`${val.menu_id} , ${val.id}, ${val.price}`}>
                          {val.name + ' €' + val.price}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              )}
              {menuList?.addons?.map((addVal) => (
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    {addVal.addons.name}
                  </label>

                  {addVal.addons?.type == 'single' && (
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="Canada"
                      onChange={(e) => {
                        const [title, price] = e.target.value;
                        let current = get(menu.id);
                        if (!current) {
                          set(menu.id, { ...menu, quantity: 1 });
                          current = get(menu.id);
                        }
                        current.singleAddon = current.singleAddon || [];
                        current.singleAddon.push({ [title]: price });
                      }}
                    >
                      {addVal.addons?.type == 'single' &&
                        addVal.addons?.opt?.map((val) => (
                          <>
                            <option value={`${val.addon_id} , ${val.id}`}>
                              {val.title + ' €' + val.price}
                            </option>
                          </>
                        ))}
                    </select>
                  )}
                  <p>
                    {addVal.addons?.type == 'multi' &&
                      addVal.addons?.opt?.slice(0, optionLimit).map((val0, i) => (
                        <>
                          <p>
                            <label className="relative inline-flex items-center cursor-pointer mt-3">
                              <input
                                type="checkbox"
                                value={`${val0.id} , ${val0.price}`}
                                className="sr-only peer"
                                onChange={(e) => {
                                  const [id, price] = e.target.value;
                                  let current = get(menu.id);
                                  if (!current) {
                                    set(menu.id, { ...menu, quantity: 1, multiaddon: [{ [id]: price }] });
                                    return;
                                  }
                                  console.log(current);
                                  const m = current.multiaddon.findIndex((m) => m == id);
                                  if (m != -1) {
                                    current.multiaddon.splice(m, 1);
                                  }
                                  // current.multiaddon = current.multiaddon || [];
                                  // current.multiaddon.push({ [id]: price });
                                }}
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {val0.title + ' €' + val0.price}
                              </span>
                            </label>
                          </p>
                        </>
                      ))}
                  </p>
                </div>
              ))}
              {optionLimit >= 2 && (
                <Button
                  className="t-blue bg-none inline btn-link no-underline text-black btn-md text-left justify-start p-0 hover:no-underline focus:outline-none"
                  onClick={() => setOptionLimit(Infinity)}
                >
                  See more
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5  border-black sm:mt-6 sm:flex lg:justify-between sm:gap-3">
        <div className="card-list-uper">
          <p className="flex justify-center items-center">
            <svg
              onClick={() => {
                const current = get(menu.id);
                if (current) {
                  if (current.quantity != 1) {
                    current.quantity -= 1;
                    set(menu.id, { ...current });
                  }
                }
              }}
              className="w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19 12.998H5v-2h14z" />
            </svg>
            <span className="m-2">{get(menu.id)?.quantity || 0}</span>
            <svg
              onClick={() => {
                const current = get(menu.id);
                if (!current) {
                  set(menu.id, { ...menu, quantity: 1 });
                  return;
                }
                current.quantity += 1;
                set(menu.id, { ...current });
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </p>
        </div>
        <button
          onClick={() => {
            let m = get(menu.id);
            if (!m) {
              m = menu;
              m.quantity = 1;
            }
            addItemToCart({ ...m });
            modal()?.hide();
          }}
          type="button"
          className="mt-3 bg-red-500 text-white inline-flex lg:w-2/3 w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 lg:text-lg sm:text-sm"
        >
          In den warenkorb legen €{getTotalAmmount(menu.id)}
        </button>
      </div>
    </>
  );
};

export default Cart;
