// Core types
import type { FC } from "react";

// Core
import { useEffect, useState } from "react";

// Global utils
import { fetchItems } from "../../utils/fetchItems";

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
      setGames(await fetchItems(page, "games"));
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
      <>
        <button onClick={previousPage}>Previous Page</button>

        {/* {Array.isArray(games) && games.map((game) => console.log(game))} */}

        <button onClick={nextPage}>Next Page</button>
      </>
    </Wrapper>
  );
};

export default Home;
