import { useState, useEffect } from "react";
import { type BudgetCategory } from "../../types/budgetCategory";
import AmountInput from "../Input/AmountInput";
import DescriptionInput from "../Input/DescriptionInput";
import { CategoryType } from "../../types/budgetCategory";
import StartDateInput from "../Input/StartDateInput";
import EndDateInput from "../Input/EndDateInput";
import BudgetCategorySelector from "../Input/BudgetCategorySelector";
import ErrorPrompt from "../Input/ErrorPrompt";
import BlockButton from "../BlockButton";
import Header from "../Header";
import { handleNewBudgetCategory } from "../../services/budgetCategoryService";
import {
  createBudgetCategory,
  getBudgetCategories,
} from "../../services/financeService";

const BudgetCategoryInput = () => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [categoryType, setCategoryType] = useState<CategoryType>();
  const [budgetCategory, setBudgetCategory] = useState<BudgetCategory[]>([]);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    //TODO: handle submit case here.
    try {
      const bc = handleNewBudgetCategory(
        amount,
        startDate,
        endDate,
        description,
        categoryType!
      );
      await createBudgetCategory(bc);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const fetchBudgetCategoriesFromApi = async () => {
    try {
      const bc = await getBudgetCategories();
      setBudgetCategory(bc);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBudgetCategoriesFromApi();
  }, []);

  return (
    <>
      {error != "" && <ErrorPrompt value={error} />}

      <Header
        label="Budget"
        description="Bundle your spending into categories."
      />

      <AmountInput value={amount} onChange={setAmount} onError={setError} />

      <DescriptionInput value={description} onChange={setDescription} />

      <StartDateInput
        value={startDate}
        label="Start Date"
        onChange={setStartDate}
      />

      <EndDateInput
        value={endDate}
        label="End Date"
        startDate={startDate}
        onChange={setEndDate}
        onError={setError}
      />

      <BudgetCategorySelector
        budgetCategory={budgetCategory}
        onChange={setCategoryType}
      />

      <BlockButton label="Submit" onClick={handleSubmit} />
    </>
  );
};

export default BudgetCategoryInput;
