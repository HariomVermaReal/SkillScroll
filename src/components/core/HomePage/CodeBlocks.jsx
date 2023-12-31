import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex ${position} w-11/12 my-20 justify-between gap-10 ml-4`}
    >
      {/* section1 */}
      <div className="w-[50%] flex flex-col">
        {heading}

        <div className="text-richblack-300 font-medium w-[90%] mt-7">
          {subheading}
        </div>

        <div className="flex gap-7 mt-12">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* section2 for code animation */}
      <div className="h=fit flex text-[1rem] w-[450px] py-3 code-border relative">
        <div className={`absolute ${backgroundGradient}`}></div>
        <div
          className="text-center flex flex-col w-[10%] text-richblack-400 
            font-inter font-bold"
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
        </div>

        <div
          className={`w-[90%] flex flex-col gap-2 font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock[0], 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              color: "yellow",
            }}
            omitDeletionAnimation={true}
          />

          <TypeAnimation
            sequence={[codeblock[1], 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              color: "white",
            }}
            omitDeletionAnimation={true}
          />

          <TypeAnimation
            sequence={[codeblock[2], 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              color: "#D43D63",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
      
    </div>
  );
};
export default CodeBlocks;
