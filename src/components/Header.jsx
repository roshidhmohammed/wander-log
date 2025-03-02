import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  //   const params = useSearchParams();
  const [showMenuTab, setShowMenuTab] = useState(false);
  const isRegister = useSelector((store) => store.register.isRegister);

  const navItems = [
    { name: "WANDER_LOG", path: "/" },
    { name: "Home", path: "/" },
    { name: "Game Experience", path: "/game-experience" },
    {
      name: `${isRegister ? "Profile" : "Register"} `,
      path: `${isRegister ? "/profile" : "/register"}`,
    },
  ];

  const handleMenuTab = () => {
    setShowMenuTab(!showMenuTab);
  };

  const handleNavItem = (path) => {
    navigate(path);
    setShowMenuTab(!showMenuTab);
  };
  return (
    <div className=" z-50 shadow-md shadow-gray-00 fixed right-0 left-0 bg-[#02023f]  sm:px-10 py-5 font-serif text-gray-900  font-bold text-md">
      <div className="sm:flex justify-between hidden ">
        {navItems?.map((item) => (
          <button
            key={item.name}
            className={` ${
              item.name === "WANDER_LOG"
                ? "text-lg text-[#e74475]  contrast-200 "
                : "text-gray-50 "
            }  font-serif  transition-transform   delay-500  hover:rounded-full  px-5 
                hover:cursor-pointer rounded-full ease-in-out  transform              `}
            onClick={() => navigate(`${item.path}`)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="sm:hidden block ">
        <div className=" flex justify-between px-5">
          <Link to="/">
            <button
              className={`  text-lg text-[#e74475]  contrast-200   font-serif  transition-transform   delay-500  hover:rounded-full  px-5 
                hover:cursor-pointer rounded-full ease-in-out  transform              `}
            >
              WANDER_LOG
            </button>
          </Link>
          {!showMenuTab && (
            <TiThMenu
              color="white"
              className=" cursor-pointer"
              size={30}
              onClick={handleMenuTab}
            />
          )}
          <div
            className={` z-[50] fixed top-0 flex flex-col justify-between  right-0 left-0   bg-[#d7cbcb] shadow-lg transform transition-all duration-500 ease-in-out ${
              showMenuTab
                ? "translate-x-0 translate-y-0 duration-500 opacity-100 scale-100 "
                : " translate-x-full  opacity-0 scale-100 duration-500"
            }`}
          >
            <div className=" bg-[#fcfbfc] flex justify-between py-2 mb-4 px-5  shadow-lg ">
              <IoClose color="black" size={40} onClick={handleMenuTab} />
            </div>
            <div className=" h-[200vh] flex justify-start pl-5 font-sans font-bold text-gray-100 text-lg my-5 mt-5">
              <div className=" flex flex-col gap-5 items-start px-2">
                {navItems?.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavItem(item.path)}
                    className={`${
                      item?.name === "WANDER_LOG" && "hidden"
                    } text-gray-900`}
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
