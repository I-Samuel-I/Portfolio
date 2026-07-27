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
        throw new Error(result.error || "Dados inválidos.");

      case 429:
        throw new Error(
          "Muitas tentativas. Tente novamente em alguns minutos.",
        );

      case 500:
        throw new Error("Erro interno. Tente novamente mais tarde.");

      case 502:
        throw new Error("Não foi possível enviar o email agora.");

      case 503:
        throw new Error("Serviço temporariamente indisponível.");

      default:
        throw new Error(result.error || "Erro inesperado.");
    }
  }
  return result;
}
