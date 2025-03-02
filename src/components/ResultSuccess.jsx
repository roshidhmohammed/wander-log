import React, { useEffect, useState } from "react";
import AnimateConfetti from "./AnimateConfetti";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utility/axiosInstance";
import Button from "./Button";

const ResultSuccess = () => {
  const { destinationId } = useParams();
  const [showConfetti, setShowConfitte] = useState();
  const [destinationFunFacts, setDestinationFunFacts] = useState();
  const [destinationTrivias, setDestinationTrivias] = useState();

  useEffect(() => {
    setShowConfitte(true);
    setTimeout(() => {
      setShowConfitte(false);
    }, 5000);
    fetchDestinationFunFacts();
  }, []);

  const fetchDestinationFunFacts = async () => {
    await axiosInstance
      .get(`/destination/destination-fun-facts?destinationId=${destinationId}`)
      .then((res) => {
        setDestinationFunFacts(res.data.destinationFunFacts);
        setDestinationTrivias(res.data.destinationTrivias);
      })
      .catch(() => {});
  };

  return (
    <div className="bg-[#F2EFE7] pt-28 h-screen">
      {showConfetti && <AnimateConfetti />}
      <div className=" flex flex-col justify-center  font-sans">
        <div className=" text-center font-bold text-[30px]">
          Congratulation for the right answer 🎉
        </div>
        <div className=" flex justify-center flex-col  mt-10 mx-40">
          <h1 className=" font-bold text-[25px] ">Fun Facts:</h1>
          <div className="  rounded-lg drop-shadow-2xl p-5 bg-gray-100">
            <ul className=" list-disc ml-10">
              {destinationFunFacts?.map((fact) => (
                <li>{fact}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex justify-center flex-col  mt-10 mx-40">
          <h1 className=" font-bold text-[25px] ">Trivias:</h1>
          <div className="  rounded-lg drop-shadow-2xl p-5 bg-gray-100">
            <ul className=" list-disc ml-10">
              {destinationTrivias?.map((fact) => (
                <li>{fact}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex justify-center   mt-10 mx-40">
          <Link to="/profile">
            <Button name="View your score" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultSuccess;
