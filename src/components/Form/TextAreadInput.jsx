import React from "react";
import { useFormikContext } from "formik";

import { useInView } from "react-intersection-observer";
import styles from "../../styles/Global";
import "./Form.css";

const TextAreadInput = ({ name, label, delay = 100 }) => {
  const [ref, inView] = useInView();
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  const animation = () => {
    return {
      animation: "slideUp 1s",
      animationFillMode: "both",
      animationDelay: delay + 500 + "ms",
    };
  };

  return (
    <div
      ref={ref}
      className="flex flex-col w-full"
      style={inView ? animation() : {}}
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
