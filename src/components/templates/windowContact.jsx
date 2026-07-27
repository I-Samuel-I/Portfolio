import { contactPOST } from "@/src/services/contact";
import { useState } from "react";

const subjects = ["projeto", "freelance", "colaboracao", "duvida"];

export default function WindowContact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");
  const [modalSucess, setModalSucess] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmit(true);
    setError("");
    setModalSucess("")

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website") || "",
    };

    try {
      await contactPOST(data);
      form.reset();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <section className="h-full w-full overflow-y-hidden rounded-md bg-window p-6 text-text-main shadow-window-inset">
      <div className="flex gap-5 justify-between">
        <aside className="flex w-full flex-col justify-between gap-8 ">
          <div>
            <h1 className="text-4xl font-bold leading-none tracking-normal text-text-heading">
              vamos conversar?
            </h1>
            <div className="mt-3 h-0.75 w-64 max-w-full bg-highlight" />

            <div className="mt-4 max-w-sm space-y-1 text-base font-semibold leading-relaxed text-text-muted">
              <p>tem algum projeto em mente?</p>
              <p>ou so quer trocar uma ideia?</p>
              <p>me manda uma mensagem que eu respondo assim que possivel.</p>
            </div>
          </div>

          <div className="relative min-h-60 rounded-md border border-dashed border-border-muted bg-window-panel p-5"></div>
        </aside>

        <form
          className="flex flex-col w-full mt-10 gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              nome <span className="text-highlight">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="seu nome"
              className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="seu email"
              className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              assunto <span className="text-highlight">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              defaultValue=""
              className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm font-semibold text-text-main outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/25"
            >
              <option value="" disabled>
                qual o assunto?
              </option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              mensagem
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="escreve aqui..."
              rows={7}
              maxLength={300}
              className="w-full resize-none rounded-md border border-border-muted bg-window-input px-4 py-3 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
            />
          </div>
          {error && (
            <p role="alert" className="text-sm font-semibold text-red-500">
              {error}
            </p>
          )}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px]"
          />

          <button
            disabled={isSubmit}
            type="submit"
            className="mx-auto cursor-pointer mt-1 h-13 min-w-72 rounded-md border border-border-muted bg-button-bg px-8 text-base font-bold text-text-main shadow-panel transition hover:bg-button-bg-hover"
          >
            {isSubmit ? "sending" : "send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
