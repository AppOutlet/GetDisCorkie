import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
