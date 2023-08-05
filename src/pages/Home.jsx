import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighLightText from "../components/core/HomePage/HighLightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import Elips1 from "../assets/Images/Ellipse 1.png";
import Elips2 from "../assets/Images/Ellipse 2.png";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";

function Home() {
  return (
    <div>
      {/* section 1 */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
        justify-between text-white z-50"
      >
        {/* Become an instructor button */}
        <Link to={"/signup"}>
          <div
            className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-semibold
            text-richblack-200 transition-all duration-200 hover:scale-95 w-fit 
            shadow-md shadow-pure-greys-500 "
          >
            <div
              className="flex flex-row items-center gap-2 px-5 rounded-full py-1 
              transition-all duration-200 group-hover:bg-richblack-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* heading */}
        <div className=" text-center text-4xl font-semibold mt-9 mb-4">
          Empower Your Future With
          <HighLightText text={"Coading Skills"} />
        </div>

        {/* sub heading */}
        <div className="w-[65%] text-center font-medium text-[1rem] text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA buttons */}
        <div className="flex flex-row mt-9 gap-7 z-20">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Hero video */}
        <div className="mt-10 mx-4 my-12 relative shadow-[20px_20px_0_0_#f5f5f5] z-10">
          <div>
            <img
              src={Elips2}
              alt="elipse"
              width={"100%"}
              className="absolute bottom-[1%] -z-10"
            />
            <img
              src={Elips1}
              alt="elipse"
              width={"100%"}
              className="absolute right-[12%] top-[2%] -z-10"
            />
          </div>

          <video muted autoPlay loop>
            <source src={Banner} />
          </video>
        </div>

        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={"flex-row"}
            backgroundGradient={"codeblock1"}
            heading={
              <div className=" text-4xl font-semibold">
                Unlock Your
                <HighLightText text={"coding potential"} />
                <br />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={[
              `<!DOCTYPE html>`,
              `<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>HTML 5 Boilerplate</title>\n<link rel="stylesheet" href="style.css">\n</head>`,
              `<body>\n<script src="index.js"></script>\n</body>\n</html>`,
            ]}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* code section 2 */}
        <div>
          <CodeBlocks
            position={"flex-row-reverse"}
            backgroundGradient={"codeblock2"}
            heading={
              <div className=" text-4xl font-semibold">
                Start
                <HighLightText text={`coding`} />
                <br />
                <HighLightText text={` in seconds`} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={[
              `<!DOCTYPE html>`,
              `<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>HTML 5 Boilerplate</title>\n<link rel="stylesheet" href="style.css">\n</head>`,
              `<body>\n<script src="index.js"></script>\n</body>\n</html>`,
            ]}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* Boxes=> Unlock the power of code */}
      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-fit max-w-maxContent flex items-center mx-auto">
            <div className="flex flex-row gap-7 text-white mt-52">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col">
          <div className="flex flex-row justify-between my-20">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a
              <HighLightText text={"job"} />
              <br />
              <HighLightText text={"that is in demand."} />
            </div>

            <div className="flex flex-col gap-5 w-[40%] items-start mr-8">
              <div>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div>
                <CTAButton active={true} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>

          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* section 3 */}
      <div className=" bg-richblack-900">

        <div
          className="w-11/12 mx-auto max-w-maxContent flex flex-col 
       text-white"
        >
          {/* become an instructor */}
          <InstructorSection />
          {/* reviews */}
          <h2 className="text-4xl font-semibold text-center mb-24">
            Reviews from other learners
          </h2>
          {/* reviews slide here  */}
        </div>
      </div>

      {/* footer */}
    </div>
  );
}

export default Home;
