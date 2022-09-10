import { useEffect, useState } from "react";
import { fetchAllGames } from "../../utils/fetchAllGames";

const Home = () => {
  const [page, setPage] = useState(1);
  const [game, setGame] = useState();

  useEffect(() => {
    (async () => {
      const games = await fetchAllGames(page);
      const allGames = games.map((game: any) => game.name);
      console.log(allGames);

      setGame(allGames);
    })();
  }, [page]);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(Math.max(1, page - 1));
  }

  return (
    <div>
      <button onClick={previousPage}>Previous Page</button>
      <h1>{game}</h1>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default Home;
