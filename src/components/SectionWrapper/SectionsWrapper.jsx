import React from "react";
import { SectionHeading } from "../../components";
import { useInView } from "react-intersection-observer";
import "./SectionWrapper.css";

const SectionsWrapper = ({
  id,
  title,
  image,
  subTitle,
  paragraph,
  reverse = false,
}) => {
  const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      id={id}
      className="flex flex-col w-full h-full justify-items-start section-info-background overflow-hidden"
    >
      <SectionHeading title={title} showDivider={false} />
      <div
        className={`flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        } w-screen mt-10 mb-20 sm:flex-col md:w-full`}
      >
        <div
          className={`flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } w-1/2 h-auto relative md:w-full`}
        >
          <div
            className={`flex bg-primary ${
              reverse
                ? "rectangle-border-readius-right"
                : "rectangle-border-readius-left"
            } rectangle-background border justify-center items-center md:hidden `}
          >
            <img
              src={image}
              className={`absolute left-1/4 md:left-0 object-cover md:relative ${
                inView && "animate-fadeLeftMini"
              }`}
            />
          </div>
          <img
            src={image}
            alt="display"
            className="flex hidden object-cover md:flex md:w-full md:justify-self-center md:self-center"
          />
        </div>
        <div className="w-1/2 h-auto flex flex-col items-center md:w-full">
          <div className="flex flex-col justify-center items-start mt-20 w-1/2 md:w-full md:items-center">
            <h3
              className={`font-raleway text-gray text-normal ${
                inView && "animate-fadeRightMini"
              }`}
            >
              {subTitle}
            </h3>
            <div
              className={`border-b-2 w-28 border-gray ml-4 ${
                inView && "animate-fadeLeftMini"
              }`}
            ></div>
          </div>
          <div
            className={`w-1/2 mt-28 md:mt-4 md:w-full md:items-center ${
              inView && "animate-fadeRightMini delay-200"
            }`}
          >
            <p className="text-gray text-semibold font-lato md:flex-wrap md:text-center md:px-4">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionsWrapper;
