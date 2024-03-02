import React from 'react';
import { MdSearch } from 'react-icons/md';

type SearchInputProps = {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchInput(e.target.value);
  };
  return (
    <div className="mx-auto flex w-[95%] flex-nowrap items-center border-[1px] border-slate-900 focus-within:border-transparent focus-within:shadow-searchInput ">
      <MdSearch className=" w-[20%] cursor-pointer pl-1 text-2xl" />
      <input
        className="w-full p-1 outline-none"
        type="text"
        value={props.searchInput}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchInput;
