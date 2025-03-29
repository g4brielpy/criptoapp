import { useFetchCripto } from "../../hooks/useFetchCripto";
import { useParams } from "react-router";

import { Loading } from "./Loading";

export default function Detail() {
  const { cripto } = useParams();
  const { criptoFetch, loading } = useFetchCripto(cripto);
  console.log(criptoFetch);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <h1>Página Detalhe Cripto: </h1>
    </main>
  );
}
