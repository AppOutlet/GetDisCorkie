import { Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'download', component: DownloadComponent },
];
