'use client';
import { IoReload } from 'react-icons/io5';

export default function Error() {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="flex h-full flex-col items-center gap-8 font-mono">
      <div className="flex flex-col gap-2">
        <h2 className=" px-3 text-center text-2xl text-red-600">Error has occurred ! </h2>
        <p>
          Please contact support if the error persists <span className="text-sky-600"> support@test.com</span>
        </p>
      </div>
      <IoReload className="size-6 cursor-pointer hover:scale-110 hover:text-blue-900" onClick={handleReset} />
    </div>
  );
}
