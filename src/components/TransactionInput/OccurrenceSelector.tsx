import React from "react";

interface OccurrenceSelectorProps {
  value: number;
  label: string;
  setOccurrence: (val: number) => void;
}

const OccurrenceSelector: React.FC<OccurrenceSelectorProps> = ({
  value,
  label,
  setOccurrence,
}) => {
  const handleIncrement = () => {
    setOccurrence(value + 1);
  };

  const handleDecrement = () => {
    if (value >= 1) {
      setOccurrence(value - 1);
    }
  };

  return (
    <div>
      <label className="label-text mt-2" htmlFor="helperTextInput">
        {label}
      </label>

      <div className="input max-w-sm" data-input-number>
        <input
          type="text"
          value={value}
          aria-label="Input number"
          data-input-number-input
          onChange={(e) => setOccurrence(parseInt(e.target.value))}
        />

        <span className="my-auto flex gap-3">
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            aria-label="Decrement button"
            data-input-number-decrement
            onClick={handleDecrement}
          >
            <span className="icon-[tabler--minus] size-3.5 shrink-0"></span>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            aria-label="Increment button"
            data-input-number-increment
            onClick={handleIncrement}
          >
            <span className="icon-[tabler--plus] size-3.5 shrink-0"></span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default OccurrenceSelector;