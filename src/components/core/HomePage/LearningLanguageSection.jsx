import React from "react";
import HighLightText from "./HighLightText";
import CTAButton from "../../../components/core/HomePage/Button";

import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"

export const LearningLanguageSection = () => {
  return (
    <div className="my-28">
      <div className="flex flex-col gap-5">
 
        <div className="text-4xl font-semibold text-center">
          Your swiss knife for <HighLightText text={"learning any language"} />
        </div>

        <div className="font-medium text-base text-richblack-600 mx-auto 
         text-center w-[60%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex items-center justify-center">
          <img src={know_your_progress} alt="know_your_progress" className="object-contain -mr-36"/>
          <img src={compare_with_others} alt="compare_with_others" className="object-contain"/>
          <img src={plan_your_lesson} alt="plan_your_lesson" className="object-contain -ml-36"/>
        </div>

        <div className=" w-fit mx-auto">
          <CTAButton active={true} linkto={"/signup"}>
            Leran More
          </CTAButton>
        </div>

        

      </div>
    </div>
  );
};
export default LearningLanguageSection;
