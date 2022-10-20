// Core types
import type { FC } from "react";

// Core
import { useEffect, useState } from "react";

// Vendors
import styled, { css } from "styled-components";

// Global types
import { Game } from "../../../types/game";

// Global utils
import { fetchGameVideo, fetchSigneGame } from "../../../utils/fetchItems";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 0;
  gap: 1rem;

  ${({ theme: { defaults, colors, font, breakpoints } }) => css`
    padding-left: ${defaults.gutter * 1.25}px;
    padding-right: ${defaults.gutter * 1.25}px;
  `}
`;

const Cart = styled.div`
  flex: 0 0 25%;
`;

const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

interface Trendingtype {}

const Trending: FC<Trendingtype> = () => {
  const [games, setGames] = useState<Game[]>();
  // const [video, setVideo] = useState();

  useEffect(() => {
    (async () => {
      setGames(await fetchSigneGame());
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     setVideo(await fetchGameVideo(3498));
  //   })();
  // }, []);

  // console.log(video);

  return (
    <Container>
      {games?.map((game) => (
        <Cart key={game.name}>
          <Image src={game.background_image} alt={game.name} />

          <h6>{game.name}</h6>
        </Cart>
      ))}
    </Container>
  );
};

export default Trending;
