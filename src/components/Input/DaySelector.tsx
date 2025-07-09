import { DayOfWeek } from "../../types/transaction";

interface DaySelectorProps {
  label: string;
  days: DayOfWeek[];
  setDays: (val: DayOfWeek[]) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ label, days, setDays }) => {
  const handleDayOfWeek = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = DayOfWeek[e.target.value as keyof typeof DayOfWeek];

    e.target.checked == true
      ? setDays([...days, value])
      : setDays(days.filter((day) => day !== value));
  };

  return (
    <div>
      <div className="mt-2">
        <label className="label-text">{label}</label>
        {Object.keys(DayOfWeek)
          .filter((day) => isNaN(Number(day)))
          .map((day) => (
            <div key={day}>
              <input
                type="checkbox"
                value={day}
                onChange={(e) => handleDayOfWeek(e)}
              />
              <label> {day}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DaySelector;