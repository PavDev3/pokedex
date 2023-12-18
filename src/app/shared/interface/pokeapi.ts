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
  spriteUrl?: string;
}
