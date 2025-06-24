interface AmountInputProps {
  value: number;
  onChange: (val: number) => void;
  onError: (val: string) => void;
}

const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  onError,
}) => {
  const handleInputCheck = (input: number) => {
    if (Number.isNaN(input)) {
      onError("Please input a number.");
      return;
    }
    onError("");
    onChange(input);
  };

  return (
    <div>
      <label className="label-text" htmlFor="helperTextInput">
        Amount
      </label>
      <div className="input space-x-3">
        <span className="label-text my-auto">$</span>
        <input
          type="number"
          className="grow"
          placeholder="00.00"
          value={value}
          onChange={(e) => handleInputCheck(parseFloat(e.target.value))}
        />
        <span className="label-text my-auto">USD</span>
      </div>
      <label className="helper-text" htmlFor="trailingAndLeadingInput">
        Enter an amount
      </label>
    </div>
  );
};

export default AmountInput;