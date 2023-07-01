import React from "react";

const DisplaySection = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brillant</p>
      <span className="description">
        A display that's up to 2x brighter in the sun
      </span>

      {/* Button to trigger the 3D Model */}
      <button className="button" onClick={handleScrollToTop}>
        Top
      </button>
      {/* Button to move to the top of Page */}
      {/* <button className="back-button" onClick={handleScrollToTop}>
        TOP
      </button> */}
    </div>
  );
};

export default DisplaySection;
