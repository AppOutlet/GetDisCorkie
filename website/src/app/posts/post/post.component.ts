import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../posts.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule, MatCardModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  standalone: true,
})
export class PostComponent {
  @Input() post: Post | null = null;
}
