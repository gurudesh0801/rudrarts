import React from "react";
import "./Home.css";
import wallImg from "../../assets/images/tatbwall.png";
import video from "../../assets/images/videoplayback(1).mp4";

const Home = () => {
  return (
    <>
      <div className="mainDiv">
        <h1 className="text-center heading1">Rudra Arts</h1>
        <video className="backVideo" muted autoPlay src={video}></video>
        <img className="wallImg" src={wallImg} alt="wallImg" />
      </div>
    </>
  );
};

export default Home;
