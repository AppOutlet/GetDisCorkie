import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { every, filter, from, map, mergeMap, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  private windowsDownloadLink: string | undefined = undefined;

  constructor(private httpClient: HttpClient) {}

  getWindowsDownloadLink(): Observable<string> {
    if (this.windowsDownloadLink) {
      return of(this.windowsDownloadLink);
    } else {
      return this.httpClient
        .get<Release>(
          'https://api.github.com/repos/appoutlet/getdiscorkie/releases/latest'
        )
        .pipe(
          mergeMap((response: Release) => from(response.assets)),
          filter((asset: Asset) => asset.name.endsWith('.msi')),
          map((asset: Asset) => asset.browser_download_url),
          take(1),
          map((link: string) => {
            this.windowsDownloadLink = link;
            return link;
          }),
        );
    }
  }
}

export interface Release {
  assets: Asset[];
}

export interface Asset {
  browser_download_url: string;
  name: string;
  size: number;
  download_count: number;
  updated_at: string;
}
