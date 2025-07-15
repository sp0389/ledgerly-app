interface TitleProps {
  label: string;
  value: string;
  placeholderText: string;
  onChange: (input: string) => void;
}

const Title: React.FC<TitleProps> = ({ value, label, placeholderText, onChange }) => {
  return (
    <div>
      <label className="label-text" htmlFor="labelAndHelperText">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholderText}
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Title;