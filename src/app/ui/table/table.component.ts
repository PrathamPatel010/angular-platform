import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TableColumn } from './models/table-column.model';
import { TableAction } from './models/table-action.model';
import { TableQuery } from './models/table-query.model';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'app-table',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    MenuModule,
    InputTextModule,
    IconField,
    InputIcon,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> implements OnInit, OnDestroy {
  // ==============================
  // Inputs
  // ==============================

  @Input() data: T[] = [];
  @Input() columns: TableColumn[] = [];

  @Input() totalRecords = 0;
  @Input() loading = false;

  @Input() rows = 10;
  @Input() rowsPerPageOptions: number[] = [10, 25, 50];

  @Input() emptyMessage = 'No records found';

  @Input() rowActions?: (row: T) => TableAction[];

  // ==============================
  // Outputs
  // ==============================

  @Output() queryChange = new EventEmitter<TableQuery>();
  @Output() actionClick = new EventEmitter<{ action: string; row: T }>();

  // ==============================
  // Internal State
  // ==============================

  private destroy$ = new Subject<void>();

  private searchSubject = new Subject<string>();

  currentQuery: TableQuery = {
    page: 1,
    pageSize: 10,
  };

  searchValue = '';

  // ==============================
  // Lifecycle
  // ==============================

  ngOnInit(): void {
    this.currentQuery.pageSize = this.rows;

    // Debounced search
    this.searchSubject
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((value) => {
        this.currentQuery.page = 1;
        this.currentQuery.globalSearch = value || undefined;
        this.emitQuery();
      });

    // Auto initial emit
    this.emitQuery();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ==============================
  // Event Handlers
  // ==============================

  onLazyLoad(event: TableLazyLoadEvent): void {
    const first = event.first ?? 0;
    const rows = event.rows ?? this.rows;

    const newPage = first / rows + 1;

    const pageSizeChanged = rows !== this.currentQuery.pageSize;

    this.currentQuery.pageSize = rows;

    if (pageSizeChanged) {
      this.currentQuery.page = 1;
    } else {
      this.currentQuery.page = newPage;
    }

    // Handle sort safely
    if (event.sortField) {
      const sortField = Array.isArray(event.sortField)
        ? event.sortField[0] // take first if multi-sort
        : event.sortField;

      this.currentQuery.sortField = sortField;

      this.currentQuery.sortOrder = event.sortOrder === 1 ? 'asc' : 'desc';
    } else {
      this.currentQuery.sortField = undefined;
      this.currentQuery.sortOrder = undefined;
    }

    this.emitQuery();
  }

  onSearchInput(value: string): void {
    this.searchSubject.next(value);
  }

  onActionSelect(action: string, row: T): void {
    this.actionClick.emit({ action, row });
  }

  // ==============================
  // Helpers
  // ==============================

  getRowMenuItems(row: T) {
    if (!this.rowActions) return [];

    return this.rowActions(row).map((a) => ({
      label: a.label,
      icon: a.icon,
      command: () => this.onActionSelect(a.action, row),
    }));
  }

  private emitQuery(): void {
    this.queryChange.emit({ ...this.currentQuery });
  }
}
