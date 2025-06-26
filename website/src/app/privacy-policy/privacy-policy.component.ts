import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RemarkModule } from 'ngx-remark';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  imports: [RemarkModule],
})
export class PrivacyPolicyComponent implements OnInit {
  markdownContent = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('doc/privacy-policy.md', { responseType: 'text' })
      .subscribe((data) => {
        this.markdownContent = data;
      });
  }
}
