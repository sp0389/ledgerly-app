import Flatpickr from "react-flatpickr";

interface DateInputProps {
  onChange: (val: Date) => void;
  value: Date;
  label: string;
}

const StartDateInput: React.FC<DateInputProps> = ({
  onChange,
  value,
  label,
}) => {
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
          onChange(date);
        }}
        placeholder="YYYY-MM-DD"
      />
    </div>
  );
};

export default StartDateInput;