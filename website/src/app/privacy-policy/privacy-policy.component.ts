import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RemarkModule } from 'ngx-remark';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  imports: [RemarkModule, MatCardModule],
})
export class PrivacyPolicyComponent {
  markdownContent = '';

  constructor(private http: HttpClient) {
    this.http
      .get('doc/privacy-policy.md', { responseType: 'text' })
      .subscribe((data) => {
        this.markdownContent = data;
      });
  }
}
