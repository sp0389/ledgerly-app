import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import { getTransactions } from "../../services/financeService";
import { type Transaction } from "../../types/transaction";

type CalendarOptions = {
  title: string;
  start: Date;
  end?: Date;
};

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarOptions[]>([]);

  const fetchTransactionsFromApi = async () => {
    try {
      const transactions = await getTransactions();

      const eventData: CalendarOptions[] = transactions.map(
        (t: Transaction) => ({
          title: t.title,
          start: t.date,
          end: t.endDate,
        })
      );

      setEvents(eventData);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTransactionsFromApi();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={events}
    />
  );
};

export default Calendar;