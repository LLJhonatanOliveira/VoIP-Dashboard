import SearchBar from "../components/molecules/SearchBar/SearchBar";
import CallHistoryTable from "../components/organisms/CallHistoryTable/CallHistoryTable";


const callData = [
    { date: "2024-10-30", time: "14:23", origin: "101", destination: "202", duration: "00:10:25" },
    { date: "2024-10-29", time: "09:12", origin: "103", destination: "204", duration: "00:05:45" },
    { date: "2024-10-29", time: "16:45", origin: "104", destination: "305", duration: "00:08:32" },
    { date: "2024-10-28", time: "11:30", origin: "101", destination: "203", duration: "00:03:12" },
    { date: "2024-10-28", time: "13:17", origin: "106", destination: "208", duration: "00:12:10" },
    { date: "2024-10-27", time: "15:05", origin: "102", destination: "205", duration: "00:07:21" },
    { date: "2024-10-27", time: "10:55", origin: "108", destination: "202", duration: "00:06:54" },
    { date: "2024-10-26", time: "14:12", origin: "105", destination: "303", duration: "00:09:35" },
    { date: "2024-10-25", time: "09:48", origin: "101", destination: "204", duration: "00:02:47" },
    { date: "2024-10-25", time: "17:18", origin: "103", destination: "206", duration: "00:15:20" },
    { date: "2024-10-24", time: "12:33", origin: "107", destination: "201", duration: "00:04:25" },
    { date: "2024-10-23", time: "08:22", origin: "104", destination: "207", duration: "00:11:12" },
    { date: "2024-10-22", time: "18:01", origin: "106", destination: "309", duration: "00:13:15" },
    { date: "2024-10-22", time: "10:10", origin: "109", destination: "210", duration: "00:03:05" },
    { date: "2024-10-21", time: "14:55", origin: "102", destination: "205", duration: "00:08:43" },
    { date: "2024-10-20", time: "16:20", origin: "101", destination: "209", duration: "00:10:58" },
  ];
  

const CallHistoryPage = () => (
  <div className="p-4">
    <h2 className="text-2xl mb-4">Histórico de Chamadas</h2>
    <SearchBar />
    <div className="overflow-x-auto">
      <CallHistoryTable callData={callData} />
    </div>
  </div>
);

export default CallHistoryPage;
