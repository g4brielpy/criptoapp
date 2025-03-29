import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AssetsProps } from "../types/AssetsProps";

import { api } from "../api/coincap";

export function useFetchCripto() {
  const { cripto } = useParams();
  const [criptoFetch, setCriptoFetch] = useState<AssetsProps>();

  useEffect(() => {
    async function getCoin() {
      try {
        const response: AssetsProps = await api
          .get(`/assets/${cripto}`)
          .then((response) => response.data.data);

        setCriptoFetch(response);
      } catch (e) {
        console.log("Erro: " + e);
      }
    }

    getCoin();
  }, [cripto]);

  return { criptoFetch };
}
