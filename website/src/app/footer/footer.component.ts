import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DownloadService } from '../download/download.service';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, MatButtonModule, CommonModule, RouterModule],
  providers: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  windowsDownloadLink: string = '';

  constructor(private readonly dowloadService: DownloadService) { }

  ngOnInit(): void {
    this.getWindowsDownloadLink()
  }

  private getWindowsDownloadLink() {
    return this.dowloadService.getWindowsDownloadLink().subscribe((link) => {
      this.windowsDownloadLink = link;
    });
  }
}
