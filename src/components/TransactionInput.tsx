import { useEffect, useState } from "react";
import { TransactionType } from "../types/transaction";
import { CategoryType } from "../types/budgetCategory";
import React from "react";
import ErrorPrompt from "./TransactionInput/ErrorPrompt";
import DescriptionInput from "./TransactionInput/DescriptionInput";
import AmountInput from "./TransactionInput/AmountInput";
import StartDateInput from "./TransactionInput/StartDateInput";
import CheckBoxInput from "./TransactionInput/CheckboxInput";
import EndDateInput from "./TransactionInput/EndDateInput";
import DaySelector from "./TransactionInput/DaySelector";
import BudgetCategorySelector from "./TransactionInput/BudgetCategorySelector";
import TransactionTypeSelector from "./TransactionInput/TransactionTypeSelector";

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
  const [hasBudgetCategory, setHasBudgetCategory] = useState<boolean>(false);
  const [selectedBudgetCategory, setSelectedBudgetCategory] =
    useState<CategoryType | null>(null);

  const handleSubmit = () => {
    //TODO: Handle submit case
  };

  //TODO: Remove later
  useEffect(() => {
    console.log(transactionType);
  }, [transactionType]);

  return (
    <>
      {error != "" && (
        <ErrorPrompt value={error}/>
      )}

      <DescriptionInput value={description} onChange={setDescription} />

      <AmountInput value={amount} onChange={setAmount} onError={setError} />

      <StartDateInput
        label={"Transaction Date"}
        value={startDate}
        onChange={setStartDate}
      />

      <CheckBoxInput
        onChange={setHasEndDate}
        label={"Repeating Transaction?"}
      />

      {hasEndDate && (
        <div>
          <EndDateInput
            label={"End Transaction Date"}
            startDate={startDate}
            value={endDate}
            onChange={setEndDate}
            onError={setError}
          />
          <DaySelector label="Select Days" days={days} setDays={setDays} />
        </div>
      )}

      <CheckBoxInput
        onChange={setHasBudgetCategory}
        label={"Add to Budget Category?"}
      />

      {hasBudgetCategory && (
        <BudgetCategorySelector onChange={setSelectedBudgetCategory} />
      )}

      <TransactionTypeSelector onChange={setTransactionType} />

      <button className="btn btn-primary btn-block mt-2" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default TransactionInput;