import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '@app/core/services/common.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentPage = '';
  router: Router = inject(Router);
  commonService: CommonService = inject(CommonService);
}
