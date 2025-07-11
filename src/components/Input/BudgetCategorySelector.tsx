import { CategoryType, type BudgetCategory } from "../../types/budgetCategory";
import ErrorPrompt from "./ErrorPrompt";

interface BudgetCategorySelectorProps {
  budgetCategory: BudgetCategory[] | undefined;
  onChange: (val: CategoryType) => void;
}

//TODO: Rework this later

const BudgetCategorySelector: React.FC<BudgetCategorySelectorProps> = ({ budgetCategory, onChange } ) => {

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
  }
  return (
      <div className="mt-2">
      <label className="label-text inline">
        Budget Category:
        <span>&nbsp;&nbsp;</span>
          {budgetCategory === undefined ? (
            <div className="mt-3">
              <ErrorPrompt value={"Please create a budget category first."} />
            </div>
          ) : (
            <select onChange={(e) => {handleBudgetCategory(e.target.value)}}>
              {budgetCategory.map((bc) => (
                <option key={bc.id} >
                  {bc.categoryType}
                </option>
              ))}
            </select>
          )}
      </label>
    </div>
  )
}

export default BudgetCategorySelector;