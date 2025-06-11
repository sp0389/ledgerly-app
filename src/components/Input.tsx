import React from 'react';

interface TransactionInputProps { }

const TransactionInput: React.FC<TransactionInputProps> = () => {
  return (
    <>
      <div className="space-y-3">
        <div className="relative">
          <label className="label-text" htmlFor="helperTextInput">Full Name</label>
          <input type="text" placeholder="John Doe" className="input max-w-sm" id="helperTextInput" />
          <span className="helper-text">Please write your full name</span>
        </div>

        <div className="input-floating max-w-sm">
          <input type="text" placeholder="John Doe" className="input" id="helperTextFloatingInput" />
          <label className="input-floating-label" htmlFor="helperTextFloatingInput">Full Name</label>
          <span className="helper-text ps-3">Please write your full name</span>
        </div>

        <div className="input max-w-sm space-x-3">
          <span className="label-text my-auto">$</span>
          <input type="number" className="grow" placeholder="00.00" id="trailingAndLeadingInput" />
          <label className="sr-only" htmlFor="trailingAndLeadingInput">Enter amount</label>
          <span className="label-text my-auto">USD</span>
        </div>
        
        <div className="dropdown relative">
          <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            Type
            <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
          </button>
          <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
            <li><a className="dropdown-item" href="#">Income</a></li>
            <li><a className="dropdown-item" href="#">Expense</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TransactionInput;