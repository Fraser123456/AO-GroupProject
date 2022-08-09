import React, { useState } from "react";

import { FaTh, FaEnvelope, FaBars } from "react-icons/fa";
import styles from "../styles/Global";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { shouldShowContactModal } from "../store/contact";

const Navbar = () => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="top-0 w-full border-b-2 border-gray flex-row shadow-md">
        <div className="grid bg-white flex-row grid-cols-2">
          <a
            href="/home"
            className="font-raleway leading-loose tracking-widest justify-center items-center p-4"
          >
            LOGO
          </a>
          {/* <!-- Right-sided navbar links --> */}
          <div className="flex right-0 flex-row justify-end h-full sm:hidden">
            <a
              href="#work"
              className="flex font-raleway px-4 flex-row justify-center items-center space-x-2.5 hover:bg-gray-300 h-full p-4"
            >
              <FaTh className="mr-0.5 w-3.5 h-3.5" /> WORK
            </a>
            <a
              href="#"
              onClick={() => dispatch(shouldShowContactModal(true))}
              className="flex font-raleway px-4 flex-row justify-center items-center p-4 hover:bg-gray-300"
            >
              <FaEnvelope className="mr-0.5 w-3.5 h-3.5" /> CONTACT
            </a>
          </div>
          {/* Side Bar */}
          <div
            className={`right-0 flex-row justify-self-end h-full sm:flex hidden w-1/4`}
          >
            <a
              onClick={() => setShowSidebar(true)}
              className="flex font-raleway px-4 flex-row justify-end items-center space-x-2.5 hover:bg-gray-300 h-full "
            >
              <FaBars className="mr-0.5 w-3.5 h-3.5" size={16} />
            </a>
          </div>
        </div>
      </div>
      {/* Side Bar */}
      <div
        className={`absolute top-0 left-0 h-full bg-black z-10 w-1/2 grid-cols-1 ${
          styles.responsiveSmall
        } ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300`}
      >
        <a
          href="#"
          onClick={() => setShowSidebar(false)}
          className={`${styles.sideBarItem}`}
        >
          Close ×
        </a>
        <a
          href="#about"
          onClick={() => setShowSidebar(false)}
          className={`${styles.sideBarItem}`}
        >
          ABOUT
        </a>
        <a
          href="#team"
          onClick={() => setShowSidebar(false)}
          className={`${styles.sideBarItem}`}
        >
          TEAM
        </a>
        <a
          href="#work"
          onClick={() => setShowSidebar(false)}
          className={`${styles.sideBarItem}`}
        >
          WORK
        </a>
        <a
          href="#contact"
          onClick={() => {
            setShowSidebar(false);
            dispatch(shouldShowContactModal(true));
          }}
          className={`${styles.sideBarItem}`}
        >
          CONTACT
        </a>
      </div>
    </>
  );
};

export default Navbar;
