'use client';
import { FiMenu } from 'react-icons/fi';
import { useVisibilityState } from '@/contexts/visibility/visibility.context';
import { redirect, useRouter } from 'next/navigation';
import Modal from '@/components/layouts/Modal/Modal';
import NavLink from '@/components/common/Links/NavLink/NavLink';
import { useAppStore } from '@/store/store';

export default function Navigation() {
  const router = useRouter();
  const appStore = useAppStore();
  const { user } = appStore.user.state;
  const { logout } = appStore.user.actions;

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
    logout();
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

        <Modal onClose={closeDropDown} isOpen={showNavMobile}>
          <div className="absolute left-0 right-0 top-[calc(100%)] z-30 flex flex-col items-center gap-4 overflow-x-auto bg-black-perl p-3  text-white">
            {/* TODO: change profile link to /profile or something */}
            {user && <NavLink label="Profile" href="/" cb={closeDropDown} />}
            <NavLink label="Home" href="/" cb={closeDropDown} />

            {!user ? (
              <div className="my-4 flex w-full flex-col items-center gap-2 border-t-2 border-t-white p-2">
                <NavLink label="Sign in" href="/auth/sign-in" cb={closeDropDown} />
                <NavLink label="Sign up" href="/auth/sign-up" cb={closeDropDown} />
              </div>
            ) : (
              <div className="my-4 flex w-full flex-col items-center gap-2 border-t-2 border-t-white p-2">
                <NavLink label="Sign out" href="/" cb={handleSignOut} />
              </div>
            )}
          </div>
        </Modal>
      </div>
    </nav>
  );
}
