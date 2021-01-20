import React, { useState } from "react";
import "./styles.css";
import HeaderImage from "/src/images/header-image.svg";

const recommendationDictionary = {
  Action: [
    {
      name: "Attack on Titan",
      year: "(2013– )",
      rating: "8.9"
    },
    {
      name: "Prison Break",
      year: "(2005–2017)",
      rating: "8.3"
    },
    {
      name: "Money Heist",
      year: "(2017– )",
      rating: "8.3"
    }
  ],
  Comedy: [
    {
      name: "The Office",
      year: "(2005–2013)",
      rating: "8.9"
    },
    {
      name: "Friends",
      year: "(1994–2004)",
      rating: "8.9"
    },
    {
      name: "Brooklyn Nine-Nine",
      year: "(2013- )",
      rating: "8.4"
    }
  ],
  Drama: [
    {
      name: "Game of Thrones",
      year: "(2011–2019)",
      rating: "9.3"
    },
    {
      name: "Breaking Bad",
      year: "(2008–2013)",
      rating: "9.5"
    },
    {
      name: "Lucifer",
      year: "(2016– )",
      rating: "8.1"
    }
  ],
  Horror: [
    {
      name: " The Haunting of Hill House",
      year: "(2018)",
      rating: "8.6"
    },
    {
      name: "The Walking Dead",
      year: "(2010– )",
      rating: "8.2"
    },
    {
      name: "Supernatural",
      year: "(2005–2020)",
      rating: "8.4"
    }
  ],
  SciFi: [
    {
      name: "The Mandalorian",
      year: "(2019– )",
      rating: "8.8"
    },
    {
      name: "Stranger Things",
      year: "(2016– )",
      rating: "8.7"
    },
    {
      name: "Lost",
      year: "(2004–2010)",
      rating: "8.3"
    }
  ]
};

var genreList = Object.keys(recommendationDictionary);

export default function App() {
  const [showGenre, setShowGenre] = useState("");

  function genreClickHandler(genre) {
    setShowGenre(genre);
  }

  return (
    <div className="App">
      <img className="header-img" src={HeaderImage} alt="Netflix Icon" />
      <h1>
        <span style={{ color: "#D00305" }}> TV Shows </span> Recommendation
      </h1>
      <em>Select a TV show genre</em>
      <div style={{ marginTop: "0.5rem" }}>
        {genreList.map((genre) => {
          return (
            <button
              className="btn-genre"
              onClick={() => genreClickHandler(genre)}
              key={genre}
            >
              {" "}
              {genre}{" "}
            </button>
          );
        })}
      </div>
    </div>
  );
}
