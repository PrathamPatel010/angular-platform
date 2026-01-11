import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Menu, MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuModule, MenuModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @ViewChild('userMenu') userMenu!: Menu;

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        url: '/dashboard',
      },
      {
        label: 'Operations',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Create',
            icon: 'pi pi-plus-circle',
          },
          {
            label: 'My Tasks',
            icon: 'pi pi-list',
          },
          {
            label: 'Approvals',
            icon: 'pi pi-check-square',
          },
        ],
      },
      {
        label: 'Masters',
        icon: 'pi pi-database',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-users',
          },
          {
            label: 'Products',
            icon: 'pi pi-box',
          },
          {
            label: 'Configurations',
            icon: 'pi pi-sliders-h',
          },
        ],
      },
      {
        label: 'Reports',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Summary Reports',
            icon: 'pi pi-chart-line',
          },
          {
            label: 'Detailed Reports',
            icon: 'pi pi-file',
          },
          {
            label: 'Exports',
            icon: 'pi pi-download',
          },
        ],
      },
      {
        label: 'Administration',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Roles & Permissions',
            icon: 'pi pi-shield',
          },
          {
            label: 'Audit Logs',
            icon: 'pi pi-history',
          },
          {
            label: 'System Settings',
            icon: 'pi pi-wrench',
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
