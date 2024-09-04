import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/doj.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className=" pt-2 flex w-fit ">
          <img className="" src={companyLogo} alt="" />
          <div className="py-3 mx-4">
            <p className="text-lg">न्याय विभाग</p>
            <p className="text-2xl font-semibold">DEPARTMENT OF JUSTICE</p>
          </div>
        </Link>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <Link to="#">Administration of Justice</Link>
          <Link to="#">National Mission</Link>
          <Link to="#">eCourts MMP</Link>
          <Link to="#">Access to Justice</Link>
          <Link to="#">Media Corner</Link>
        </div>
        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger md:hidden focus:outline-none"
              : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link to="#">Administration of Justice</Link>
          <Link to="#">National Mission</Link>
          <Link to="#">eCourts MMP</Link>
          <Link to="#">Access to Justice</Link>
          <Link to="#">Media Corner</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
