import React from "react";
import { useFormikContext } from "formik";

//Component in view
import { useInView } from "react-intersection-observer";

//Styles and Animations
import { staggeredSlideUp } from "../../styles/Animations";
import styles from "../../styles/Global";
import "../../App.css";

const TextInput = ({ name, label, delay = 100, type = "text" }) => {
  const [ref, inView] = useInView();
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <div
      className="flex flex-col w-full h-1/3"
      ref={ref}
      style={inView ? staggeredSlideUp(delay) : {}}
    >
      <label htmlFor={name} className={styles.textInputLable}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        className={`${styles.textInput}`}
        onChange={handleChange(name)}
      />
      {errors[name] && touched[name] && (
        <p className="text-error text-sm">{errors[name]}</p>
      )}
    </div>
  );
};

export default TextInput;
