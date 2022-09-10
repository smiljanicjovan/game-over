// Core types
import type { FC } from "react";

// Core
import { useEffect, useState } from "react";

// Global utils
import { fetchAllGames } from "../../utils/fetchAllGames";

// Global types
import { Game } from "../../types/game";

// Vendors
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface Hometype {}

const Home: FC<Hometype> = () => {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState<Game[]>();

  useEffect(() => {
    (async () => {
      setGames(await fetchAllGames(page));
    })();
  }, [page]);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(Math.max(1, page - 1));
  }

  return (
    <Wrapper>
      <button onClick={previousPage}>Previous Page</button>

      {Array.isArray(games) &&
        games.map((game) => <h1 key={game.name}>{game.name}</h1>)}

      <button onClick={nextPage}>Next Page</button>
    </Wrapper>
  );
};

export default Home;
