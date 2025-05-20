import { Component, OnInit } from '@angular/core';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { DownloadService } from './download.service';

@Component({
  selector: 'app-download',
  imports: [DownloadButtonComponent],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent implements OnInit {
  windowsDownloadLink: string = '';

  constructor(private readonly downloadService: DownloadService) {}

  ngOnInit(): void {
    this.downloadService.getWindowsDownloadLink().subscribe((link) => {
      this.windowsDownloadLink = link;
    });
  }
}
