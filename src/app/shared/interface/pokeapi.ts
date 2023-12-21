export interface PokeApi {
  data: PokeApiData;
}

export interface PokeApiData {
  count: number;
  next: string;
  previous: string;
  results: PokemonResults[];
}

export interface PokemonResults {
  name: string;
  url: string;
  spriteUrl: string;
}

export interface Pokemon {
  id: number;
  name: string;
}

export type PokemonId = Omit<Pokemon, 'name'>;
