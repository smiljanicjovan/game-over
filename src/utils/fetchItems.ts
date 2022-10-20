// Vendors
import axios from "axios";

type Url =
  | "creator-roles"
  | "creators"
  | "developers"
  | "games"
  | "genres"
  | "platforms"
  | "publishers"
  | "stores"
  | "tags";

export const fetchGames = async (page = 1) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );

  return data.results;
};

export const fetchGameVideo = async (id: number) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}games/${id}/movies?key=${process.env.REACT_APP_API_KEY}`
  );

  return data.results;
};

export const fetchSigneGame = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}`
  );

  return data.results;
};

export const fetchPlatforms = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}platforms?key=${process.env.REACT_APP_API_KEY}`
  );

  return data.results;
};
