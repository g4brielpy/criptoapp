import { useFetchCripto } from "../../hooks/useFetchCripto";

export default function Detail() {
  const { criptoFetch } = useFetchCripto();
  console.log(criptoFetch);

  return (
    <main>
      <h1>Página Detalhe Cripto: </h1>
    </main>
  );
}
