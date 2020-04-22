import React from "react";
import style from "./search.module.css";

const Search = (props) => {
  return (
    <div className={style.display_box}>
      <div className={style.content}>
        <div className={style.top_text}>Tell Me what to watch</div>

        {props.selectMovie.map((movie, index) => {
          return (
            <div className={style.reccomendation} key={index}>
              Here is your option:
              <span className={style.movie}>{movie.name}</span>
            </div>
          );
        })}
      </div>

      <div className={style.button_set}>
        <button className={style.button} onClick={props.final}>
          YES 👍
        </button>
        <button className={style.button} onClick={props.onclick}>
          NO 👎
        </button>
      </div>
    </div>
  );
};

export default Search;
