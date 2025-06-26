import { Component } from '@angular/core';
import { RemarkModule } from 'ngx-remark';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  imports: [RemarkModule],
})
export class PrivacyPolicyComponent {
  markdownContent = '# Hello world';
}
