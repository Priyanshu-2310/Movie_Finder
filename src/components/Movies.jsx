import React from "react";
import Simplecard from "./Simplecard";
import { Route, Router, Routes } from "react-router-dom";
import Detail from "./Detail";
import Layout from "./Layout";

const Movies = ({ count, searched }) => {
  const premovie = [
    {
      id: 1,
      Poster:
        "https://www.tallengestore.com/cdn/shop/products/7381744976052A_7ee4e15b-2c32-4c75-9fe1-77966ec7feea.jpg?v=1683929399",
      Title: "3 idiots",
      Released: "2009",
      Imdb: "8.4/10",
      Genre: "Drama, Comedy",
      Runtime: "170 min",
      Plot: '"Two friends embark on a quest for their lost buddy',
      Cast: "Aamir Khan, Kareena Kapoor ",
      Language: "Hindi English",
    },
    {
      id: 2,
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBYmHXZ11JOGo9EfQi4qIseuNtClElllgIg&s",
      Title: "Spider-Man: No Way Home",
      Released: "2021",
      Imdb: "8.3/10",
      Genre: "Action, Adventure, Sci-Fi",
      Runtime: "148 min",
      Plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help, but a spell goes wrong and dangerous foes from other worlds appear.",
      Cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
      Language: "English",
    },
    {
      id: 3,
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
      Title: "Thor: Ragnarok",
      Released: "2017",
      Imdb: "7.9/10",
      Genre: "Action, Adventure, Comedy",
      Runtime: "130 min",
      Plot: "Thor must escape the alien planet Sakaar in time to save Asgard from Hela and the impending Ragnarok.",
      Cast: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
      Language: "English",
    },
    {
      id: 4,
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEj9xzAkAeG6XUi-_Sic8RjJhzgoIa36-UzPgKM7cCwLhhrAAMdvlkJNY9-flnjRGl1pw&usqp=CAU",
      Title: "Avengers: Endgame",
      Released: "2019",
      Imdb: "8.4/10",
      Genre: "Action, Adventure, Drama",
      Runtime: "181 min",
      Plot: "After the devastating events of Avengers: Infinity War (2018), the remaining Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      Cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo, Chris Hemsworth, Jeremy Renner",
      Language: "English",
    },
  ];

 
  
  // Convert the premovie array to a JSON string


  return (
    <div className="w-full mt-10 p-5 bg-red-800 flex flex-col justify-center items-center gap-20 sm:flex-row  ">
      {count === 0
        ? premovie.map((movie, index) => {
            return <Simplecard key={index} index={index} movie={movie} />;
          })
        : <Simplecard  movie={searched.data} />}
    </div>
  );
};

export default Movies;
