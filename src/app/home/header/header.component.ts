import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <header>
      <div id="TituloContainer">
        <img src="./../assets/img/pokeball.svg" />
        <h1>Pokédex</h1>
        <img src="./../assets/img/pokeball.svg" />
      </div>
      <a href="">Buscar Pokemon</a>
    </header>
  `,
})
export class HeaderComponent {}
