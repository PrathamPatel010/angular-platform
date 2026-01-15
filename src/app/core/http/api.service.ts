import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';
import { environment } from '@env/environment.development';
import { ApiResponse } from '@app/shared/models/api-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);
  private commonService = inject(CommonService);
  private readonly baseUrl = environment.apiBaseUrl;

  // ------------------------
  // GET
  // ------------------------
  get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>,
  ): Observable<ApiResponse<T>> {
    return this.httpClient.get<ApiResponse<T>>(this.buildUrl(endpoint), {
      params: this.buildParams(params),
    });
  }

  // ------------------------
  // POST
  // ------------------------
  post<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.httpClient.post<ApiResponse<T>>(this.buildUrl(endpoint), body);
  }

  // ------------------------
  // PUT
  // ------------------------
  put<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.httpClient.put<ApiResponse<T>>(this.buildUrl(endpoint), body);
  }

  // ------------------------
  // PATCH
  // ------------------------
  patch<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.httpClient.patch<ApiResponse<T>>(this.buildUrl(endpoint), body);
  }

  // ------------------------
  // DELETE
  // ------------------------
  delete<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.httpClient.delete<ApiResponse<T>>(this.buildUrl(endpoint));
  }

  // ------------------------
  // Helpers
  // ------------------------
  private buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  private buildParams(params?: Record<string, string | number | boolean>): HttpParams | undefined {
    if (!params) return undefined;

    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      httpParams = httpParams.set(key, value.toString());
    });

    return httpParams;
  }
}
