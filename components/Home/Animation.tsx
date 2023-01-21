import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import animation from "../../public/animation.json";

export default function Animation() {
  return (
    <Lottie loop animationData={animation} play/>
  );
}
