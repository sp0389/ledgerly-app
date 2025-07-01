import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";

const Calendar: React.FC = () => {
  //TODO: fetch actual data
  const [data, setData] = useState({});
  const events = [
    { title: "Rent Payment", date: new Date() },
    { title: "Pay from XYZ Inc.", date: new Date("2025-08-01") },
  ];

  useEffect(() => {
    setData(events);
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={data}
    />
  );
};

export default Calendar;