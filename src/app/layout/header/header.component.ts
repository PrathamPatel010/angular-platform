import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@app/core/services/storage.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentPage = '';
  router: Router = inject(Router);
  storageService: StorageService = inject(StorageService);
}
