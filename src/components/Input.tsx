import { useEffect, useState } from "react";
import { DayOfWeek, TransactionType } from "../types/transaction";
import React from "react";
import Flatpickr from "react-flatpickr";

interface TransactionInputProps {}

const TransactionInput: React.FC<TransactionInputProps> = () => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [transactionType, setTransactionType] = useState<TransactionType>(
    TransactionType.Income
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [hasEndDate, setHasEndDate] = useState<boolean>(false);
  const [days, setDays] = useState<string[]>([]);

  const handleSubmit = () => {
    //TODO: Handle submit case
  };

  const handleInputCheck = (input: number) => {
    if (Number.isNaN(input)) {
      setError("Please input a number.");
      return;
    }
    setError("");
    setAmount(input);
  };

  const handleEndDateCheck = (input: Date) => {
    if (
      input.getDate() == startDate.getDate() &&
      input.getMonth() == startDate.getMonth() &&
      input.getFullYear() == startDate.getFullYear()
    ) {
      setError(
        "End date cannot be the same as the start date. Please select a different end date."
      );
      return;
    }
    setError("");
    setEndDate(input);
  };

  const handleTransactionType = (input: number) => {
    input == 1
      ? setTransactionType(TransactionType.Expense)
      : setTransactionType(TransactionType.Income);
  };

  const handleDayOfWeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked == true
      ? setDays([...days, e.target.value])
      : setDays(days.filter((day) => day !== e.target.value));
  };

  useEffect(() => {
    console.log(days);
  }, [days]);

  return (
    <>
      {error != "" && (
        <div className="alert alert-soft alert-error mb-3" role="alert">
          {error}
        </div>
      )}

      <div className="card bg-base-100 shadow-xl p-5 w-full">
        <div className="relative">
          <label className="label-text" htmlFor="helperTextInput">
            Description
          </label>
          <textarea
            className="textarea textarea-bordered mt-2"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          {description == "" && (
            <label className="helper-text">Enter a description</label>
          )}
        </div>

        <div>
          <label className="label-text" htmlFor="helperTextInput">
            Amount
          </label>
          <div className="input space-x-3">
            <span className="label-text my-auto">$</span>
            <input
              type="number"
              className="grow"
              placeholder="00.00"
              value={amount}
              onChange={(e) => handleInputCheck(parseFloat(e.target.value))}
            />
            <span className="label-text my-auto">USD</span>
          </div>
          <label className="helper-text" htmlFor="trailingAndLeadingInput">
            Enter an amount
          </label>

          <div className="input-floating">
            <label className="label-text" htmlFor="helperTextInput">
              Transaction Date
            </label>
            <Flatpickr
              className="input"
              options={{}}
              value={startDate}
              onChange={([date]) => {
                setStartDate(date);
              }}
              placeholder="YYYY-MM-DD"
            />
            <div className="items-center gap-1 inline-flex mt-2">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => setHasEndDate(e.target.checked)}
              />
              <label className="label-text" htmlFor="checkBox">
                Repeating Transaction?
              </label>
            </div>
          </div>

          {hasEndDate && (
            <div className="input-floating max-w-sm">
              <label className="label-text" htmlFor="helperTextInput">
                End Transaction Date
              </label>
              <Flatpickr
                className="input"
                options={{}}
                value={endDate}
                onChange={([date]) => {
                  handleEndDateCheck(date);
                }}
                placeholder="YYYY-MM-DD"
              />
              <div className="mt-2">
                <label className="label-text">Select Days</label>
                {Object.keys(DayOfWeek)
                  .filter((value) => isNaN(Number(value)))
                  .map((value) => (
                    <div key={value}>
                      <input
                        type="checkbox"
                        value={value}
                        onChange={(e) => handleDayOfWeek(e)}
                      />
                      <label> {value}</label>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div>
            <label className="label-text">
              Type:
              <span>&nbsp;&nbsp;</span>
              <select
                value={transactionType}
                onChange={(e) =>
                  handleTransactionType(parseInt(e.target.value))
                }
              >
                <option value={TransactionType.Income}>Income</option>
                <option value={TransactionType.Expense}>Expense</option>
              </select>
            </label>
          </div>

          <button className="btn btn-primary btn-block" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default TransactionInput;