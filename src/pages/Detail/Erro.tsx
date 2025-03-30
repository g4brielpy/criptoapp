import { Link } from "react-router";

export function Erro() {
  return (
    <div className="mt-48 w-full flex flex-col items-center font-extrabold">
      <h1 className="text-4xl text-white mb-8">Erro ao buscar moeda!</h1>
      <h2 className="underline text-white">
        <Link to={"/"}>Volte para a página clicando aqui!</Link>
      </h2>
    </div>
  );
}
