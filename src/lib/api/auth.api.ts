import axios from "axios";
import { API_URL } from "../constants/url-api";
import type {
  ForgotPasswordFields,
  LoginFields,
  NewPasswordFields,
  VerifyCodeFields,
} from "../schema/auth.schema";
import { apiRequest } from "../utils/fetcher";
import { toast } from "sonner";
import type { AuthResponse, ForgotPasswordResponse, NewPasswordResponse } from "../types/auth";

//Login
export const login = async (values: LoginFields): Promise<APIResponse<AuthResponse>> => {
  const { data } = await axios.post(`${import.meta.env.VITE_API}/auth/signin`, values);
  return data;
};

// Forgot password
export const forgotPassword = async (
  values: ForgotPasswordFields,
): Promise<APIResponse<ForgotPasswordResponse>> => {
  return apiRequest<ForgotPasswordResponse, ForgotPasswordFields>({
    url: `${API_URL}/auth/forgotPassword`,
    method: "POST",
    data: values,
  });
};

//  Reset password
export const newPassword = async (
  values: NewPasswordFields,
): Promise<APIResponse<NewPasswordResponse>> => {
  return apiRequest<NewPasswordResponse, NewPasswordFields>({
    url: `${API_URL}/auth/resetPassword`,
    method: "PUT",
    data: values,
  });
};

// Verify Code
export const sendCode = async (values: VerifyCodeFields): Promise<VerifyResponse> => {
  try {
    const { data } = await axios.post<VerifyResponse>(`${API_URL}/auth/verifyResetCode`, values);

    if ("error" in data) {
      toast.error(data.error);
    } else {
      toast.success(data.status);
    }

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const apiError = error.response.data as ErrorResponse;
      toast.error(apiError.error);
      return error.response.data as VerifyResponse;
    }
    throw error;
  }
};
