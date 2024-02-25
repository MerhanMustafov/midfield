export default function Navigation() {
  return (
    <nav className="bg-black-perl p-3 shadow-md shadow-black md:p-4">
      <div className="group flex w-max cursor-pointer flex-row flex-nowrap rounded-sm px-2">
        <span
          className="
        border-b-2 border-b-white text-xl font-bold italic text-pink-700 md:text-2xl"
        >
          Mid
        </span>
        <span className="border-b-2 border-b-pink-700 pr-3 text-xl font-light italic text-white md:text-2xl">
          Field
        </span>
      </div>
    </nav>
  );
}
