import React from "react";
import instructor from "../../../assets/Images/Instructor.png";
import HighLightText from "./HighLightText";
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="my-24">
      <div className="flex items-center gap-24">
        <div className="w-[50%]">
          <img
            src={instructor}
            alt=""
            className=" shadow-white shadow-[-20px_-20px_0_0]"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold">
            Become an <br />
            <HighLightText text={"instructor"} />{" "}
          </div>

          <p className=" font-medium text-[1rem] text-justify text-richblack-300 w-[80%]">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
