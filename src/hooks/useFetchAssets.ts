import { useEffect, useState, useRef } from "react";
import { AssetsProps } from "../types/AssetsProps";
import { formatedPrice, formatedPriceCompact } from "../utils/formatedPrice";
import { api } from "../api/coincap";

export function useFetchAssets() {
  const [criptosFecth, setCriptosFecth] = useState<AssetsProps[]>([]);
  const [offSetCriptos, setOffSetCriptos] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Carregando inicialmente
  const [isErro, setIsErro] = useState<boolean>(false);

  const limitCriptos = useRef<number>(10);

  useEffect(() => {
    const getAssets = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/assets", {
          params: { limit: limitCriptos.current, offset: offSetCriptos },
        });

        const dataAssetsFormated: AssetsProps[] = response.data.data.map(
          (item: AssetsProps) => ({
            ...item,
            priceUsd: formatedPrice.format(Number(item.priceUsd)),
            marketCapUsd: formatedPriceCompact.format(
              Number(item.marketCapUsd)
            ),
            volumeUsd24Hr: formatedPriceCompact.format(
              Number(item.volumeUsd24Hr)
            ),
          })
        );

        setCriptosFecth((prevCriptos) => [
          ...prevCriptos,
          ...dataAssetsFormated,
        ]);
      } catch (error) {
        console.error("Erro ao buscar criptomoedas:", error);
        setIsErro(true);
      } finally {
        // Desativa o estado de carregamento
        setIsLoading(false);
      }
    };

    getAssets();
  }, [offSetCriptos]);

  return { criptosFecth, setOffSetCriptos, isLoading, isErro };
}
