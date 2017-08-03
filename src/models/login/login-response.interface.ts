export interface LoginResponse {
    result?: {
        emailt?: string;
        uid?: string;
    }
    error?: {
        code?: string;
        message?: string;
    }
}