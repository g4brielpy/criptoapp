import { useEffect, useState } from "react";
import { AssetsProps } from "../types/AssetsProps";
import { formatedPrice, formatedPriceCompact } from "../utils/formatedPrice";

import { api } from "../api/coincap";

export function useFetchCripto(criptoId?: string) {
  const [criptoFetch, setCriptoFetch] = useState<AssetsProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!criptoId) return; // Evita requisições desnecessárias

    async function getCoin() {
      try {
        const response = await api.get(`/assets/${criptoId}`);

        const dataAssetsFormated: AssetsProps = {
          ...response.data.data,
          priceUsd: formatedPrice.format(Number(response.data.data.priceUsd)),
          marketCapUsd: formatedPriceCompact.format(
            Number(response.data.data.marketCapUsd)
          ),
          volumeUsd24Hr: formatedPriceCompact.format(
            Number(response.data.data.volumeUsd24Hr)
          ),
        };

        setCriptoFetch(dataAssetsFormated);
        setLoading(false);
      } catch (e) {
        console.log("Erro: " + e);
      }
    }

    getCoin();
  }, [criptoId]);

  return { criptoFetch, loading };
}
