import React from "react";

const FormButton = ({ lable, isSubmitting }) => {
  return (
    <div className="flex flex-row w-full justify-end">
      <button
        className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:scale-105 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 my-10"
        type="submit"
        disabled={isSubmitting}
      >
        {lable}
      </button>
    </div>
  );
};

export default FormButton;
