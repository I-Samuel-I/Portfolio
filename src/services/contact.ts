import type { ContactPayload } from "../types/contact";

export async function contactPOST(data: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new Error(result.error || "Invalid data.");

      case 429:
        throw new Error("Too many attempts. Please try again in a few minutes.");

      case 500:
        throw new Error("Internal server error. Please try again later.");

      case 502:
        throw new Error("It was not possible to send the email right now.");

      case 503:
        throw new Error("Service temporarily unavailable.");

      default:
        throw new Error(result.error || "Unexpected error.");
    }
  }
  return result;
}
