import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/lottieAnimations/Animation - 1740896034885.json";
import Button from "./Button";
import { Link } from "react-router-dom";

const ResultFail = () => {
  return (
    <div className=" bg-[#F2EFE7] flex flex-col justify-center items-center h-screen">
      <div className=" flex flex-col justify-center items-center ">
        <Lottie animationData={Animation} className="w-60 h-60" />
      </div>

      <div className=" font-sans mt-10 flex flex-col justify-center gap-5">
        <h1 className=" font-bold text-[25px] text-gray-800">
          {" "}
          Don't be sad. You can play the next game
        </h1>
        <Link to="/game-experience" className="  flex justify-center">
          <Button name="Play Next Game" />
        </Link>
      </div>
    </div>
  );
};

export default ResultFail;
