import { MdSearch } from 'react-icons/md';

const SearchInput = () => {
  return (
    <div className="focus-within:shadow-searchInput flex flex-nowrap items-center border-[1px] border-slate-900 focus-within:border-transparent ">
      <MdSearch className=" w-[20%] cursor-pointer pl-1 text-2xl" />
      <input className="w-full p-1 outline-none" type="text" />
    </div>
  );
};

export default SearchInput;
