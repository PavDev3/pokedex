import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, map } from 'rxjs';
import { PokeApi, PokemonResults } from '../interface/pokeapi';

interface PokemonState {
  pokemonList: PokemonResults[];
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private http = inject(HttpClient);

  //State
  private state = signal<PokemonState>({
    pokemonList: [],
  });

  //Selectors
  pokemonList = computed(() => this.state().pokemonList);

  //Sources
  private pokemonLoaded$ = this.fetchPokemonList();
  constructor() {
    // Reducers
    this.pokemonLoaded$.pipe(takeUntilDestroyed()).subscribe((pokemonList) => {
      this.state.update((state) => ({
        ...state,
        pokemonList: [...state.pokemonList, ...pokemonList],
      }));
    });
  }

  private fetchPokemonList() {
    return this.http.get<PokeApi>(`https://pokeapi.co/api/v2/pokemon/`).pipe(
      catchError((err) => EMPTY),
      map((response) => response.data.results)
    );
  }
}
