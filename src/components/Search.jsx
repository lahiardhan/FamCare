import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const [search, setSearch] = useState("")
  return (
    <div className="w-full flex">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch />
        </div>
        <input
          type="text"
          id="simple-search"
          className="text-gray-300bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-secondary-color focus:border-secondary-color w-full pl-10 p-2.5"
          required
          placeholder="Cari pembahasan..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-primary-color rounded-lg border focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        <FiSearch />
      </button>
    </div>
  );
};

export default Search;