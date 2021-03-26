/** API Response Model */

export interface ApiResponse {
  statusCode: number;
  body: string;
  headers: Record<string, unknown>;
}
