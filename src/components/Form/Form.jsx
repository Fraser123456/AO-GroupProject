import React from "react";
import { Formik } from "formik";

import FormButton from "./FormButton";

const Form = ({
  initialValues,
  validationSchema,
  handleSubmit,
  buttonLable = "submit",
  children,
  ...rest
}) => {
  return (
    <div className="w-full p-4">
      <Formik
        {...rest}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form
            className="flex flex-col w-full justify-center items-center"
            onSubmit={handleSubmit}
          >
            {children}
            <FormButton lable={buttonLable} isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
