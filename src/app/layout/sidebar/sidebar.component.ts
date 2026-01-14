import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Menu, MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuModule, MenuModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @ViewChild('userMenu') userMenu!: Menu;
  router: Router = inject(Router);

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        link: '/dashboard',
      },
      {
        label: 'Masters',
        icon: 'pi pi-database',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-users',
            link: '/masters/users',
          },
          {
            label: 'Products',
            icon: 'pi pi-box',
            link: '/masters/products',
          },
        ],
      },
    ];
  }

  // User dropdown menu
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
