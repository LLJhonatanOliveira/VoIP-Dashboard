interface TableCellProps {
    children: React.ReactNode;
  }
  
  const TableCell = ({ children }: TableCellProps) => (
    <td className="px-4 py-2 border-b text-center">{children}</td>
  );
  
  export default TableCell;
  