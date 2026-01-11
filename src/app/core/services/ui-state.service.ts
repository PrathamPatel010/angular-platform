import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiStateService {
  private loadingSubject = false;

  setLoading(isLoading: boolean): void {
    this.loadingSubject = isLoading;
  }

  getLoading(): boolean {
    return this.loadingSubject;
  }
}
