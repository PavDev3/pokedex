import { Component, inject } from '@angular/core';
import { PokeApiService } from '../../shared/data/pokeapi.service';
import { FooterComponent } from '../footer/footer.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonPictureComponent } from './pokemon-picture/pokemon-picture.component';

@Component({
  standalone: true,
  selector: 'app-body',
  styleUrls: ['./body.component.scss'],
  template: `
    <main id="container">
      <app-pokemon-picture [spriteUrl]="selectedSpriteUrl">
      </app-pokemon-picture>
      <div id="cardContainer">
        <app-pokemon-card
          [pokemonList]="pokeApiService.pokemonList()"
          (cardClicked)="onCardClick($event)"
        />
        <app-footer></app-footer>
      </div>
    </main>
  `,
  imports: [PokemonPictureComponent, PokemonCardComponent, FooterComponent],
})
export class BodyComponent {
  selectedSpriteUrl: string = '';
  pokeApiService = inject(PokeApiService);

  onCardClick(spriteUrl: string) {
    this.selectedSpriteUrl = spriteUrl;
  }
}
