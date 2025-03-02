import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utility/axiosInstance";

const Profile = () => {
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = async () => {
    const userId = localStorage.getItem("userId");
    await axiosInstance
      .get(`/user/user-details?userId=${userId}`)
      .then((res) => {
        setUserDetails(res.data.user);
      })
      .catch(() => {
        console.log("failed to fetch the user details");
      });
  };
  return (
    <div className="bg-[#F2EFE7]  h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg font-sans rounded-2xl p-6 w-full max-w-sm text-center h-[50vh] flex items-center justify-center flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">
          {userDetails?.name}
        </h2>
        <p className="text-gray-600  font-bold text-sm mt-2">
          Total Score :{" "}
          <span className="text-gray-900"> {userDetails?.totalScore}</span>
        </p>
        <p className="text-gray-600 font-bold text-sm mt-2">
          Total Correct Answers :{" "}
          <span className="text-gray-900"> {userDetails?.correctAnswers}</span>
        </p>
        <p className="text-gray-600 font-bold text-sm mt-2">
          Total Incorrect Answers :{" "}
          <span className="text-gray-900">
            {" "}
            {userDetails?.inCorrectAnswers}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
