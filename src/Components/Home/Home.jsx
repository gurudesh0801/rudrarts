import React from "react";
import "./Home.css";
import wallImg from "../../assets/images/tatbwall.png";
import video from "../../assets/images/videoplayback(1).mp4";

const Home = () => {
  return (
    <>
      <div className="mainDiv d-flex align-items-center justify-content-center">
        {/* <h1 className="text-center display-1 text-white">Jay Shree Ram</h1> */}
        <video className="backVideo" autoPlay muted src={video}></video>
        <img className="wallImg" src={wallImg} alt="wallImg" />
      </div>
    </>
  );
};

export default Home;
