import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { _remoteSpriteService } from '../../../../environments/environment';
import { PokemonResults } from '../../../shared/interface/pokeapi';

@Component({
  standalone: true,
  selector: 'app-pokemon-card',
  imports: [CommonModule],
  styleUrls: ['./pokemon-card.component.scss'],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent implements OnInit {
  @Input({ required: true }) pokemonList?: PokemonResults[];
  @Output() cardClicked = new EventEmitter<string>();

  ngOnInit() {
    this.extractId();
  }

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
    this.router.navigate(['/home/', pokemon.url]);
    this.cardClicked.emit(pokemon.spriteUrl);
    console.log(pokemon.spriteUrl);
  }

  ngOnChanges() {
    this.extractId();
  }

  constructor(private router: Router) {}
}
