import React, { useEffect } from "react";

//Components
import { SectionHeading, SectionsWrapper, ContactModal } from "../components";

//Images
import HomeBackground from "../assets/HomeBackground.png";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import UserImage from "../assets/UserImage.png";

//Icons
import { FiUser, FiUsers } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineNewspaper } from "react-icons/hi";
import { FaHandsHelping } from "react-icons/fa";

//Check component in view library
import { useInView } from "react-intersection-observer";

//Redux
import { loadImages, getSpecifiedNumberOfImages } from "../store/images";
import { useDispatch, useSelector } from "react-redux";

//Styles and Animations
import "../App.css";
import { staggeredGrow } from "../styles/Animations";

const team = [
  {
    id: 1,
    name: "Name",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. ",
    image: UserImage,
  },
  {
    id: 2,
    name: "Name",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. ",
    image: null,
  },
  {
    id: 3,
    name: "Name",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. ",
    image: null,
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const images = useSelector(getSpecifiedNumberOfImages(0, 9));

  const [teamRef, inView] = useInView();
  const [getToKnowUsRef, getToKnowUsRefInView] = useInView();
  const [ourWorkRef, ourWorkInView] = useInView();

  // const animation = (indx) => {
  //   return {
  //     animation: "Grow 1s",
  //     animationDelay: indx * 100 + "ms",
  //     animationFillMode: "backwards",
  //   };
  // };

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <>
      <ContactModal />

      {/*Top */}
      <section
        id="top"
        className="flex w-full justify-center grid-cols-1 h-screen background-image overflow-hidden"
        style={{ backgroundImage: `url(${HomeBackground})` }}
      >
        <div className="w-1/2 mt-36 animate-grow">
          <h1 className="text-white justify-center top-1/4 text-shadow flex-wrap text-center my-4 sm:text-left sm:leading-tight">
            Bringing <span className="text-primary">You</span> The{" "}
            <span className="text-primary">Best</span>
          </h1>
          <p className="text-center text-white font-lato flex flex-wrap font-medium sm:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </section>

      {/* About Us */}
      <SectionsWrapper
        id="aboutUs"
        title="About Us"
        subTitle="A Little Insight"
        image={Image1}
        paragraph={`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
          ullamco cillum dolor. Voluptate exercitation incididunt
          aliquip deserunt reprehenderit elit laborum.

          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt mollit dolore cillum
          minim tempor enim.

          Elit aute irure tempor cupidatat incididunt sint deserunt ut
          voluptate aute id deserunt nisi.`}
      />

      {/* Our Team */}
      <section
        ref={teamRef}
        id="team"
        className="flex flex-col w-full p-4 bg-black items-center justify-center"
      >
        <SectionHeading title="Our Team" showDivider={false} color="primary" />

        <div className="flex flex-row my-20 text-white w-full grid sm:grid-cols-2 grid-cols-3">
          {team.map((item, indx) => (
            <div
              className={`flex flex-row w-full m-4`}
              style={inView ? staggeredGrow(indx) : {}}
              key={item.id}
            >
              <div className="w-full h-auto flex flex-col justify-items-center items-center">
                <div className="flex avatar justify-center items-center overflow-hidden">
                  {item.image ? <img src={item.image} /> : <FiUser size={84} />}
                </div>
                <h3 className="font-raleway font-italic pt-4 text-center">
                  {item.name}
                </h3>
                <p className="flex flex-wrap font-lato pt-4 px-4 text-center w-1/2 md:w-full">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor.{" "}
                </p>
              </div>
              {(indx + 1) % 3 !== 0 ? (
                <div className="h-full border-l-2 border-gray" />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <SectionsWrapper
        id="whatWeDo"
        title="What We Do"
        subTitle="A Little Insight"
        image={Image2}
        reverse={true}
        paragraph={`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
          ullamco cillum dolor. Voluptate exercitation incididunt
          aliquip deserunt reprehenderit elit laborum.

          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt mollit dolore cillum
          minim tempor enim.

          Elit aute irure tempor cupidatat incididunt sint deserunt ut
          voluptate aute id deserunt nisi.`}
      />

      {/* Get To Know Us */}
      <section
        ref={getToKnowUsRef}
        id="getToKnowUs"
        className="flex flex-col w-full p-4 bg-black items-center justify-center"
      >
        <SectionHeading
          title="Get To Know Us"
          showDivider={false}
          color="primary"
        />

        <div className="flex flex-row my-20 text-white w-full grid sm:grid-cols-2 grid-cols-4">
          {/* Leadership */}
          <div
            className={`flex flex-row w-full m-4 `}
            style={getToKnowUsRefInView ? staggeredGrow(1) : {}}
          >
            <div className="w-full h-auto flex flex-col justify-items-center items-center">
              <div className="flex  justify-center items-center">
                <FiUsers size={84} />
              </div>
              <h1
                className="font-raleway font-italic text-2xl pt-4 text-center uppercase"
                style={{ color: "#B7B7B7" }}
              >
                LeaderShip
              </h1>
              <p className="flex flex-wrap font-lato pt-4 px-4 text-center w-1/2 text-gray md:w-full">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
            </div>
            <div className="flex h-1/2 border-l-2 border-gray self-center" />
          </div>
          {/* Careers */}
          <div
            className={`flex flex-row w-full m-4 `}
            style={getToKnowUsRefInView ? staggeredGrow(3) : {}}
          >
            <div className="w-full h-auto flex flex-col justify-items-center items-center">
              <div className="flex  justify-center items-center">
                <HiOutlineOfficeBuilding size={84} />
              </div>
              <h1
                className="font-raleway font-italic text-2xl pt-4 text-center uppercase"
                style={{ color: "#B7B7B7" }}
              >
                Careers
              </h1>
              <p className="flex flex-wrap font-lato pt-4 px-4 text-center w-1/2 text-gray md:w-full">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
            </div>
            <div className="flex h-1/2 border-l-2 border-gray self-center" />
          </div>
          {/* Partnershis */}
          <div
            className={`flex flex-row w-full m-4 `}
            style={getToKnowUsRefInView ? staggeredGrow(5) : {}}
          >
            <div className="w-full h-auto flex flex-col justify-items-center items-center">
              <div className="flex  justify-center items-center">
                <FaHandsHelping size={84} />
              </div>
              <h1
                className="font-raleway font-italic text-2xl pt-4 text-center uppercase"
                style={{ color: "#B7B7B7" }}
              >
                Partnerships
              </h1>
              <p className="flex flex-wrap font-lato pt-4 px-4 text-center w-1/2 text-gray md:w-full">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
            </div>
            <div className="flex h-1/2 border-l-2 border-gray self-center" />
          </div>
          {/* Press */}
          <div
            className={`flex flex-row w-full m-4 `}
            style={getToKnowUsRefInView ? staggeredGrow(7) : {}}
          >
            <div className="w-full h-auto flex flex-col justify-items-center items-center">
              <div className="flex  justify-center items-center">
                <HiOutlineNewspaper size={84} />
              </div>
              <h1
                className="font-raleway font-italic text-2xl pt-4 text-center uppercase"
                style={{ color: "#B7B7B7" }}
              >
                Press
              </h1>
              <p className="flex flex-wrap font-lato pt-4 px-4 text-center w-1/2 text-gray md:w-full">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="flex flex-col w-full p-4 items-center justify-center"
      >
        <SectionHeading title="Our Work" showDivider={false} color="black" />
        <p className="font-raleway my-4">What we've done for people</p>
        <div className="w-1/2 flex justify-center items-center">
          <div
            className="flex flex-row justify-between items-center w-full grid grid-cols-3 md:grid-cols-2 my-10 gap-4"
            ref={ourWorkRef}
          >
            {images &&
              images.map((image, indx) => (
                <img
                  key={image.title + "_" + indx}
                  src={image.url}
                  alt={image.title}
                  className=" object-fill scale-100 hover:scale-75 duration-500 ease-in-out hover:animate-bounce"
                  style={ourWorkInView ? staggeredGrow(indx) : {}}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
