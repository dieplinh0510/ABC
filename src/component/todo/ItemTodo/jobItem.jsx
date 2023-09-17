import React, { useContext } from "react";
import { ThemeContext } from "../../../store/ThemeContext";
import style from './style.module.css'

const JobItem = (props) => {
  const themeContext = useContext(ThemeContext);

  const lightCss = {
    color: "red",
  };
  const darkCss = {
    color: "white",
  };
  return (
    <li style={themeContext.theme === "light" ? lightCss : darkCss}  className={style.bg}>
      {props.data}{" "}
      <span
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => props.onDeleteItem()}
      >
        x
      </span>
    </li>
  );
};

export default JobItem;
