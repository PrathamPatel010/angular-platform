import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '@app/core/services/common.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  commonService: CommonService = inject(CommonService);
  ngOnInit(): void {
    this.commonService.storageService.set('currentPage', 'Dashboard');
  }
}
