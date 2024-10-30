import TableHeader from "../../molecules/TableHeader/TableHeader";
import TableRow from "../../molecules/TableRow/TableRow";


interface CallRecord {
  date: string;
  time: string;
  origin: string;
  destination: string;
  duration: string;
}

interface CallHistoryTableProps {
  callData: CallRecord[];
}

const CallHistoryTable = ({ callData }: CallHistoryTableProps) => (
  <table className="min-w-full border border-gray-200 bg-white shadow-md rounded">
    <TableHeader />
    <tbody>
      {callData.map((call, index) => (
        <TableRow
          key={index}
          date={call.date}
          time={call.time}
          origin={call.origin}
          destination={call.destination}
          duration={call.duration}
        />
      ))}
    </tbody>
  </table>
);

export default CallHistoryTable;
