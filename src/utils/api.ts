import { apiBaseUrl } from "@/config/config";

const baseURL: string = apiBaseUrl;

interface ApiRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  headers?: HeadersInit;
}

export async function apiRequest<T>(
  endPoint: string,
  { method = "GET", data = null, headers = {} }: ApiRequestOptions = {}
): Promise<T> {
  const url = `${baseURL}/${endPoint}`;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  if (data) {
    config.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occured");
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}
