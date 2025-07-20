import PageTitle from "@/components/PageTitle/PageTitle";
import { arrVault } from "@/utils/data/vault";

const Vault = () => {
    return (
        <div className="text-white">
            <PageTitle title="Vault" />
            <h1 className="text-xl font-semibold mb-2">Vault</h1>
            <p className="text-neutral-400 text-sm mb-4">
                Links para ferramentas e recursos valiosos que encontrei por aí. Sempre adicionando mais.
                <br />
                <span className="italic">
                    <span className="text-red-400">*</span> Não sou patrocinado por nenhum desses sites, apenas
                    compartilho o que acho útil e interessante.
                </span>
            </p>
            <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {arrVault.map((item, index) => (
                    <VaultCard key={index} img={item.img} title={item.title} desc={item.desc} url={item.url} />
                ))}
            </div>
        </div>
    );
};

function VaultCard({ img, title, desc, url }: { img: string; title: string; desc: string; url: string }) {
    return (
        <a
            href={url}
            target="_blank"
            className="bg-neutral-950 p-4 border border-neutral-900 rounded-[var(--radius)]  hover:bg-neutral-800/30 hover:translate-y-0.5 shadow-inner shadow-neutral-800 transition-all cursor-pointer"
        >
            <div className="w-full aspect-video mb-4 rounded-[var(--radius)] border border-neutral-900 overflow-hidden bg-neutral-900">
                <img src={img} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-medium text-sm">{title}</h2>
            <p className="text-neutral-400 text-xs">{desc}</p>
        </a>
    );
}

export default Vault;
