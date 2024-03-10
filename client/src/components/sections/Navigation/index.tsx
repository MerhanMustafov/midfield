'use client';
import { FiMenu } from 'react-icons/fi';
import { useVisibilityState } from '@/contexts/visibility';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { getUser, removeUser } from '@/utils/user.utils';

export default function Navigation() {
  const router = useRouter();
  const user = getUser();

  const {
    navMobile: { showNavMobile, toggleNavMobile },
  } = useVisibilityState();

  const handleToggleNavDropDown = () => {
    toggleNavMobile();
  };

  const closeDropDown = () => {
    toggleNavMobile(false);
  };

  const handleLogoClick = () => {
    router.push('/');
    toggleNavMobile(false);
  };

  const handleSignOut = () => {
    removeUser();
    closeDropDown();
    redirect('/');
  };
  return (
    <nav className="relative box-border bg-black-perl p-3 md:p-4">
      <div className=" flex w-max cursor-pointer flex-row flex-nowrap items-center gap-4 px-2">
        <div onClick={handleLogoClick}>
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
        <FiMenu
          title="dropdown menu"
          onClick={handleToggleNavDropDown}
          className="cursor-pointer text-2xl text-white"
        />

        {showNavMobile && (
          <div className="absolute left-0 right-0 top-[calc(100%)] z-10 flex flex-col items-center gap-4 overflow-x-auto bg-black-perl p-3  text-white">
            {user && <div>profile</div>}
            <Link onClick={closeDropDown} href="/">
              Home
            </Link>

            {!user ? (
              <div className="my-4 flex w-full flex-col items-center gap-2 border-t-2 border-t-white p-2">
                <Link onClick={closeDropDown} href="/auth/sign-in">
                  Sign in
                </Link>
                <Link onClick={closeDropDown} href="/auth/sign-up">
                  Sign up
                </Link>
              </div>
            ) : (
              <div
                onClick={closeDropDown}
                className="my-4 flex w-full flex-col items-center gap-2 border-t-2 border-t-white p-2"
              >
                <div onClick={handleSignOut}>Sign out</div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
