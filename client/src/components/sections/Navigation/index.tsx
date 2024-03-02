'use client';
import { FiMenu } from 'react-icons/fi';
import { useVisibilityState } from '@/contexts/visibility';

export default function Navigation() {
  const { toggle } = useVisibilityState();

  const handleToggle = () => {
    toggle();
  };
  return (
    <nav className="bg-black-perl p-3 shadow-md shadow-black md:p-4">
      <div className=" flex w-max cursor-pointer flex-row flex-nowrap items-center gap-4 rounded-sm px-2">
        <div>
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
        <FiMenu onClick={handleToggle} className="cursor-pointer text-3xl text-white" />
      </div>
    </nav>
  );
}
