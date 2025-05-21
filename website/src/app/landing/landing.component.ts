import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SloganComponent } from '../slogan/slogan.component';
import { FeaturesComponent } from '../features/features.component';
import { DownloadComponent } from '../download/download.component';
import { PostsComponent } from '../posts/posts.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent, SloganComponent, FeaturesComponent, DownloadComponent, PostsComponent, FaqComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
