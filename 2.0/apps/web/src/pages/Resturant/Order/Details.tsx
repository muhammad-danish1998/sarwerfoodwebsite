const OrderDetail = () => {
  const people = [
    {
      name: 'Amadeus Pizza',
      email: 'leslie.alexander@example.com',
      role: 'Adress: Brandenburger Str. 11, 67065 Ludwigshafen',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];
  return (
    <div>
      <div className=" bg-white flex-col md:m-8 m-2 justify-center max-w-8xl   sm:px-6 px-2 lg:px-1">
        <h1 className="text-4xl font-bold">Order details</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
          {people.map((person) => (
            <div
              key={person.email}
              className="relative flex items-center space-x-3 rounded-lg   bg-white px-6 py-5  focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <img className="h-28 w-28 rounded-full" src={person.imageUrl} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-2xl font-medium text-gray-900">{person.name}</p>
                  <p className="truncate text-xl text-gray-500">{person.role}</p>
                  <div className="lg:flex">
                    <p>Date: 01.01.2023</p>
                    <p className="lg:ml-8 font-bold">Order #: 99uz76j</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
          <hr />
        </div>
        <div className=" bg-white flex-col m-8  justify-center max-w-8xl   sm:px-6 lg:px-1">
          <button className="bg-gray-400 px-8 py-2">Delivery</button>
          <div className="mt-4 flex justify-between max-w-2xl">
            <p>1 Angebote 3 Pizza</p>
            <p>€ 3,99</p>
            <p>€ 35,99</p>
          </div>
          <div className="mt-8">
            <p>1 Pizza-Ananas</p>
            <p>2 Pizza-Ananas</p>
            <p>3 Pizza-Ananas</p>
            <p>4 Pizza-Ananas</p>
            <p>5 Pizza-Ananas</p>
            <p>6 Pizza-Ananas</p>
            <p>7 Pizza-Ananas</p>
          </div>
          <div className="flex mt-4">
            <p>Note</p>
            <p className="ml-4 bg-gray-400 px-8 py-1"> i need two apple </p>
          </div>
          <div className="mt-4 flex justify-between max-w-2xl">
            <p>10 Pizza Hawaii</p>
            <p>€ 50,00</p>
          </div>
          <div className="mt-4 flex justify-between max-w-2xl">
            <p>9 Pizza Hawaii</p>
            <p>€ 40,00</p>
          </div>
          <div className="mt-4 font-bold flex justify-between max-w-2xl">
            <p>Totel</p>
            <p>€ 40,00</p>
          </div>
          <button className="bg-gray-400 px-8 mt-8 py-1 font-bold">Paypal</button>
        </div>
      </div>
      o
    </div>
  );
};

export default OrderDetail;
