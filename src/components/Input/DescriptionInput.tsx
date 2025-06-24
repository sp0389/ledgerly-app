interface DescriptionProps {
  value: string;
  onChange: (val: string) => void;
}

const DescriptionInput: React.FC<DescriptionProps> = ({ value, onChange }) => {
  return (
    <>
      <div className="relative">
        <label className="label-text" htmlFor="helperTextInput">
          Description
        </label>
        <textarea
          className="textarea textarea-bordered mt-2"
          placeholder="Enter a description"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        ></textarea>
      </div>
    </>
  );
};

export default DescriptionInput;