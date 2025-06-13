import { useState } from 'react';
import { TransactionType } from '../types/transaction';
import React from 'react';
import Flatpickr from 'react-flatpickr';

interface TransactionInputProps { }

const TransactionInput: React.FC<TransactionInputProps> = () => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  
  //TODO: Show the error message to the user
  const [error, setError] = useState<string>('');
  const [transactionType, setTransactionType] = useState<TransactionType>(TransactionType.Income);
  const [startDate, setStartDate] = useState<Date>(new Date());
  
  //TODO: Add the end date functionality (user will check a checkbox)
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [hasEndDate, setHasEndDate] = useState<boolean>(false);

  const handleSubmit = () => {
    //TODO: Handle submit case
  }

  const handleInputCheck = (input: number) => {
    if (Number.isNaN(input)) {
      setError('Please input a number.');
      return;
    }
    setError('');
    setAmount(input);
  }

  const handleTransactionType = (input: number) => {
    input == 1
      ? setTransactionType(TransactionType.Expense)
      : setTransactionType(TransactionType.Income);
  }

  return (
    <>
      <div className="space-y-3">
        <div className="relative">
          <label className="label-text" htmlFor="helperTextInput">Description</label>
          <input type="text" placeholder="Pay: 20/03/25" value={description} onChange={(e) => { setDescription(e.target.value) }} className="input max-w-sm" id="helperTextInput" />
          <span className="helper-text">Please write a description.</span>
        </div>

        <div className="input max-w-sm space-x-3">
          <span className="label-text my-auto">$</span>
          <input type="number" className="grow" placeholder="00.00" value={amount} onChange={(e) => handleInputCheck(parseFloat(e.target.value))} id="trailingAndLeadingInput" />
          <label className="sr-only" htmlFor="trailingAndLeadingInput">Enter amount</label>
          <span className="label-text my-auto">USD</span>
        </div>
        <div>
          <label>Type:
            <span>&nbsp;&nbsp;</span>
            <select value={transactionType} onChange={(e) => handleTransactionType(parseInt(e.target.value))}>
              <option value={TransactionType.Income}>Income</option>
              <option value={TransactionType.Expense}>Expense</option>
            </select>
          </label>
          {/* <p>Selected: {transactionType}</p> */}
        </div>
        <div className="input-floating max-w-sm">
          <label className="label-text" htmlFor="helperTextInput">Transaction date:</label>
          <Flatpickr 
            className="input"
            options={{}}
            value={startDate} 
            onChange={([date]) => {setStartDate(date)}}
            placeholder='YYYY-MM-DD'
            />
        </div>
        <p>Selected Date: {startDate.toDateString()} </p>
        <button className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default TransactionInput;