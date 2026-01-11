import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly enabled: boolean = true;
  log(message: unknown, ...optionalParams: unknown[]): void {
    if (!this.enabled) {
      return;
    }
    console.log(message, ...optionalParams);
  }

  warn(message: unknown, ...optionalParams: unknown[]): void {
    if (!this.enabled) {
      return;
    }
    console.warn(message, ...optionalParams);
  }

  error(message: unknown, ...optionalParams: unknown[]): void {
    if (!this.enabled) {
      return;
    }
    console.error(message, ...optionalParams);
  }
}
