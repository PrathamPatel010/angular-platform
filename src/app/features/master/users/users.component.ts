import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '@app/core/services/common.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  commonService: CommonService = inject(CommonService);
  ngOnInit(): void {
    this.commonService.storageService.set('currentPage', 'Users');
    this.commonService.notificationService.warn('Users component initialized successfully!');
  }
}
