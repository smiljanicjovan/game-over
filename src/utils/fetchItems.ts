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

export const fetchItems = async (page = 1, url: Url) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${url}?key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );

  return data.results;
};
