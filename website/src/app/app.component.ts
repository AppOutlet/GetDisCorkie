import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HeroComponent } from './hero/hero.component';
import { SloganComponent } from './slogan/slogan.component';
import { FeaturesComponent } from './features/features.component';
import { DownloadComponent } from './download/download.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MatIconModule,
    HeroComponent,
    SloganComponent,
    FeaturesComponent,
    DownloadComponent,
    PostsComponent,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.registerFontClassAlias('ph', 'ph');
  }
}
