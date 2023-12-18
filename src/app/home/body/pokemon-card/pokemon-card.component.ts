import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonResults } from '../../../shared/interface/pokeapi';

@Component({
  standalone: true,
  selector: 'app-pokemon-card',
  imports: [CommonModule],
  styleUrls: ['./pokemon-card.component.scss'],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  @Input({ required: true }) pokemonList?: PokemonResults[];

  // Extracts the id from the url
  extractId() {
    this.pokemonList?.forEach((pokemon) => {
      const url = pokemon.url;
      const id = url.split('/')[6];
      pokemon.url = id;
    });
  }

  ngOnChanges() {
    this.extractId();
  }
}
