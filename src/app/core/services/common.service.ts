import { inject, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { LoggerService } from './logger.service';
import { StorageService } from './storage.service';
import { UiStateService } from './ui-state.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  loggerService: LoggerService = inject(LoggerService);
  notificationService: NotificationService = inject(NotificationService);
  storageService: StorageService = inject(StorageService);
  uiStateService: UiStateService = inject(UiStateService);
}
