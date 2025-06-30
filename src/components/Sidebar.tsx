interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      <div className="w-64 min-w-64 aside-scroll top-16 z-20 h-[calc(100vh-5rem)] overflow-y-auto p-8 ps-0 max-lg:hidden lg:sticky rounded-lg">
        <button
          type="button"
          className="btn btn-text max-sm:btn-square sm:hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="default-sidebar"
          data-overlay="#default-sidebar"
        >
          <span className="icon-[tabler--menu-2] size-5"></span>
        </button>
        <aside
          id="default-sidebar"
          className="overlay [--auto-close:sm] sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden max-w-64 sm:absolute sm:z-0 sm:flex sm:translate-x-0"
          role="dialog"
          tabIndex={-1}
        >
          <div className="drawer-body px-2 pt-4">
            <div className="space-y-3">
              <li className="list-none">
                <h5 className="text-base-content/90 pb-3 font-semibold">
                  Overview
                </h5>
                <ul className="border-base-content/10 ms-0.5 border-s">
                  <li>
                    <a
                      className="hover:border-base-content/60 hover:text-base-content/90 text-base-content/80 -ms-px flex items-center justify-normal border-s-2 border-transparent px-3 py-1.5 text-sm"
                      href="/"
                    >
                      <span className="icon-[tabler--home] size-4 mr-2"></span>
                      Home
                    </a>
                  </li>
                </ul>
              </li>
            </div>

            <div className="space-y-3">
              <li className="list-none">
                <h5 className="text-base-content/90 pb-3 font-semibold">
                  Transactions
                </h5>
                <ul className="border-base-content/10 ms-0.5 border-s">
                  <li>
                    <a
                      className="hover:border-base-content/60 hover:text-base-content/90 text-base-content/80 -ms-px flex items-center justify-normal border-s-2 border-transparent px-3 py-1.5 text-sm"
                      href="/transactions"
                    >
                      <span className="icon-[tabler--history] size-4 mr-2"></span>
                      Transaction History
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:border-base-content/60 hover:text-base-content/90 text-base-content/80 -ms-px flex items-center justify-between border-s-2 border-transparent px-3 py-1.5 text-sm"
                      href="/newtransaction"
                    >
                      <span className="icon-[tabler--report-money] size-4 mr-2"></span>
                      Create Transaction Record
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            <div className="space-y-3">
              <li className="list-none">
                <h5 className="text-base-content/90 pb-3 font-semibold">
                  Budget
                </h5>
                <ul className="border-base-content/10 ms-0.5 border-s">
                  <li>
                    <a
                      className="hover:border-base-content/60 hover:text-base-content/90 text-base-content/80 -ms-px flex items-center justify-between border-s-2 border-transparent px-3 py-1.5 text-sm"
                      href="/newbudget"
                    >
                      <span className="icon-[tabler--category] size-4 mr-2"></span>
                      Create Budget Category
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;