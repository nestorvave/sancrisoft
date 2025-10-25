export async function callApi<T>(
  path: string,
  options?: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: Record<string, string>;
  }
): Promise<T> {
  try {
    const response = await fetch(
      `https://ss-company.free.beeceptor.com${path}`,
      {
        method: options?.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...(options?.headers || {}),
        },
        body: options?.body ? JSON.stringify(options.body) : undefined,
      }
    );

    return response.json() as Promise<T>;
  } catch (error: any) {
    console.error("API call failed:", error);
    throw error;
  }
}
