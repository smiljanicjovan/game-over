type Game = {
  added: number;
  id: number;
  name: string;
  slug: string;
};

export interface Platform {
  games: Game[];
  games_count: number;
  id: number;
  image: null;
  image_background: string;
  name: string;
  slug: string;
  year_end: null | number;
  year_start: null | number;
}
