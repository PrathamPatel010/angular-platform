import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '@app/core/services/common.service';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Menu, MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { PopoverModule } from 'primeng/popover';
@Component({
  selector: 'app-header',
  imports: [PanelMenuModule, MenuModule, CommonModule, PopoverModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('userMenu') userMenu!: Menu;
  currentPage = '';
  userRole = ''; // This can be dynamically set based on the logged-in user
  router: Router = inject(Router);
  commonService: CommonService = inject(CommonService);

  isUserMenuOpen = false;
  userMenuItems: MenuItem[] = [
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: '/settings',
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
    },
  ];
  toggleUserMenu(event: Event): void {
    this.userMenu.toggle(event);
  }
  logout(): void {
    console.log('Logout clicked');
  }
}
