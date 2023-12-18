import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, map, tap } from 'rxjs';
import { _remoteService } from '../../../environments/environment';
import { PokeApiData, PokemonResults } from '../interface/pokeapi';

export interface PokemonState {
  pokemonList: PokemonResults[];
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private http = inject(HttpClient);

  //State
  private state = signal<PokemonState>({
    pokemonList: [],
    error: null,
  });

  //Selectors
  pokemonList = computed(() => this.state().pokemonList);
  error = computed(() => this.state().error);

  //Sources

  private pokemonLoaded$ = this.fetchPokemonList();

  constructor() {
    // Reducers
    this.pokemonLoaded$.pipe(takeUntilDestroyed()).subscribe((pokemonList) => {
      this.state.update((state) => ({
        ...state,
        pokemonList: [...state.pokemonList, ...pokemonList],
      }));
      console.log(this.state().pokemonList);
    });
    //Reducer fetchPokemonSprite
  }

  private fetchPokemonList() {
    return this.http.get<PokeApiData>(`${_remoteService}`).pipe(
      catchError((err) => {
        console.error('Error fetching Pokemon list:', err);
        return EMPTY;
      }),
      tap((response) => console.log('Response:', response)),
      map((response) => response.results)
    );
  }
}
