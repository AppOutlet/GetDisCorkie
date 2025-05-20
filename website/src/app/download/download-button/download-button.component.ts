import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-download-button',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss'
})
export class DownloadButtonComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() target: string = '_blank';
}

