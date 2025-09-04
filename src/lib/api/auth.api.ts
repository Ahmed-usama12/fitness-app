import axios from "axios";
import { API_URL } from "../constants/url-api";
import type {
  ForgotPasswordFields,
  NewPasswordFields,
  VerifyCodeFields,
} from "../schema/auth.schema";
import { apiRequest } from "../utils/fetcher";
import { toast } from "sonner";

// Forgot password
export const forgotPassword = async (
  values: ForgotPasswordFields
): Promise<APIResponse<ForgotPasswordResponse>> => {
  return apiRequest<ForgotPasswordResponse, ForgotPasswordFields>({
    url: `${API_URL}/auth/forgotPassword`,
    method: "POST",
    data: values,
  });
};

//  Reset password
export const newPassword = async (
  values: NewPasswordFields
): Promise<APIResponse<NewPasswordResponse>> => {
  return apiRequest<NewPasswordResponse, NewPasswordFields>({
    url: `${API_URL}/auth/resetPassword`,
    method: "PUT",
    data: values,
  });
};

// Verify Code
export const sendCode = async (
  values: VerifyCodeFields
): Promise<VerfiyResponse> => {
  try {
    const { data } = await axios.post<VerfiyResponse>(
      `${API_URL}/auth/verifyResetCode`,
      values
    );

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
      return error.response.data as VerfiyResponse;
    }
    throw error;
  }
};
