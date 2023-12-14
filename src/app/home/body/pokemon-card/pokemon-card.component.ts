import { Component, Input } from '@angular/core';
import { PokemonResults } from '../../../shared/interface/pokeapi';

@Component({
  standalone: true,
  selector: 'app-pokemon-card',
  styleUrls: ['./pokemon-card.component.scss'],
  template: ` @for (pokemon of pokemonList; track $index) {
    <div id="cardContainer">
      <!-- <img src="./../../../assets/img/flecha.png" id="arrowSelector" /> -->
      <div id="card">
        <div id="circle"></div>
        <img src="./../../../assets/img/Pikachu.webp" />
        <span>{{ pokemon.name }}</span>
      </div>
    </div>
    }`,
})
export class PokemonCardComponent {
  @Input({ required: true }) pokemonList!: PokemonResults[];
}
