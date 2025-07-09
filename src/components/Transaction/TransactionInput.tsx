import { useEffect, useState } from "react";
import {
  DayOfWeek,
  TransactionType,
  type Transaction,
} from "../../types/transaction";
import { type BudgetCategory, CategoryType } from "../../types/budgetCategory";
import React from "react";
import ErrorPrompt from "../Input/ErrorPrompt";
import DescriptionInput from "../Input/DescriptionInput";
import Title from "../Input/TitleInput";
import AmountInput from "../Input/AmountInput";
import StartDateInput from "../Input/StartDateInput";
import OccurrenceSelector from "../Input/OccurrenceSelector";
import CheckBoxInput from "../Input/CheckboxInput";
import EndDateInput from "../Input/EndDateInput";
import DaySelector from "../Input/DaySelector";
import BudgetCategorySelector from "../Input/BudgetCategorySelector";
import TransactionTypeSelector from "../Input/TransactionTypeSelector";
import {
  createBiWeeklyTransaction,
  createMonthlyTransaction,
  createTransaction,
} from "../../services/financeService";
import BlockButton from "../BlockButton";
import Header from "../Header";
import {
  handleRepeatingTransaction,
  handleSingleTransaction,
} from "../../services/transactionService";

interface TransactionInputProps {}

const TransactionInput: React.FC<TransactionInputProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [transactionType, setTransactionType] = useState<TransactionType>(
    TransactionType.Income
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [occurrences, setOccurrences] = useState<number>(0);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [isBiWeekly, setIsBiWeekly] = useState<boolean>(false);
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [days, setDays] = useState<DayOfWeek[]>([]);
  const [hasBudgetCategory, setHasBudgetCategory] = useState<boolean>(false);
  const [selectedBudgetCategory, setSelectedBudgetCategory] = useState<
    CategoryType | undefined
  >(undefined);

  //TEST -- set as undefined first so the error message displays to the user
  const [budgetCategory, setBudgetCategory] = useState<
    BudgetCategory[] | undefined
  >(undefined);

  const handleSubmit = async () => {
    if (!isBiWeekly && !isMonthly) {
      try {
        const transaction = handleSingleTransaction(
          title,
          amount,
          startDate,
          endDate,
          description,
          transactionType,
          selectedBudgetCategory
        );

        await createTransaction(transaction);
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      }
    } else {
      try {
        const repeatingTransaction = handleRepeatingTransaction(
          title,
          amount,
          startDate,
          endDate,
          occurrences,
          description,
          days,
          transactionType,
          selectedBudgetCategory
        );
        if (isBiWeekly) {
          await createBiWeeklyTransaction(repeatingTransaction);
        } else {
          await createMonthlyTransaction(repeatingTransaction);
        }
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      }
    }
  };

  useEffect(() => {

    //TODO: on submit we check for this.
    isRecurring && days.length === 0
      ? setError("Please choose days")
      : setError("");

    console.log("Selected Days: ", days);
  }, [isRecurring, days]);

  return (
    <>
      {error != "" && <ErrorPrompt value={error} />}

      <Header
        label="Transaction Record"
        description="Create a new transaction record."
      />

      <Title label="Title" value={title} onChange={setTitle} />

      <AmountInput value={amount} onChange={setAmount} onError={setError} />

      <DescriptionInput value={description} onChange={setDescription} />

      <StartDateInput
        label="Transaction Date"
        value={startDate}
        onChange={setStartDate}
      />

      <CheckBoxInput onChange={setIsRecurring} label="Repeating Transaction?" />

      {isRecurring && (
        <div>
          
          <CheckBoxInput onChange={setIsBiWeekly} label="Biweekly" />
          <CheckBoxInput onChange={setIsMonthly} label="Monthly" />

          {isBiWeekly && isMonthly && (
            <ErrorPrompt value="Please select either Biweekly or Monthly, not both." />
          )}

          <OccurrenceSelector
            value={occurrences}
            setOccurrence={setOccurrences}
            label="Occurrences (Optional)"
          />

          <EndDateInput
            label="End Transaction Date"
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
        label="Add to Budget Category?"
      />

      {hasBudgetCategory && (
        <BudgetCategorySelector
          budgetCategory={budgetCategory}
          onChange={setSelectedBudgetCategory}
        />
      )}

      <TransactionTypeSelector onChange={setTransactionType} />

      <BlockButton label="Submit" onClick={handleSubmit} />
    </>
  );
};

export default TransactionInput;