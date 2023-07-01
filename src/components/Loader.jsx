//To load the model in the meantime of oloading webpage
import React from "react";
import AnimatedLogo from "../assets/images/logo-animated.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img className="logo" src={AnimatedLogo} alt="Apple Loader" />
    </div>
  );
};

export default Loader;