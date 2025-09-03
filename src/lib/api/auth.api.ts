import { API_URL } from "../constants/url-api";
import type { ForgotPasswordFields } from "../schema/auth.schema";
import { apiRequest } from "../utils/fetcher";

export const forgotPassword = async (
  values: ForgotPasswordFields
): Promise<APIResponse<ForgotPasswordResponse>> => {
  return apiRequest<ForgotPasswordResponse, ForgotPasswordFields>({
    url: `${API_URL}/auth/forgotPassword`,
    method: "POST",
    data: values,
  });
};
