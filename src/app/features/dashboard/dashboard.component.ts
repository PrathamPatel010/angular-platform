import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from '@app/core/services/storage.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  storageService: StorageService = inject(StorageService);
  ngOnInit(): void {
    this.storageService.set('currentPage', 'Dashboard');
  }
}
