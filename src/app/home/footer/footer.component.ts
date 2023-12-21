import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styles: `
      footer {
      text-align: right;
      padding: 10px; 
    }`,
})
export class FooterComponent {
  today = new Date();
}
