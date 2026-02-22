import { inject, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { LoggerService } from './logger.service';
import { LocalStorageService } from './local-storage.service';
import { UiStateService } from './ui-state.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  loggerService: LoggerService = inject(LoggerService);
  notificationService: NotificationService = inject(NotificationService);
  localStorageService: LocalStorageService = inject(LocalStorageService);
  uiStateService: UiStateService = inject(UiStateService);
}
