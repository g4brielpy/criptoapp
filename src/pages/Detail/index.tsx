import { useParams } from "react-router";

export default function Detail() {
  const { cripto } = useParams();

  return (
    <main>
      <h1>Página Detalhe Cripto: {cripto}</h1>
    </main>
  );
}
