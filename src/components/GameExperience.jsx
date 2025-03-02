import React from "react";
import { useNavigate } from "react-router-dom";

const GameExperience = () => {
  const navigate = useNavigate();
  const destinationGridNumbers = [...Array(100).keys()];

  const handlePickedNumber = (number) => {
    navigate(`/destination/${number + 1}`);
  };

  return (
    <div className="pt-28 bg-[#F2EFE7] pb-20">
      <div className=" flex justify-center pb-10 flex-col items-center">
        <p className=" text-lg font-bold text-gray-900">Pick a Number !!!</p>
        <p className=" text-gray-700 font-bold">
          Your adventure starts with a random number selection.
        </p>
      </div>
      <div className=" grid sm:px-20 px-5  lg:px-60  sm:grid-cols-6 grid-cols-4 gap-5">
        {destinationGridNumbers?.map((number) => (
          <div
            key={number}
            className="p-5 bg-[#E50046] rounded-lg shadow-2xl shadow-gray-300 hover:cursor-pointer  text-center "
            onClick={() => handlePickedNumber(number)}
          >
            <h1 className=" text-gray-100 font-bold font-mono">{number + 1}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameExperience;
