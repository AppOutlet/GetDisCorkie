import { Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LicenseAgreementComponent } from './license-agreement/license-agreement.component';
import { DataDeletionRequestComponent } from './data-deletion-request/data-deletion-request.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'license-agreement', component: LicenseAgreementComponent },
  { path: 'data-deletion-request', component: DataDeletionRequestComponent },
  { path: '**', redirectTo: '' }, // Redirect to landing page for any unknown routes
];
