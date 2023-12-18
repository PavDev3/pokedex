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
  @Input({ required: true }) pokemonList!: PokemonResults[];
  // extraer el id del pokemon de la url
  id: string = '0';
}
