import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../api/coincap";

export default function Detail() {
  // id para fazer a requisição da cripto selecionada
  const { cripto } = useParams();
  const [criptoFecth, SetCriptoFecth] = useState([]);

  useEffect(() => {
    async function getCoin() {
      try {
        const response = await api
          .get(`/assets/${cripto}`)
          .then((response) => response.data.data);
        // Arrumar retorno da api
        console.log(response);
      } catch (e) {
        console.log("Erro: " + e);
      }
    }

    getCoin();
  }, [cripto]);

  return (
    <main>
      <h1>Página Detalhe Cripto: {cripto}</h1>
    </main>
  );
}
