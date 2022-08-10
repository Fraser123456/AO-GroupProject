import React from "react";
import { useFormikContext } from "formik";

//Component in view
import { useInView } from "react-intersection-observer";

//Styles animations
import styles from "../../styles/Global";
import { staggeredSlideUp } from "../../styles/Animations";
import "../../App.css";

const TextAreadInput = ({ name, label, delay = 100 }) => {
  const [ref, inView] = useInView();
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <div
      ref={ref}
      className="flex flex-col w-full"
      style={inView ? staggeredSlideUp(delay) : {}}
    >
      <label htmlFor={name} className={styles.textInputLable}>
        {label}
      </label>
      <textarea
        type="email"
        name={name}
        id={name}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        className={`${styles.textAreaInput}`}
        onChange={handleChange(name)}
      />
      {errors[name] && touched[name] && (
        <p className="text-error text-sm">{errors[name]}</p>
      )}
    </div>
  );
};

export default TextAreadInput;
