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

export interface PokemonDetailModel {
  base_experience: number;
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  weight: number;
}
