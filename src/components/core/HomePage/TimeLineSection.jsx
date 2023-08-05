import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimeLineSection = () => {
  return (
    <div className="flex flex-row justify-between items-center py-8">
      
      {/* left part */}
      <div className="w-[45%] flex flex-col gap-11">
        {timeline.map((element, i) => {
          return (
            <div  key={i}>
              
              <div className="flex flex-row gap-6">
                
                <div className="w-[50px] h-[50px] bg-white rounded-full 
                flex items-center justify-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  <img src={element.Logo} alt="" />
                </div>

                <div>
                  <h2 className="font-semibold text-[18px]">
                    {element.Heading}
                  </h2>
                  <p className="text-[14px]">{element.Description}</p>
                </div>

              </div>

              <div
                className={`hidden ${
                  timeline.length - 1 === i ? "hidden" : "lg:block"
                } h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
              ></div>

            </div>
          );
        })}
      </div>

      {/* right part */}
      <div className="relative h-fit w-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">

        <img src={timelineImage} alt="timelineImage" 
        className=" shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit" />

        <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 
        flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
          
          <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
            <p className=" text-3xl font-bold w-20">10</p>
            <p className=" text-caribbeangreen-300 text-sm w-20">YEARS <br /> EXPERIENCES</p>
          </div>

          <div className="flex gap-5 items-center px-7 lg:px-14">
            <p className=" text-3xl font-bold w-20">250</p>
            <p className=" text-caribbeangreen-300 text-sm w-20">types of<br /> courses </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TimeLineSection;
