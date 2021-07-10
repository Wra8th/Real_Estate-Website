import React from "react";
import estate from "./estate.mp4";
import "../index.css"

export default function Home(){
  return(
    <div className="relative height-full width-full">
      <video src={estate} 
      loop
      muted
      autoPlay
      className="absolute opacity-75"></video>
      <h1 className="leading-none p-3 text-white text-3xl video-title libre md:p-8 md:text-5xl">Your Real Estate search ends here.</h1>
    </div>
  )
}

