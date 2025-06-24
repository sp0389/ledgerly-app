import { CategoryType } from "../../types/budgetCategory";
import { type BudgetCategory } from "../../types/budgetCategory";
import ErrorPrompt from "./ErrorPrompt";

// REWORK -- fetch the budget categories from API.

interface BudgetCategorySelectorProps {
  onChange: (val: CategoryType) => void;
  budgetCategory: BudgetCategory[] | undefined;
}

const BudgetCategorySelector: React.FC<BudgetCategorySelectorProps> = ({
  onChange,
  budgetCategory,
}) => {
  const handleBudgetCategory = (categoryType: string) => {
    switch (categoryType) {
      case "Entertainment":
        onChange(CategoryType.Entertainment);
        break;
      case "Utilities":
        onChange(CategoryType.Utilities);
        break;
      case "Groceries":
        onChange(CategoryType.Groceries);
        break;
      case "EatingOut":
        onChange(CategoryType.EatingOut);
        break;
      case "Transportation":
        onChange(CategoryType.Transportation);
        break;
      case "Housing":
        onChange(CategoryType.Housing);
        break;
      case "Health":
        onChange(CategoryType.Health);
        break;
      case "Savings":
        onChange(CategoryType.Savings);
        break;
    }
  };

  return (
    <div className="mt-2">
      <label className="label-text inline">
        Budget Category:
        <span>&nbsp;&nbsp;</span>
        {budgetCategory === undefined ? (
          <ErrorPrompt value={"Please create a budget category first."} />
        ) : (
          <select onChange={(e) => handleBudgetCategory(e.target.value)}>
            {budgetCategory.map((bc) => (
              <option key={bc.Id} value={bc.CategoryType}>
                {bc.CategoryType}
              </option>
            ))}
          </select>
        )}
      </label>
    </div>
  );
};

export default BudgetCategorySelector;