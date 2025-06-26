
import { Component } from '@angular/core';
import { MarkdownComponent, MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-privacy-policy',
  imports: [MarkdownModule],
  providers: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  markdownContent = '# Hello world';

  constructor(private markdownService: MarkdownService) {}

}
