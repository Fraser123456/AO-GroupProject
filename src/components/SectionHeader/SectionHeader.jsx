import React from "react";

//Styles
import "./SectionHeader.css";

const SectionHeading = ({ title, showDivider = true, color = "black" }) => {
  return (
    <>
      <h1
        className={`text-${color} text-center section-heading justify-self-starts my-4`}
        style={{ fontSize: 72 }}
      >
        {title}
      </h1>
      {showDivider && (
        <div className="w-1/2 border-b-2 border-gray self-center"></div>
      )}
    </>
  );
};

export default SectionHeading;
