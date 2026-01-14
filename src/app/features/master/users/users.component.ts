import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from '@app/core/services/storage.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  storageService: StorageService = inject(StorageService);
  ngOnInit(): void {
    this.storageService.set('currentPage', 'Users');
  }
}
