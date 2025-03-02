import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";

const LandingPage = () => {
  const isRegister = useSelector((store) => store.register.isRegister);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const handlePlayGame = () => {
    if (isRegister) {
      navigate("/game-experience");
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };
  return (
    <div className="bg-linear-65 from-[#833ab4] to-[#d03333] h-screen flex flex-col justify-center">
      {showAlert && (
        <ErrorAlert message="Please register your account, before exploring the games" />
      )}

      <div className="   pt-28  ">
        <div className=" flex justify-start items-center flex-col font-sans">
          <div className=" text-gray-100   font-bold  flex justify-center items-center ">
            {/* <span className=" text-[20px]"> 🌎</span>{" "} */}
            <span className="sm:text-[40px] text-[20px] tracking-widest">
              Globe Trotter Challenge{" "}
            </span>
          </div>
          <div className=" text-gray-100  brightness-200 sm:text-[30px] text-[20px] font-bold tracking-wider flex justify-center   items-center ">
            <span>Let's Play, Explore and Wins</span>
            <span className=" sm:text-[50px] sm:ml-0 ml-2"> 🏆</span>
          </div>
          <div className=" sm:text-center mt-10 text-gray-300 text-justify sm:text-[22px] font-mono font-bold px-10">
            Welcome to Globe Trotter Challenge, the ultimate travel trivia game
            where your knowledge of world destinations is put to the test! Get
            ready to embark on an exciting journey, unlock clues, and guess the
            correct location to win points!
          </div>

          <div className=" mt-20">
            <button
              className=" bg-[#000001] hover:bg-gray-800 text-gray-50 brigt rounded-lg  p-3 hover:cursor-pointer"
              onClick={() => handlePlayGame()}
            >
              Let's Start the game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
