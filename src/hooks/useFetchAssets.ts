import { useEffect, useState, useRef } from "react";
import { AssetsProps } from "../types/AssetsProps";
import { formatedPrice, formatedPriceCompact } from "../utils/formatedPrice";
import { api } from "../api/coincap";

export function useFetchAssets() {
  const [criptosFecth, setCriptosFecth] = useState<AssetsProps[]>([]);
  const [offSetCriptos, setOffSetCriptos] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para controlar carregamento

  const limitCriptos = useRef<number>(10);
  const isFirstLoad = useRef<boolean>(true); // Para evitar a execução inicial desnecessária

  useEffect(() => {
    // Evitar a requisição automática na primeira renderização
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const getAssets = async () => {
      setIsLoading(true); // Ativa o estado de carregamento
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
      } finally {
        setIsLoading(false); // Desativa o estado de carregamento após a requisição
      }
    };

    getAssets();
  }, [offSetCriptos]);

  return { criptosFecth, setOffSetCriptos, isLoading };
}
