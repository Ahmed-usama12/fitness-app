declare interface AuthResponse {
  message: string,
  user: User;
  token: string;
}

declare interface ForgotPasswordResponse {
  info: string;
}

declare interface NewPasswordResponse {
  token: string;
}
