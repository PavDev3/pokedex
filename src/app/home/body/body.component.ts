import { Component } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonPictureComponent } from './pokemon-picture/pokemon-picture.component';

@Component({
  standalone: true,
  selector: 'app-body',
  imports: [PokemonPictureComponent, PokemonCardComponent],
  styleUrls: ['./body.component.scss'],
  template: ` <main id="container">
    <app-pokemon-picture></app-pokemon-picture>
    <div id="cardContainer">
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
      <app-pokemon-card></app-pokemon-card>
    </div>
    >
  </main>`,
})
export class BodyComponent {}
