import { Link } from "react-router-dom";
import MonitorIcon from "@mui/icons-material/Monitor";
import HistoryIcon from "@mui/icons-material/History";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

function SideMenu() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4">
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center my-2">
            <MonitorIcon className="text-gray-500 mr-2" />{" "}
            <Link
              to="/monitoring"
              className="block p-2 hover:bg-gray-700 rounded text-lg"
            >
              Monitoramento de Ramais
            </Link>
          </li>
          <li className="flex items-center my-2">
            <HistoryIcon className="text-gray-500 mr-2" />{" "}
            <Link
              to="/history"
              className="block p-2 hover:bg-gray-700 rounded text-lg"
            >
              Histórico de Ligações
            </Link>
          </li>
          <li className="flex items-center my-2">
            <HeadsetMicIcon className="text-gray-500 mr-2" />{" "}
            <Link
              to="/recordings"
              className="block p-2 hover:bg-gray-700 rounded text-lg"
            >
              Gravações de Ligações
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenu;
