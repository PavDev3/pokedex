import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-pokemon-picture',
  styleUrls: ['./pokemon-picture.component.scss'],
  template: `
    <div id="pictureContainer">
      <div id="picture">
        <img [src]="spriteUrl || alternateSpriteUrl" />
      </div>
    </div>
  `,
})
export class PokemonPictureComponent {
  @Input() spriteUrl!: string; // main picture
  @Input() alternateSpriteUrl = './../assets/img/pokeball.svg';
}
