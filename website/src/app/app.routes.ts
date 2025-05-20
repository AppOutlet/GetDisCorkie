import { Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'faq', component: FaqComponent },
];
