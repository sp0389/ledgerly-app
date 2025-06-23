import Flatpickr from "react-flatpickr";

interface EndDateInputProps {
  label: string;
  value: Date;
  startDate: Date;
  onError: (val: string) => void;
  onChange: (val: Date) => void;
  setIsRecurring: (val: boolean) => void;
}

const EndDateInput: React.FC<EndDateInputProps> = ({
  onError,
  onChange,
  setIsRecurring,
  value,
  label,
  startDate,
}) => {
  const handleEndDateCheck = (input: Date) => {
    if (
      input.getDate() <= startDate.getDate() &&
      input.getMonth() <= startDate.getMonth() &&
      input.getFullYear() <= startDate.getFullYear()
    ) {
      onError(
        "End date cannot be the same as or before the start date. Please select a different end date."
      );
      return;
    }
    onError("");
    setIsRecurring(true);
    onChange(input);
  };

  return (
    <div className="input-floating">
      <label className="label-text" htmlFor="helperTextInput">
        {label}
      </label>
      <Flatpickr
        className="input"
        options={{}}
        value={value}
        onChange={([date]) => {
          handleEndDateCheck(date);
        }}
        placeholder="YYYY-MM-DD"
      />
    </div>
  );
};

export default EndDateInput;