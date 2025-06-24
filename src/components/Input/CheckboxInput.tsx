interface CheckboxInputProps {
  onChange: (val: boolean) => void;
  label: string;
}

const CheckBoxInput: React.FC<CheckboxInputProps> = ({ onChange, label }) => {
  return (
    <div className="flex items-center gap-1 mt-2">
      <input
        type="checkbox"
        className="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <label className="label-text" htmlFor="checkBox">
        {label}
      </label>
    </div>
  );  
};

export default CheckBoxInput;