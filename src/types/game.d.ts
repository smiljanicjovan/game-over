type Genres = {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
};

type ParentPlatforms = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

type Platforms = {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: null;
    year_end: null;
  };
  released_at: string;
  requirements_en: {
    minimum: string;
    recommended: string;
  };
  requirements_ru: null;
};

type Ratings = {
  count: number;
  id: number;
  percent: number;
  title: string;
};

type Screenshots = {
  id: number;
  image: string;
};

type Store = {
  id: number;
  store: {
    domain: string;
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
  };
};

type Tags = {
  games_count: number;
  id: number;
  image_background: string;
  language: string;
  name: string;
  slug: string;
};

export interface Game {
  added: number;
  added_by_status: {
    beaten: number;
    dropped: number;
    owned: number;
    playing: number;
    toplay: number;
    yet: number;
  };
  background_image: string;
  clip: null | undefined;
  dominant_color: string;
  esrb_rating: { id: number; name: string; slug: string };
  genres: Genres[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: ParentPlatforms[];
  platforms: Platforms[];
  playtime: number;
  rating: number;
  rating_top: number;
  ratings: Ratings[];
  ratings_count: number;
  released: number;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  short_screenshots: Screenshots[];
  slug: string;
  stores: Store[];
  suggestions_count: number;
  tags: Tags[];
  tba: boolean;
  updated: string;
  user_game: null;
}
