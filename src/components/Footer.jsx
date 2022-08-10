import React from "react";

//Icons
import {
  FaArrowUp,
  FaSnapchat,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

//Styles
import styles from "../styles/Global";
import "../App.css";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full p-4 pb-20 justify-center items-center bg-black">
      <a
        href="#top"
        className="flex flex-row p-4 bg-lightGray hover:bg-lighterGray text-black font-lato rounded-sm justify-center items-center cursor-pointer"
      >
        <FaArrowUp /> Top The Top
      </a>
      <div className="flex flex-row mt-4 mb-10">
        <AiFillFacebook className={`${styles.socialMediaIcons}`} size={24} />
        <AiOutlineInstagram
          className={`${styles.socialMediaIcons}`}
          size={24}
        />
        <FaSnapchat className={`${styles.socialMediaIcons}`} size={24} />
        <FaPinterestP className={`${styles.socialMediaIcons}`} size={24} />
        <FaLinkedinIn className={`${styles.socialMediaIcons}`} size={24} />
        <AiOutlineTwitter className={`${styles.socialMediaIcons}`} size={24} />
      </div>
      <div>
        <p className="font-raleway text-sm text-white mt-4">
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            className="underline hover:text-gray cursor pointer"
            target="_blank"
          >
            w3.css
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
