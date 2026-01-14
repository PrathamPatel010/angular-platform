import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from '@app/core/services/storage.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  storageService: StorageService = inject(StorageService);
  ngOnInit(): void {
    this.storageService.set('currentPage', 'Products');
  }
}
