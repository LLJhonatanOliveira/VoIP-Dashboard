const TableHeader = () => (
    <thead>
      <tr>
        {["Data", "Hora", "Origem", "Destino", "Duração"].map((header) => (
          <th key={header} className="px-4 py-2 border-b">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
  
  export default TableHeader;
  