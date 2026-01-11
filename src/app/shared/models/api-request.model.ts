export interface ApiRequest<T> {
  data: T;
  meta?: {
    requestId?: string;
    timestamp?: string;
  };
}
