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
    throw new Error(result.error || "Erro ao enviar mensagem.");
  }

  return result;
}
