import React, { useState, useEffect } from "react";

import { Container, HeaderFilms, HMovie, Text } from "./styles";
import Header from "../../components/Header";

const filmsJ = [
  "Mulan",
  "The Lion King",
  "Minions",
  "toy story",
  "toy story 2",
  "toy story 3",
  "up",
];

const Home: React.FC = () => {
  const [films, setFilms] = useState([
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    12,
    1,
  ]);

  // useEffect(() => {
  //   filmsJ.map((item) => {
  //     fetch(`http://www.omdbapi.com/?t=${item}&apikey=24093f4c`).then(
  //       (response) => {
  //         setFilms([...films, reponse.json()]);
  //       }
  //     );
  //   });
  //   console.log(films);
  // }, []);
  return (
    <>
      <Container>
        <Header />
        <HeaderFilms>
          {films.map((item, index) => (
            <HMovie key={index}>
              <img
                src="http://www.omdbapi.com/?t=Up&apikey=24093f4c"
                width="150"
              />
            </HMovie>
          ))}
        </HeaderFilms>
      </Container>
    </>
  );
};

export default Home;
