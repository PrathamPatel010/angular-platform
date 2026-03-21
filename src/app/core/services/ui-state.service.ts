import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiStateService {
  isBtnLoading = false;
  isPageLoading = false;
  isGridLoading = false;
}
