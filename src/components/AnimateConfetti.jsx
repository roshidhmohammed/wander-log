import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const AnimateConfetti = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width - 300} height={height - 20} />;
};

export default AnimateConfetti;
