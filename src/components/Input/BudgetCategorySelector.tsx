import { type BudgetCategory } from "../../types/budgetCategory";
import ErrorPrompt from "./ErrorPrompt";

interface BudgetCategorySelectorProps {
  budgetCategory: BudgetCategory[] | undefined;
  onChange: (val: number) => void;
}

const BudgetCategorySelector: React.FC<BudgetCategorySelectorProps> = ({
  budgetCategory,
  onChange,
}) => {
  return (
    <div className="mt-2">
      <label className="label-text inline">
        Budget Category:
        <span>&nbsp;&nbsp;</span>
        {budgetCategory === undefined ? (
          <div className="mt-3">
            <ErrorPrompt value="Please create a budget category first." />
          </div>
        ) : (
          <select onChange={(e) => onChange(Number(e.target.value))}>
            {budgetCategory.map((bc) => (
              <option key={bc.id} value={bc.id}>
                {bc.description}
              </option>
            ))}
          </select>
        )}
      </label>
    </div>
  );
};

export default BudgetCategorySelector;