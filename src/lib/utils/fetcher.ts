import axios from "axios";
import { toast } from "sonner";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type ApiRequestArgs<TBody> = {
  url: string;
  method: HttpMethod;
  data?: TBody;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
};

export async function apiRequest<TResponse, TBody = unknown>({
  url,
  method,
  data,
  params,
  headers,
}: ApiRequestArgs<TBody>): Promise<APIResponse<TResponse>> {
  try {
    const { data: response } = await axios.request<APIResponse<TResponse>>({
      url,
      method,
      data,
      params,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
    if ("error" in response) {
      toast.error(response.error);
    } else {
      toast.success(response.message);
    }

    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const apiError = error.response.data as ErrorResponse;
      console.log(error);

      toast.error(apiError.error || "Error");
      return error.response.data as APIResponse<TResponse>;
    }
    throw error;
  }
}
