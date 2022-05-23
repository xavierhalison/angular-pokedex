export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListRequest {
  count: number;
  results: Pokemon[];
}

export type Sprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_female: string;
  front_default: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type PokemonDetails = {
  name: string;
  sprites: Sprites;
  id: number;
  stats: PokemonStats[];
  types: PokemonType[];
};

export type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
