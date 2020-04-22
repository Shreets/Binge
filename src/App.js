import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./display";
import Search from "./search";
import background from "./bg.jpg";

const App = () => {
  let declaration = " ";
  const [movie, setMovie] = useState({});
  const [disagree, setDisagree] = useState(true);
  const [text, setText] = useState(declaration);
  const [selectMovie, setSelectMovie] = useState([]);

  const finalselection = selectMovie.lastIndexOf();

  const getSeries = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows`);
    const data = await response.json();
    const random = Math.floor(Math.random() * data.length);
    setMovie(data[random]);
    // console.log(data[random]);

    const MovieSelection = [...selectMovie, data[random]];
    // console.log(selectMovie, data[random]);
    setSelectMovie(MovieSelection);
  };

  // console.log(selectMovie)

  useEffect(() => {
    if (!disagree) {
      return;
    }
    getSeries();
  }, [disagree]);

  const unlike = () => {
    if (!disagree) {
      return;
    }
    setDisagree(movie);
  };

  const likeClick = () => {
    if (!disagree) {
      return;
    }
    setDisagree(false);
    setText("Great! You Have decided to watch : ");
  };
  console.log(selectMovie);
  return (
    <div className="container">
      <Display movies={movie} text={text} />
      <Search
        movies={movie}
        onclick={unlike}
        final={likeClick}
        selectMovie={selectMovie}
        disagree={disagree}
      />
    </div>
  );
};

export default App;

// no button disable
//replies print
