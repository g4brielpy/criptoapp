import { useEffect, useState } from "react";
import { AssetsProps } from "../types/AssetsProps";
import { formatedPrice, formatedPriceCompact } from "../utils/formatedPrice";

import { api } from "../api/coincap";

export function useFetchAssets(): AssetsProps[] {
  const [criptosFecth, setCriptosFecth] = useState<AssetsProps[]>([]);

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await api
          .get("/assets", {
            params: { limit: 10 },
          })
          .then((response) => response.data);

        const dataAssetsFormated: AssetsProps[] = response.data.map(
          (item: AssetsProps) => {
            const dataFormated: AssetsProps = {
              ...item,
              priceUsd: formatedPrice.format(Number(item.priceUsd)),
              marketCapUsd: formatedPriceCompact.format(
                Number(item.marketCapUsd)
              ),
              volumeUsd24Hr: formatedPriceCompact.format(
                Number(item.volumeUsd24Hr)
              ),
            };

            return dataFormated;
          }
        );

        setCriptosFecth(dataAssetsFormated);
      } catch (e) {
        console.log("Erro " + e);
      }
    };

    getAssets();
  }, []);

  return criptosFecth;
}
