import { Component } from '@angular/core';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-privacy-policy',
  imports: [MarkdownComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  markdownContent = '# Hello world';

  constructor(private markdownService: MarkdownService) {}

}
