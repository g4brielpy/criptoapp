import { useFetchCripto } from "../../hooks/useFetchCripto";
import { useParams } from "react-router";

export default function Detail() {
  const { cripto } = useParams();
  const { criptoFetch } = useFetchCripto(cripto);
  console.log(criptoFetch);

  return (
    <main>
      <h1>Página Detalhe Cripto: </h1>
    </main>
  );
}
