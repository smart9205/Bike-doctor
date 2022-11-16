import React from "react";
import photo from "../../Image/businessmen.png";
import "./ParsInformation.css";

const PartsInformation = () => {
  return (
    <div className="banner">
      <div className="mt-10 shadow-2xl">
        <div className="hero min-h-screen  rounded  ">
          <div className="hero-content  flex-col lg:flex-row">
            <img className="" src={photo} />
            <div className="text-black">
              <h1 className="text-5xl font-bold">
                Thank you for your purchase from
                <span className=" text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-500 ">
                  {" "}
                  Bike Doctor
                </span>
              </h1>

              <p className="py-6">
                Please let us know if we can do anything else to help!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsInformation;
