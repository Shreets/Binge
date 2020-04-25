import React from "react";
import style from "./popup.module.css";

const Popup = (props) => {
  return (
    <div className={style.container_pop}>
      <p>
        <strong>Binge</strong> is a TV-series reccomendation application that
        gives you options that you can watch along with details related to those
        series.
        <br /> <br />
        The chatbox gives you the options of movies that you can select from.
        <br />
        <br />
        <button className={style.button}>NO👎</button> buttons are placed to
        make selections. Upon selection of this button, the options will keep
        coming on the chat box while the details are displayed on information
        box on the right.
        <br />
        <br />
        Select the button <button className={style.button}>YES👍</button> when
        you make up your mind regarding the series.
      </p>
      <button
        className={style.button}
        value={props.popup}
        onClick={props.onclick}
      >
        Got It!
      </button>
    </div>
  );
};

export default Popup;
