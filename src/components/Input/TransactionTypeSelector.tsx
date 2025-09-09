import { TransactionType } from "../../types/transaction";

interface TransactionTypeSelectorProps {
  onChange: (val: TransactionType) => void;
}

const TransactionTypeSelector: React.FC<TransactionTypeSelectorProps> = ({
  onChange,
}) => {
  const handleTransactionType = (input: string) => {
    input == "Expense"
      ? onChange(TransactionType.Expense)
      : onChange(TransactionType.Income);
  };

  return (
    <div className="mt-3 mb-3">
      <label className="label-text">
        Type:
        <span>&nbsp;&nbsp;</span>
        <select onChange={(e) => handleTransactionType(e.target.value)}>
          {Object.keys(TransactionType)
            .filter((transactionType) => isNaN(Number(transactionType)))
            .map((transactionType) => (
              <option key={transactionType} value={transactionType}>
                {transactionType}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};

export default TransactionTypeSelector;
