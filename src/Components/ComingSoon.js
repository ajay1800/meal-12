import React from "react";
// import "./styles.css";
import Lottie from "react-lottie";
import animationData from "./lotties/chefGif.json";

export default function ChegGif() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "end",
        fontSize: "100px",
        color: "gray",
        justifyContent:"center"
      }}
    >
      <div> Coming soon</div>
      <div>
        <Lottie options={defaultOptions} height={200} width={270} />
      </div>
    </div>
  );
}