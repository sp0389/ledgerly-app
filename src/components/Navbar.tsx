import { useEffect, useState } from "react";
import { isUserLoggedIn } from "../services/authService";

const Navbar: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkIfUserIsLoggedIn = async () => {
    try {
      const check = await isUserLoggedIn();
      setIsLoggedIn(check);
    } catch (error:any) {
      console.log(error.message);
    }   
  }

  useEffect(() => {
    checkIfUserIsLoggedIn();
  },[]);

  return (
    <nav className="navbar shadow-base-300/20 shadow-sm bg-base-100 border-base-content/10 border-b sticky top-0 z-50 w-full">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a href="/" aria-label="Homepage Link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                  fill="var(--color-primary)"
                />
              </svg>
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                data-collapse="#logo-navbar-collapse"
                aria-controls="logo-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="logo-navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
            {!isLoggedIn ? (
              <>
                <li>
                  <a href="/">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
              </>
            ) : (
              <li>
                <a href="/logout">Logout</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;