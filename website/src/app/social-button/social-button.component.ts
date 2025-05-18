import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-social-button',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.scss'
})
export class SocialButtonComponent {
  @Input() icon: string = '';
  @Input() link: string = '';
}
