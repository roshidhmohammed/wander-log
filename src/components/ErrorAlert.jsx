import React from "react";

const ErrorAlert = ({ message }) => {
  return (
    <div role="alert">
      <div className="absolute top-20 left-5 right-5 md:left-40 md:right-40 lg:left-80 lg:right-80 bg-red-500  text-white font-bold rounded-t px-4 py-2">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;
