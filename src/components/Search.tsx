import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import { HiSearch } from "react-icons/hi";

interface SearchProps {
  search: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleKeyPress: KeyboardEventHandler<HTMLInputElement>;
  submitForm: () => void;
}

export default function Search(props: SearchProps) {
  const { search, handleChange, handleKeyPress, submitForm } = props;
  return (
    <div className="flex justify-between rounded-lg dark:bg-gray-800  bg-gray-50 mb-8">
      <input
        className="bg-transparent w-full pl-6 p-2 sm:text-md placeholder:font-bold font-bold text-lg text-gray-900 dark:placeholder-gray-600 dark:text-white focus:outline-none"
        type="text"
        value={search}
        placeholder="Search for any word..."
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={submitForm} className="w-14 h-14 bg-transparent mr-6">
        <HiSearch className="w-full text-purple-500 text-2xl" />
      </button>
    </div>
  );
}
