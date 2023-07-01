//HERO SECTION
import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {
  //   TO IMPLEMENT THE TRANSITION FROM HERO SECTION TO SOUND SECTION USING scrollTo METHOD

  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      //Top--> To get the top position of the element
      top: element?.getBoundingClientRect().top,
      //left=0 as no horizontal movement is required
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={Iphone} alt="iPhone 14 Pro" />
      <p className="text">Big and bigger</p>
      <span className="description">
        {" "}
        From $41.62/mo. or $999 before trade-in{" "}
      </span>

      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="Iphone" />
    </div>
  );
};

export default Jumbotron;
