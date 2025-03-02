import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utility/axiosInstance";
import Button from "./Button";
import AnimateConfetti from "./AnimateConfetti";

const DestinationClue = () => {
  const { number } = useParams();
  const [destinationClues, setDestinationClues] = useState();
  const [destinationOptions, setDestinationOptions] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetchDestinationData(number);
  }, [number]);

  const fetchDestinationData = async (number) => {
    await axiosInstance
      .get(`/destination/destination-data?number=${number}`)
      .then((res) => {
        const data = res.data;
        setDestinationClues(data.destinationClues);
        setDestinationOptions(data.destinationOptions);
      })
      .catch(() => {
      });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    await axiosInstance
      .post("/user/submit-answer", { selectedOption, number, userId })
      .then((res) => {
        if (res.data.success) {
          navigate(`/success/${number}`, { replace: true });
        } else {
          navigate(`/failed/${number}`, { replace: true });
        }
      })
      .catch(() => {});
  };

  return (
    <div className="bg-[#F2EFE7] pt-28 h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-200 p-5 rounded-lg drop-shadow-2xl  font-sans mx-2 sm:mx-0">
        <h1 className=" text-center font-bold my-5">
          Uncover exciting hints about a mystery destination.
        </h1>
        <form onSubmit={handleSubmitAnswer}>
          <div>
            <h1 className=" font-bold text-xl text-gray-600 ">Clues:</h1>
            <ul className=" ml-3 mt-5">
              {destinationClues?.map((clue, index) => (
                <li
                  key={clue}
                  className=" font-semi-bold text-gray-900 text-md"
                >
                  {index + 1}. {clue}
                </li>
              ))}
            </ul>

            <div className=" ml-7 mt-5">
              {destinationOptions?.map((clue, index) => (
                <div
                  key={index}
                  className="flex items-center ps-4 border border-gray-300 rounded-sm mb-3"
                >
                  <input
                    required
                    id={`option-${index}`}
                    type="radio"
                    value={clue}
                    checked={selectedOption === clue}
                    onChange={handleOptionChange}
                    name="destination"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-400 "
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 "
                  >
                    {clue}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-2">
              <Button name="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DestinationClue;
