import { useState, useEffect } from "react";
import { type BudgetCategory } from "../../types/budgetCategory";
import AmountInput from "../Input/AmountInput";
import DescriptionInput from "../Input/DescriptionInput";
import { CategoryType } from "../../types/budgetCategory";
import StartDateInput from "../Input/StartDateInput";
import EndDateInput from "../Input/EndDateInput";
import BudgetCategorySelector from "../Input/BudgetCategorySelector";
import CheckBoxInput from "../Input/CheckboxInput";
import ErrorPrompt from "../Input/ErrorPrompt";
import BlockButton from "../BlockButton";
import Header from "../Header";

const BudgetCategoryInput = () => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [hasEndDate, setHasEndDate] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [categoryType, setCategoryType] = useState<CategoryType>();
  const [budgetCategory, setBudgetCategory] = useState<BudgetCategory[]>([]);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    //TODO: handle submit case here.
  }

  useEffect(() => {
    //TODO: API call to fetch a budget category. I'll simulate one for now
    const bc: BudgetCategory = {
      Id: 1,
      Amount: 1000,
      StartDate: new Date(),
      Description: "A budget category description.",
      CategoryType: CategoryType.Housing,
      Transactions: [],
    };

    setBudgetCategory([bc]);
  }, []);

  return (
    <>
      {error != "" && <ErrorPrompt value={error} />}

      <Header label="Budget" description="Bundle your spending into categories." />

      <AmountInput value={amount} onChange={setAmount} onError={setError} />

      <DescriptionInput value={description} onChange={setDescription} />

      <StartDateInput
        value={startDate}
        label={"Start Date"}
        onChange={setStartDate}
      />

      <CheckBoxInput label={"Has End Date?"} onChange={setHasEndDate} />

      {hasEndDate && (
        <EndDateInput
          value={endDate}
          label={"End Date"}
          startDate={startDate}
          onChange={setEndDate}
          onError={setError}
        />
      )}

      <BudgetCategorySelector
        budgetCategory={budgetCategory}
        onChange={setCategoryType}
      />

      <BlockButton label={"Submit"} onClick={handleSubmit}/>
    </>
  );
};

export default BudgetCategoryInput;