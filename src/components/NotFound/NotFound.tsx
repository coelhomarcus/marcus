import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center mt-10 items-center gap-2">
            <h1 className="text-center text-xl font-medium text-neutral-100">Pagina não encontrada!</h1>
            <p className="text-center text-sm text-neutral-400 mb-2">A página que você está procurando não existe.</p>

            <div className="relative w-50 h-50 self-center mb-3">
                <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse rounded-lg" />
                <img
                    loading="lazy"
                    src="https://i.pinimg.com/736x/46/e2/9e/46e29ee150063636f4fb137b1fbfcf69.jpg"
                    alt="Imagem de personagem confuso"
                    className="absolute inset-0 w-full h-full object-cover select-none rounded-sm"
                />
            </div>

            <Link
                to="/"
                className="text-xs px-4 py-2 border border-neutral-800 text-neutral-300 hover:text-white transition-all duration-200"
            >
                Voltar para o Início
            </Link>
        </div>
    );
};

export default NotFound;
