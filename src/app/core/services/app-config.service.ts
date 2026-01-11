import { Injectable } from '@angular/core';

export interface AppConfig {
  appName: string;
  version: string;
  production: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly config: AppConfig = {
    appName: 'Angular Platform',
    version: '1.0.0',
    production: false,
  };

  getConfig(): AppConfig {
    return this.config;
  }

  get appName(): string {
    return this.config.appName;
  }

  get version(): string {
    return this.config.version;
  }

  get isProduction(): boolean {
    return this.config.production;
  }
}
