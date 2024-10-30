import TableCell from "../../atoms/TableCell/TableCell";

interface TableRowProps {
  date: string;
  time: string;
  origin: string;
  destination: string;
  duration: string;
}

const TableRow = ({ date, time, origin, destination, duration }: TableRowProps) => (
  <tr className="hover:bg-gray-100">
    <TableCell>{date}</TableCell>
    <TableCell>{time}</TableCell>
    <TableCell>{origin}</TableCell>
    <TableCell>{destination}</TableCell>
    <TableCell>{duration}</TableCell>
  </tr>
);

export default TableRow;
