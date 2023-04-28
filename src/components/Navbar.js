import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-white sticky top-0">
      <div className="font-Roboto mx-[3%] h-[60px] flex justify-between items-center">
        <Link to="/" className="text-[22px] font-medium text-blue">
          Build Formula
        </Link>
        <div className="hidden tablet:flex tablet:gap-x-[30px] text-[17px]">
          <Link
            to="/"
            className="cursor-pointer font-medium hover:bg-lightWhite px-[10px] py-[2px] rounded-md"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer font-medium hover:bg-lightWhite px-[10px] py-[2px] rounded-md"
          >
            Contact
          </Link>
          <Link
            to="/task"
            className="cursor-pointer font-medium hover:bg-lightWhite px-[10px] py-[2px] rounded-md"
          >
            Task
          </Link>
        </div>
        <svg
          className="h-[30px] tablet:hidden"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowMenu(!showMenu)}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>

        {showMenu && (
          <div className="flex absolute right-0 top-[61px] w-full">
            <div
              className="bg-black opacity-50 w-[60%] h-[calc(100vh-61px)]"
              onClick={() => setShowMenu(false)}
            ></div>
            <div className=" pt-[10px] flex flex-col items-center gap-y-[10px] bg-white w-[40%] h-[calc(100vh-61px)]">
              <Link
                to="/"
                className="cursor-pointer font-medium hover:bg-lightWhite px-[10px] py-[2px] rounded-md"
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="cursor-pointer font-medium hover:bg-lightWhite px-[10px] py-[2px] rounded-md"
                onClick={() => setShowMenu(false)}
              >
                Contact
              </Link>
              <Link
                to="/task"
                className="cursor-pointer font-medium hover:bg-lightWhite px-[10px] py-[2px] rounded-md"
                onClick={() => setShowMenu(false)}
              >
                Task
              </Link>
            </div>
          </div>
        )}
      </div>
      <hr className="h-[1px]" />
    </div>
  );
};

export default Navbar;
