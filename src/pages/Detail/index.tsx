import { useFetchCripto } from "../../hooks/useFetchCripto";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

import { Loading } from "./Loading";
import { Erro } from "./Erro";

import { CryptoIcon } from "../../components/CryptoIcon";
import { ButtonMore } from "../../components/ButtonMore";

export default function Detail() {
  const { cripto } = useParams();
  const { criptoFetch, loading, isErro } = useFetchCripto(cripto);
  const navegate = useNavigate();

  if (isErro) {
    return <Erro />;
  }

  if (loading || !criptoFetch) {
    return <Loading />;
  }

  return (
    <main className="container mx-auto px-6 pb-6">
      <h1 className="text-white text-center text-4xl font-extrabold mt-10 leading-[3.2rem]">
        {criptoFetch?.name} <br /> {criptoFetch?.symbol}
      </h1>
      <section className="max-w-[420px] mx-auto my-6">
        <div className="bg-neutral-950 text-white mb-10 p-6 rounded-lg">
          <ul className="space-y-3">
            <li>
              <CryptoIcon
                name={criptoFetch?.name}
                idCripto={criptoFetch?.id}
                symbol={criptoFetch?.symbol}
                className="w-16 h-auto object-cover hover:animate-spin"
              />
            </li>
            <li>
              <h2 className="font-bold text-2xl mb-6">
                {criptoFetch?.name} | {criptoFetch?.symbol}
              </h2>
            </li>
            <li>
              <strong>Preço:</strong> {criptoFetch?.priceUsd}
            </li>
            <li>
              <strong>Mercado:</strong> {criptoFetch?.marketCapUsd}
            </li>
            <li>
              <strong>Volume:</strong> {criptoFetch?.volumeUsd24Hr}
            </li>
            <li>
              <strong>mudanças 24h:</strong>{" "}
              <span
                className={
                  Number(criptoFetch?.changePercent24Hr) > 0
                    ? "text-red-900 font-bold"
                    : "text-green-600 font-bold"
                }
              >
                {Number(criptoFetch?.changePercent24Hr).toFixed(2)}
              </span>
            </li>
          </ul>
        </div>
        <ButtonMore onClick={() => navegate("/")}>Voltar</ButtonMore>
      </section>
    </main>
  );
}
