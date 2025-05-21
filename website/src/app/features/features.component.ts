import { Component } from '@angular/core';
import { FeatureComponent } from './feature/feature.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [FeatureComponent, NgOptimizedImage],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

}
