export interface AuthResponse {
  user: User;
  token: string;
}
//Signup
export type Register = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  gender: "male" | "female";
  height: number;
  weight: number;
  age: number;
  goal: string;
  activityLevel: string;
};
