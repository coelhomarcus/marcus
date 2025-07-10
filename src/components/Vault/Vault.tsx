import PageTitle from "@/components/PageTitle/PageTitle";

const arrVault = [
  {
    title: "Raycast",
    desc: "Canivete multiuso para macOS",
    img: "https://www.raycast.com/opengraph-image-pwu6ef.png?7385e23163a01717",
    url: "https://www.raycast.com",
  },
  {
    title: "Helpy UI",
    desc: "Encontre ferramentas e recursos para devs",
    img: "https://helpy-ui.com/_next/static/media/og.cf599bad.png",
    url: "https://helpy-ui.com",
  },
  {
    title: "Shadcn UI",
    desc: "Componentes React com Tailwind CSS",
    img: "https://ui.shadcn.com/og?title=Shadcn%20UI&description=A%20set%20of%20beautifully-designed%2C%20accessible%20components%20and%20a%20code%20distribution%20platform.%20Works%20with%20your%20favorite%20frameworks.%20Open%20Source.%20Open%20Code.",
    url: "https://ui.shadcn.com/",
  },
  {
    title: "Origamid",
    desc: "Melhor curso de front-end do Brasil",
    img: "https://www.origamid.com/projetos/og-origamid.png",
    url: "https://www.origamid.com",
  },
  {
    title: "Godot Engine",
    desc: "Engine de jogos open source",
    img: "https://godotengine.org/assets/share-image.webp",
    url: "https://godotengine.org",
  },
];

const Vault = () => {
  return (
    <div className="text-white">
      <PageTitle title="Vault" />
      <h1 className="text-xl font-semibold mb-2">Vault</h1>
      <p className="text-neutral-400 text-sm mb-4">
        Links para ferramentas e recursos valiosos que encontrei por aí. Sempre
        adicionando mais.
        <br />
        <span className="italic">
          <span className="text-red-400">*</span> Não sou patrocinado por nenhum
          desses sites, apenas compartilho o que acho útil e interessante.
        </span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {arrVault.map((item, index) => (
          <VaultCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

type VaultCardProps = {
  img: string;
  title: string;
  desc: string;
  url: string;
};

function VaultCard({ img, title, desc, url }: VaultCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-neutral-950 p-4 border border-neutral-900 rounded-[var(--radius)]  hover:bg-neutral-800/30 hover:translate-y-0.5 shadow-inner shadow-neutral-800 transition-all cursor-pointer"
    >
      <img
        src={img}
        alt="Logo"
        className="w-full h-auto mb-4 rounded-[var(--radius)] border border-neutral-900"
      />
      <h2 className="font-medium text-sm">{title}</h2>
      <p className="text-neutral-400 text-xs">{desc}</p>
    </a>
  );
}

export default Vault;
