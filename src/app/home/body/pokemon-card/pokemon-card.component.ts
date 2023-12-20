import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _remoteSpriteService } from '../../../../environments/environment';
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
  @Output() cardClicked = new EventEmitter<string>();

  // Extracts the id from the url
  extractId() {
    this.pokemonList?.forEach((pokemon) => {
      const url = pokemon.url;
      const fragment = url.split('/');
      const id = fragment[fragment.length - 2];
      pokemon.url = id;
      pokemon.spriteUrl = `${_remoteSpriteService}` + `${id}.png`;
    });
  }

  onCardClick(pokemon: PokemonResults) {
    this.cardClicked.emit(pokemon.spriteUrl);
  }

  ngOnChanges() {
    this.extractId();
  }
}
