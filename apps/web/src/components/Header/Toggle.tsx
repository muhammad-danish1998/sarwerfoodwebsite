import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Toggle = () => {
  const location = useLocation();
  const setActive = useCallback(
    (ref: HTMLAnchorElement) => {
      if (!ref) return;
      if (ref.href.endsWith(location.pathname)) {
        ref.classList.add('tab-active');
        return;
      }
      ref.classList.remove('tab-active');
    },
    [location]
  );

  return (
    <div className="bg-white flex  items-center justify-center">
      <div className="tabs flex flex-nowrap items-center tabs-boxed">
        <Link className="tab " ref={setActive} to="/resturant/delivery">
          delivery
        </Link>
        <Link className="tab" ref={setActive} to="/resturant/pickup">
          pickup
        </Link>
      </div>
    </div>
  );
};

export default Toggle;
