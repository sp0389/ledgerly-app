import { useState, useEffect } from "react";
import AmountInput from "../Input/AmountInput";
import DescriptionInput from "../Input/DescriptionInput";
import { CategoryType } from "../../types/budgetCategory";
import StartDateInput from "../Input/StartDateInput";
import EndDateInput from "../Input/EndDateInput";
import BudgetCategorySelector from "../Input/BudgetCategoryTypeSelector";
import ErrorPrompt from "../Input/ErrorPrompt";
import BlockButton from "../BlockButton";
import Header from "../Header";
import { handleNewBudgetCategory } from "../../factory/budgetCategoryFactory";
import {
  createBudgetCategory,
  getBudgetCategoryTypes,
} from "../../services/budgetCategoryService";
import Title from "../Input/TitleInput";

const BudgetCategoryInput = () => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [categoryType, setCategoryType] = useState<CategoryType>();
  const [budgetCategoryType, setBudgetCategoryType] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    //TODO: handle submit case here.
    try {
      const bc = handleNewBudgetCategory(
        title,
        amount,
        startDate.toISOString(),
        endDate.toISOString(),
        description,
        categoryType!
      );
      await createBudgetCategory(bc);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const fetchBudgetCategoryTypesFromApi = async () => {
    try {
      const bct = await getBudgetCategoryTypes();
      setBudgetCategoryType(bct);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBudgetCategoryTypesFromApi();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {error != "" && <ErrorPrompt value={error} />}

      <Header
        label="Budget"
        description="Bundle your spending into categories."
      />

      <Title
        label="Title"
        value={title}
        placeholderText="e.g. Entertainment"
        onChange={setTitle}
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
        budgetCategoryTypes={budgetCategoryType}
        onChange={setCategoryType}
      />

      <BlockButton label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default BudgetCategoryInput;