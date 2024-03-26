import React from 'react';
import { MdSearch } from 'react-icons/md';

type SearchInputProps = {
  searchInput: string;
  setSearchInput: (inputValue: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchInput(e.target.value);
  };
  return (
    <div className="flex w-full flex-nowrap items-stretch justify-stretch rounded-md border-[1px] border-slate-900 focus-within:border-transparent focus-within:shadow-searchInput ">
      <MdSearch className="h-9 w-auto cursor-pointer p-1" />
      <input
        className="w-full bg-transparent p-1 outline-none"
        type="text"
        value={props.searchInput}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchInput;
