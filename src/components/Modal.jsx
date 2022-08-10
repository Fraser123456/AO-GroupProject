import React from "react";

//Styles
import "../App.css";

const Modal = ({
  title,
  showModal,
  setShowModal,
  children = <p>Nothing To Display</p>,
}) => {
  return (
    <>
      <div
        className={`justify-center items-center flex overflow-x-hidden ${
          showModal ? "animate-grow" : "hidden"
        } overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className="relative md:w-full w-1/2 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:px-4 md:mx-4 w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex flex-row items-start p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold font-raleway w-full text-center">
                {title}
              </h3>
              <button
                className="flex justify-center items-center p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="flex justify-center items-center bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto md:m-0 md:p-0 m-10">
              {children}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowModal(false)}
        className={`opacity-25 fixed inset-0 z-40 bg-black ${
          showModal ? "transition-opacity ease-in-out duration-300" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Modal;
