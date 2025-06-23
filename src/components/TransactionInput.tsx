import { useEffect, useState } from "react";
import { TransactionType, type Transaction } from "../types/transaction";
import { CategoryType } from "../types/budgetCategory";
import React from "react";
import ErrorPrompt from "./TransactionInput/ErrorPrompt";
import DescriptionInput from "./TransactionInput/DescriptionInput";
import AmountInput from "./TransactionInput/AmountInput";
import StartDateInput from "./TransactionInput/StartDateInput";
import OccurrenceSelector from "./TransactionInput/OccurrenceSelector";
import CheckBoxInput from "./TransactionInput/CheckboxInput";
import EndDateInput from "./TransactionInput/EndDateInput";
import DaySelector from "./TransactionInput/DaySelector";
import BudgetCategorySelector from "./TransactionInput/BudgetCategorySelector";
import TransactionTypeSelector from "./TransactionInput/TransactionTypeSelector";
import { createTransaction } from "../services/financeService";

interface TransactionInputProps {}

const TransactionInput: React.FC<TransactionInputProps> = () => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [transactionType, setTransactionType] = useState<TransactionType>(
    TransactionType.Income
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [occurrences, setOccurrences] = useState<number>(0);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [hasEndDate, setHasEndDate] = useState<boolean>(false);
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [days, setDays] = useState<string[]>([]);
  const [hasBudgetCategory, setHasBudgetCategory] = useState<boolean>(false);
  const [selectedBudgetCategory, setSelectedBudgetCategory] = useState<
    CategoryType | undefined
  >(undefined);

  const handleSubmit = async () => {
    try {
      const transaction: Transaction = {
        Amount: amount,
        Date: startDate,
        EndDate: endDate,
        IsRecurring: isRecurring,
        Occurrences: occurrences,
        Description: description,
        SelectedDays: days,
        TransactionType: transactionType,
        CategoryType: selectedBudgetCategory,
      };

      await createTransaction(transaction);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  //TODO: Remove later
  useEffect(() => {
    console.log(occurrences);
  }, [occurrences]);

  return (
    <>
      {error != "" && <ErrorPrompt value={error} />}

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
          <OccurrenceSelector
            value={occurrences}
            setOccurrence={setOccurrences}
            label={"Occurrences (Optional)"}
          />

          <EndDateInput
            label={"End Transaction Date"}
            startDate={startDate}
            value={endDate}
            onChange={setEndDate}
            onError={setError}
            setIsRecurring={setIsRecurring}
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