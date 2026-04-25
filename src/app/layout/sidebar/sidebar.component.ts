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
        icon: 'pi pi-th-large',
        link: '/dashboard',
      },
      {
        label: 'Search Stations',
        icon: 'pi pi-search',
        link: '/search-stations',
      },
      {
        label: 'My Bookings',
        icon: 'pi pi-calendar',
        link: '/my-bookings',
      },
    ];
  }
}
