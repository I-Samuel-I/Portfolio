const subjects = ["projeto", "freelance", "colaboracao", "duvida"];

export default function WindowContact() {
  return (
    <section className="h-full overflow-y-hidden w-full rounded-md bg-[#DDCCC4] p-6 text-[#2a2328]">
      <div className="flex gap-5 justify-between">
        <aside className="flex w-full flex-col justify-between gap-8 ">
          <div>
            <h1 className="text-4xl font-bold leading-none tracking-normal text-[#1f1a1f]">
              vamos conversar?
            </h1>
            <div className="mt-3 h-0.75 w-64 max-w-full bg-[#745f91]" />

            <div className="mt-7 max-w-sm space-y-3 text-base font-semibold leading-relaxed text-[#2d252a]">
              <p>tem algum projeto em mente?</p>
              <p>ou so quer trocar uma ideia?</p>
              <p>me manda uma mensagem que eu respondo assim que possivel.</p>
            </div>
          </div>

          <div className="relative min-h-64 rounded-md border border-dashed border-[#7a6172]/60 bg-[#ddccc4] p-5"></div>
          <div className="rounded-sm border border-dashed border-[#7a6172]/70 bg-[#ddccc4] p-5">
            <h2 className="mb-4 text-base font-bold text-[#745f91]">
              ou prefere algo mais direto?
            </h2>

            <ul className="space-y-3 text-sm font-semibold leading-relaxed text-[#2a2328]">
              <li className="flex items-start gap-3">
                <div>
                  <span className="block font-bold">email</span>
                  <span className="text-[#2a2328]/75">teste</span>
                  <span className="block font-bold">email</span>
                  <span className="text-[#2a2328]/75">teste</span>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <form className="flex flex-col w-full mt-10 gap-4 ">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-bold text-[#2a2328]"
            >
              nome <span className="text-[#745f91]">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="seu nome"
              className="h-12 w-full rounded-md border border-[#2a2328]/70 bg-[#e8d8ce] px-4 text-sm font-semibold text-[#2a2328] outline-none transition placeholder:text-[#2a2328]/45 focus:border-[#745f91] focus:ring-2 focus:ring-[#745f91]/25"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-bold text-[#2a2328]"
            >
              email <span className="text-[#745f91]">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="seu email"
              className="h-12 w-full rounded-md border border-[#2a2328]/70 bg-[#e8d8ce] px-4 text-sm font-semibold text-[#2a2328] outline-none transition placeholder:text-[#2a2328]/45 focus:border-[#745f91] focus:ring-2 focus:ring-[#745f91]/25"
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-sm font-bold text-[#2a2328]"
            >
              assunto <span className="text-[#745f91]">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              defaultValue=""
              className="h-12 w-full rounded-md border border-[#2a2328]/70 bg-[#e8d8ce] px-4 text-sm font-semibold text-[#2a2328] outline-none transition focus:border-[#745f91] focus:ring-2 focus:ring-[#745f91]/25"
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
              className="mb-2 block text-sm font-bold text-[#2a2328]"
            >
              mensagem <span className="text-[#745f91]">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="escreve aqui..."
              rows={7}
              className="w-full resize-none rounded-md border border-[#2a2328]/70 bg-[#e8d8ce] px-4 py-3 text-sm font-semibold text-[#2a2328] outline-none transition placeholder:text-[#2a2328]/45 focus:border-[#745f91] focus:ring-2 focus:ring-[#745f91]/25"
            />
          </div>

          <button
            type="button"
            className="mx-auto mt-1 h-13 min-w-72 rounded-md border border-[#2a2328]/60 bg-[#745f91] px-8 text-base font-bold text-[#f2e6dd] shadow-[4px_4px_0_rgba(42,35,40,0.18)] transition hover:bg-[#654e82]"
          >
            enviar mensagem *
          </button>
        </form>
      </div>
    </section>
  );
}
