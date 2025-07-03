import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import { getTransactions } from "../../services/financeService";
import { type Transaction } from "../../types/transaction";

type CalendarOptions = {
  title: string;
  start: Date;
  end?: Date;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarOptions[]>([]);

  // const eventData = [
  //   { title: "Rent Payment", date: new Date() },
  //   { title: "Pay from XYZ Inc.", date: new Date("2025-08-01") },
  // ];

  const handleDataFromApi = async () => {
    try{
      const transactions = await getTransactions();

      const eventData:CalendarOptions[] = transactions.map((t: Transaction) => ({
        title: t.Title,
        start: t.Date,
        end: t.EndDate
      }));

      setEvents(eventData);
    }
    catch(error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    handleDataFromApi();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={events}
    />
  );
};

export default Calendar;