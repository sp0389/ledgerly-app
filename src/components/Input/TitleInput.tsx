interface TitleProps {
  label: string;
  value: string;
  onChange: (input: string) => void;
}

const Title: React.FC<TitleProps> = ({ value, label, onChange }) => {
  return (
    <div>
      <label className="label-text" htmlFor="labelAndHelperText">
        {label}
      </label>
      <input
        type="text"
        placeholder="e.g. Rent Payment"
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Title;