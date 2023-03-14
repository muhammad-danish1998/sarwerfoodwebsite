import { useCallback } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './auth.scss';
const Auth = () => {
  const location = useLocation();
  const setActive = useCallback(
    (ref: HTMLAnchorElement) => {
      if (!ref) return;
      if (ref.href.includes(location.pathname)) {
        ref.classList.add('tab-active');
        return;
      }
      ref.classList.remove('tab-active');
    },
    [location]
  );
  return (
    <>
      <div className="bg-white min-h-[100vh] flex flex-col items-center justify-center">
        {location.pathname.includes('/auth/forget-password') ? null : (
          <>
            <h3 className="my-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign In or Sign Up
            </h3>
            <div className="tabs tabs-boxed">
              <Link className="tab " ref={setActive} to="/auth/sign-in">
                Sign in
              </Link>
              <Link className="tab" ref={setActive} to="/auth/register">
                Sign up
              </Link>
            </div>
          </>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
