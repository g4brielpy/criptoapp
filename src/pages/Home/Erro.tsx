import { useNavigate } from "react-router";

export function Erro() {
  const navigate = useNavigate();

  return (
    <div className="mt-48 w-full flex flex-col items-center font-extrabold">
      <h1 className="text-4xl text-white mb-8">
        Erro inesperado ao buscar moedas!
      </h1>
      <h2 className="text-white text-xl">
        <button className="underline" onClick={() => navigate(0)}>
          Tente novamente clicando aqui!
        </button>
      </h2>
    </div>
  );
}
