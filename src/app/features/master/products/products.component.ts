import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '@app/core/services/common.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  commonService: CommonService = inject(CommonService);
  ngOnInit(): void {
    this.commonService.storageService.set('currentPage', 'Products');
  }
}
