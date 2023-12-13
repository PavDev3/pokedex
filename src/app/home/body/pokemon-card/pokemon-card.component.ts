import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-pokemon-card',
  styleUrls: ['./pokemon-card.component.scss'],
  template: `<div id="cardContainer">
    <img src="./../../../assets/img/flecha.png" id="arrowSelector" />
    <div id="card">
      <div id="circle"></div>
      <img src="./../../../assets/img/Pikachu.webp" />
      <span>No. 001</span>
      <span>Pokemon1</span>
    </div>
  </div>`,
})
export class PokemonCardComponent {}
