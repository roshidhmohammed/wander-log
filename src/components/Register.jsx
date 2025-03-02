import React, { useState } from "react";
import Button from "./Button";
import { axiosInstance } from "../utility/axiosInstance";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleRegistration = async (e) => {
    e.preventDefault();
    await axiosInstance
      .post("/user/registration", { name })
      .then((res) => {
        localStorage.setItem("userId", res.data.newUserId);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
          navigate("/");
          window.location.reload();
        }, 4000);
      })
      .catch((error) => {
        setShowErrorAlert(true);
        setTimeout(() => setShowErrorAlert(false), 5000);

        if (error.response) {
          setErrorMessage(
            error.response.data.message || "Something went wrong"
          );
        } else {
          setErrorMessage("Network error. Please try again.");
        }
      });
  };
  return (
    <div className="bg-[#F2EFE7]  h-screen flex flex-col justify-center items-center">
      {showSuccessAlert && (
        <SuccessAlert message="Your registration was successful" />
      )}
      {showErrorAlert && <ErrorAlert message={errorMessage} />}
      <div className="bg-gray-200 p-10 rounded-lg drop-shadow-2xl  font-sans mx-2 sm:mx-0 ">
        <h1 className=" text-gray-950 font-bold text-center">
          Please register with the below detail
        </h1>

        <form onSubmit={handleRegistration}>
          <div className=" mt-10 flex flex-col gap-3">
            <label
              htmlFor="name"
              className=" text-sm font-medium text-gray-900 "
            >
              Enter your full name
            </label>
            <input
              required
              type="text"
              name={name}
              onChange={handleNameChange}
              id="name"
              className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-5    "
              placeholder="Enter your name"
            />
          </div>
          <div className=" mt-5 flex justify-end">
            <Button name="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
