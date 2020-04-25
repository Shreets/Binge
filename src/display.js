import React from "react";
import style from "./display.module.css";
// import film from "./film.jpg";

const Display = (props) => {
  return (
    <div className={style.display_box}>
      <div className={style.display_img}>
        <img
          className={style.image}
          src={props.movies && props.movies.image && props.movies.image.medium}
          alt="film poster"
        />
      </div>

      <div className={style.display_info}>
        <p className={style.title}>
          <p className={style.final}>{props.text}</p>
          {props.movies.name}
        </p>
        <p>
          <span className={style.span}>Language </span>: {props.movies.language}
        </p>
        <p>
          <span className={style.span}>Genere </span>:{" "}
          {props.movies &&
            props.movies.genres &&
            props.movies.genres.join(", ")}
        </p>
        <p>
          <span className={style.span}>Status </span>: {props.movies.status}
        </p>
        <p>
          <span className={style.span}>Runtime </span>: {props.movies.runtime}
        </p>
        <p>
          <span className={style.span}>Rating </span>:{" "}
          {props.movies && props.movies.rating && props.movies.rating.average}
        </p>
        <p>
          <span className={style.span}>Official Site </span>:{" "}
          <a href={props.movies.officialSite}>
            {props.movies.officialSite === null ? (
              <em>Not Available</em>
            ) : (
              props.movies.officialSite
            )}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Display;
