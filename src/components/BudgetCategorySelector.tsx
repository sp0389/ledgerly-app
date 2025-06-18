import { CategoryType } from "../types/budgetCategory";

interface BudgetCategorySelectorProps {
  onChange: (val: CategoryType) => void;
}

const BudgetCategorySelector: React.FC<BudgetCategorySelectorProps> = ({
  onChange,
}) => {
  const handleBudgetCategory = (input: string) => {
    switch (input) {
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
        <select onChange={(e) => handleBudgetCategory(e.target.value)}>
          <option>Select</option>
          {Object.keys(CategoryType)
            .filter((category) => isNaN(Number(category)))
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};

export default BudgetCategorySelector;