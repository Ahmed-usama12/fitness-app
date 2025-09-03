declare interface AuthResponse {
  user: User;
  token: string;
}

declare interface ForgotPasswordResponse {
  info: string;
}

declare interface RestPasswordResponse {
  token: string;
}
