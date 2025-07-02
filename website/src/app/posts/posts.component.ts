import { Component, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { map } from 'rxjs/operators';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-posts',
  imports: [PostComponent, MatButtonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  private query = gql`
    {
      publication(host: "blog.appoutlet.dev") {
        series(slug: "discorkie") {
          posts(first: 3) {
            edges {
              node {
                title
                brief
                url
                publishedAt
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  posts: Post[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<PublicationResponse>({ query: this.query })
      .valueChanges.pipe(
        map(
          (result: ApolloQueryResult<PublicationResponse>) =>
            result.data.publication.series.posts.edges
        ),
        map((edges) => edges.map((edge) => edge.node))
      )
      .subscribe((result) => {
        this.posts = result;
      });
  }
}

export type PublicationResponse = {
  publication: Publication;
};

export interface Publication {
  title: string;
  series: Series;
}

export interface Series {
  posts: Posts;
}

export interface Posts {
  edges: PostEdge[];
}
export interface PostEdge {
  node: Post;
}
export interface Post {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage: CoverImage;
}
export interface CoverImage {
  url: string;
}
