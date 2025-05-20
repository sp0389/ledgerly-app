function Sidebar() {
  return (
    <>
      <div className="w-64 min-w-64 aside-scroll top-16 z-20 h-[calc(100vh-5rem)] overflow-y-auto p-8 ps-0 max-lg:hidden lg:sticky rounded-lg">
        <button type="button" className="btn btn-text max-sm:btn-square sm:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="default-sidebar" data-overlay="#default-sidebar" >
          <span className="icon-[tabler--menu-2] size-5"></span>
        </button>
        <aside id="default-sidebar" className="overlay [--auto-close:sm] sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden max-w-64 sm:absolute sm:z-0 sm:flex sm:translate-x-0" role="dialog" tabIndex={-1} >
          <div className="drawer-body px-2 pt-4">
            <ul className="menu p-0">
              <li>
                <a href="#">
                  <span className="icon-[tabler--home] size-5"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-[tabler--user] size-5"></span>
                  Account
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-[tabler--message] size-5"></span>
                  Notifications
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-[tabler--mail] size-5"></span>
                  Email
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-[tabler--calendar] size-5"></span>
                  Calendar
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-[tabler--shopping-bag] size-5"></span>
                  Product
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;