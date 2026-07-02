import Image from "next/image";
import ProfilePic from "../../assets/images/me.png";


export default function WindowAbout() {
    return (
        <section className="h-full w-full overflow-y-auto rounded-md bg-[#DDCCC4] p-6 text-[#2a2328] shadow-[inset_0_0_32px_rgba(42,35,40,0.24)]">
            <article className="grid gap-8 border-b border-dashed border-[#7a6172]/70 pb-7 lg:grid-cols-[220px_1fr]">
                <div className="mx-auto flex w-full max-w-[220px] items-center justify-center">
                    <Image
                        src={ProfilePic}
                        alt="Foto de Samuel Gomes"
                        width={200}
                        height={300}
                        className="h-47.5 w-47.5 scale-130 rounded-full object-cover"
                    />
                </div>
                <div className="flex w-full flex-col justify-be">

                    <h1 className="text-4xl font-bold leading-none tracking-normal text-[#1f1a1f]">
                        Samuel Gomes.
                    </h1>
                    <div className="mt-2 h-0.75 w-64 max-w-full bg-[#745f91]" />
                    <h2 className="mt-4 text-lg font-bold text-[#745f91]">
                        web developer, mobile developer e ux/ui designer.
                    </h2>

                    <div className="mt-4 max-w-xl space-y-4 text-base leading-relaxed text-[#2d252a]">
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </article>

            <article className="grid gap-5 border-b border-dashed border-[#7a6172]/70 py-6 md:grid-cols-3">
                <div className="rounded-md border border-[#2a2328]/50 bg-[#ddccc4] p-5 shadow-[4px_4px_0_rgba(42,35,40,0.16)]">
                    <p className="mb-4 text-2xl text-[#745f91]">&lt;/&gt;</p>
                    <h3 className="text-lg font-bold text-[#745f91]">web dev</h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                        <li>desenvolvimento web</li>
                        <li>aplicacoes e sistemas</li>
                        <li>performance e boas praticas</li>
                    </ul>
                </div>

                <div className="rounded-md border border-[#2a2328]/50 bg-[#ddccc4] p-5 shadow-[4px_4px_0_rgba(42,35,40,0.16)]">
                    <p className="mb-4 text-2xl text-[#745f91]">[]</p>
                    <h3 className="text-lg font-bold text-[#745f91]">mobile dev</h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                        <li>aplicativos mobile</li>
                        <li>react native e expo</li>
                        <li>interfaces responsivas</li>
                    </ul>
                </div>

                <div className="rounded-md border border-[#2a2328]/50 bg-[#ddccc4] p-5 shadow-[4px_4px_0_rgba(42,35,40,0.16)]">
                    <p className="mb-4 text-2xl text-[#745f91]">UX</p>
                    <h3 className="text-lg font-bold text-[#745f91]">ux/ui</h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                        <li>design de interfaces</li>
                        <li>prototipacao</li>
                        <li>experiencia do usuario</li>
                    </ul>
                </div>
            </article>

            <article className="grid gap-6 py-6 md:grid-cols-[1.15fr_0.8fr_1fr]">
                <div className="md:border-r md:border-dashed md:border-[#7a6172]/70 md:pr-6">
                    <h3 className="mb-4 text-lg font-bold text-[#745f91]">formação</h3>
                    <div className="space-y-5 text-sm leading-relaxed">
                        <div>
                            <p className="font-bold">Tecnico em Informática</p>
                            <p className="text-[#745f91]">Instituto Federal da Paraiba</p>
                        </div>
                        <div>
                            <p className="font-bold">Analise e Desenvolvimento de Sistemas</p>
                            <p className="text-[#745f91]">UNIFIP Centro Universitario</p>
                        </div>
                    </div>
                </div>

                <div className="md:border-r md:border-dashed md:border-[#7a6172]/70 md:pr-6">
                    <h3 className="mb-4 text-lg font-bold text-[#745f91]">idiomas</h3>
                    <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed">
                        <li>
                            Portugues
                            <span className="block text-[#745f91]">Fluente</span>
                        </li>
                        <li>
                            Ingles
                            <span className="block text-[#745f91]">Intermediario</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-bold text-[#745f91]">interesses</h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
                        <li>UX/UI design</li>
                        <li>Jogos indie</li>
                        <li>Ilustracao digital</li>
                        <li>Interfaces criativas</li>
                        <li>Narrativas e personagens</li>
                    </ul>
                </div>
            </article>
        </section>
    );
}
