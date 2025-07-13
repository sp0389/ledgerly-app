import { CategoryType } from "../../types/budgetCategory";

interface BudgetCategoryTypeSelectorProps {
  onChange: (val: CategoryType) => void;
  budgetCategoryTypes: string[];
}

const BudgetCategoryTypeSelector: React.FC<BudgetCategoryTypeSelectorProps> = ({
  onChange,
  budgetCategoryTypes
}) => {
  const handleBudgetCategoryType = (categoryType: string) => {
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
            <select onChange={(e) => handleBudgetCategoryType(e.target.value)}>
              {budgetCategoryTypes.map((bc) => (
                <option key={bc} >
                  {bc}
                </option>
              ))}
            </select>
      </label>
    </div>
  );
};

export default BudgetCategoryTypeSelector;
