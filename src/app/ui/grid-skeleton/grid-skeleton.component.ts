import { Component, Input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-grid-skeleton',
  imports: [SkeletonModule],
  templateUrl: './grid-skeleton.component.html',
  styleUrl: './grid-skeleton.component.scss',
})
export class GridSkeletonComponent {
  @Input() rows = 5;
}
