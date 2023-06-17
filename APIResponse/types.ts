export namespace SocialMedia.APIResponse {
  export interface APIResponse<T> {
    success: boolean;
    data: T | null;
    error: {
      code: number;
      message: string;
    } | null;
  }
}
