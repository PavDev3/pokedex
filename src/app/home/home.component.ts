import { Component, inject } from '@angular/core';
import { PokeApiService } from '../shared/data/pokeapi.service';

@Component({
  standalone: true,
  selector: 'app-home',
  template: '',
})
export class HomeComponent {
  pokeapi = inject(PokeApiService);
}
