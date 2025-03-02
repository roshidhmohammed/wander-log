import React from "react";

const Button = ({ name }) => {
  return (
    <button
      type="submit"
      className=" bg-[#02023f] hover:bg-gray-800 text-gray-50 brigt rounded-lg  p-2 px-4 hover:cursor-pointer"
    >
      {name}
    </button>
  );
};

export default Button;
