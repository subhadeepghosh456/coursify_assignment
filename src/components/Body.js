import React, { useState } from "react";
import Navbar from "./Navbar";
import Imageslider from "./Imageslider";

const Body = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className="Body">
      <Navbar />
      <div className="inner-body">
        <h1 className="font">Where techies realise their true potential</h1>
        <p className="parafont">
          Look beyond the obvious. Use Cutshort to easily get discovered by
          awesome companies and get referred to job positions very few know
          about.
        </p>
        <div className="inside">
          <span className="button" onClick={handleClick}>
            Find jobs
          </span>
          <span className="button" onClick={handleClick}>
            Hire talent
          </span>
        </div>
      </div>
      {state && <div className="layer" onClick={handleClick}></div>}
      {state && (
        <div className="card">
          <div className="cross-container">
            <a className="cross" onClick={handleClick}>
              x
            </a>
          </div>
          <h5 style={{ textAlign: "center" }}>
            Sign up or log in to find jobs
          </h5>
          <div className="logo-c">
            <div className="logo-container">
              <img
                src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                alt="logo"
                className="logo"
              />
              <p>Continue with Google</p>
            </div>
          </div>
          <div className="logo-c">
            <div className="logo-container">
              <img
                src="https://pbs.twimg.com/profile_images/1646955748444852231/XGehZ_9v_400x400.jpg"
                alt="logo"
                className="logo"
              />
              <p>Continue with Facebook</p>
            </div>
          </div>
          <h5 style={{ textAlign: "center", paddingTop: "10px" }}>
            Sign up as Recruter or Candidate
          </h5>
        </div>
      )}
    </div>
  );
};

export default Body;
