import { useFetchAssets } from "../../hooks/useFetchAssets";
import { AssetsProps } from "../../types/AssetsProps";

import { Tr } from "../../components/Tr";
import { BsSearch } from "react-icons/bs";
import { ButtonMore } from "../../components/ButtonMore";

export default function Home() {
  const criptosFecth = useFetchAssets();

  function handleGetMore(): void {}

  return (
    <main className="container mx-auto px-6 pb-6">
      <form action="#" className="flex gap-6">
        <input
          type="text"
          name="name-crypt"
          placeholder="Digite o nome da Crypto"
          required
          className="w-full h-12 px-5 rounded-md outline-primary"
        />
        <button type="submit">
          <BsSearch size={"2.4rem"} color="#fff" />
        </button>
      </form>

      <section className="overflow-auto">
        <table className="text-white my-10 w-full text-center min-w-[600px] border-separate border-spacing-y-4">
          <thead>
            <tr>
              <th scope="col">Moeda</th>
              <th scope="col">Valor mercado</th>
              <th scope="col">Preço</th>
              <th scope="col">Volume</th>
              <th scope="col">Mudança 24h</th>
            </tr>
          </thead>
          <tbody>
            {criptosFecth.map((data: AssetsProps) => (
              <Tr key={data.id}>
                <td>
                  {data.name} | {data.symbol}
                </td>
                <td>{data.marketCapUsd}</td>
                <td>{data.priceUsd}</td>
                <td>{data.volumeUsd24Hr}</td>
                <td
                  className={
                    Number(data.volumeUsd24Hr) > 0 ? "text-profit" : "text-loss"
                  }
                >
                  1.20
                </td>
              </Tr>
            ))}
          </tbody>
        </table>

        <ButtonMore onClick={handleGetMore}>Ver Mais</ButtonMore>
      </section>
    </main>
  );
}
