import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SocialButtonComponent } from '../social-button/social-button.component';

@Component({
  selector: 'app-hero',
  imports: [MatIconModule, MatButtonModule, SocialButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
