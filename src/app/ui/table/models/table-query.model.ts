export interface TableQuery {
  page: number; // 1-based
  pageSize: number;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
  globalSearch?: string;
}
