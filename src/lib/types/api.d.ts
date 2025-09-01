declare type DatabaseFields = {
  _id: string;
  createdAt: string;
};

declare type User = {
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female" | "other";
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo?: string;

  passwordChangedAt?: string;
  passwordResetCode?: string;
  passwordResetExpires?: string;
  resetCodeVerified?: boolean;
} & DatabaseFields;

declare type SuccessfullResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
