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
    <main className="container mx-auto px-6 pb-6">
      <h1 className="text-white text-center text-4xl font-extrabold mt-10 leading-[3.2rem]">
        {criptoFetch?.name} <br /> {criptoFetch?.symbol}
      </h1>
      <section className="bg-neutral-950 text-white max-w-[420px] p-6 rounded-lg">
        <ul className="space-y-3">
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
                  : "text-green-900 font-bold"
              }
            >
              {Number(criptoFetch?.changePercent24Hr).toFixed(2)}
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
