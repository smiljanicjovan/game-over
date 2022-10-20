// Core types
import type { FC } from "react";

// Core
import { useEffect, useState } from "react";

// Global utils
import { fetchGames } from "../../utils/fetchItems";

// Global types
import { Game } from "../../types/game";

// Vendors
import styled, { css } from "styled-components";

// Local components
import Trending from "./Trending";

const Hero = styled.div<{ image: string }>`
  height: 60vh;

  ${({ image, theme: { defaults, colors, font, ...theme } }) => css`
    background-image: url(${image});
    background-position: top;
    background-size: cover;
  `}
`;

const Title = styled.h6`
  position: absolute;
  top: 50%;
  left: 50%;
`;

interface Hometype {}

const Home: FC<Hometype> = () => {
  const [games, setGames] = useState<Game[]>();

  useEffect(() => {
    (async () => {
      setGames(await fetchGames(1));
    })();
  }, []);

  games?.splice(1);

  return (
    <>
      {games?.map((game) => (
        <Hero key={game.name} image={game.background_image}>
          <Title>{game.name}</Title>
        </Hero>
      ))}

      <Trending />
    </>
  );
};

export default Home;
