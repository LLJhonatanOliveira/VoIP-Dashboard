import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SearchBarProps {
  onSearch: (term: string | Date | null, type: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchDate, setSearchDate] = useState<Date | null>(null);
  const [searchType, setSearchType] = useState<string>("origin");

  const handleSearch = () => {
    const searchValue = searchType === "date" ? searchDate : searchTerm;
    onSearch(searchValue, searchType);
  };

  return (
    <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg">
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="p-2 rounded border border-gray-300 bg-white"
      >
        <option value="origin">Origem</option>
        <option value="destination">Destino</option>
        <option value="date">Data</option>
      </select>
      
      {searchType === "date" ? (
        <DatePicker
          selected={searchDate}
          onChange={(date: Date | null) => setSearchDate(date)}
          placeholderText="Selecione uma data"
          className="p-2 border border-gray-300 rounded bg-white"
          dateFormat="dd/MM/yyyy"
        />
      ) : (
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
          className="p-2 border border-gray-300 rounded flex-1"
        />
      )}

      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
