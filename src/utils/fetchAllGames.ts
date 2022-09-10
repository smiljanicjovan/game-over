// Vendors
import axios from "axios";

export const fetchAllGames = async (page = 1) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}games?key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );

  return data.results;
};
