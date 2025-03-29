import { useFetchAssets } from "../../hooks/useFetchAssets";
import { AssetsProps } from "../../types/AssetsProps";

import { Tr } from "../../components/Tr";
import { Link } from "react-router";
import { BsSearch } from "react-icons/bs";
import { ButtonMore } from "../../components/ButtonMore";
import { CryptoIcon } from "../../components/CryptoIcon";

export default function Home() {
  // Chamada da API, primeira requisição buscas as 10 primeiras moedas.
  const { criptosFecth, setOffSetCriptos } = useFetchAssets();

  function handleGetMore(): void {
    setOffSetCriptos((prevOffSet) => prevOffSet + 10);
  }

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
        <table className="text-white text-center my-10 px-4 w-full min-w-[700px] table-fixed border-separate border-spacing-y-4">
          <thead>
            <tr>
              <th scope="col" className="w-14">
                #
              </th>
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
                <td className="w-14 text-center">{data.rank}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <Link to={`detail/${data.id}`}>
                      <div className="w-40 flex items-center gap-4">
                        <CryptoIcon
                          name={data.name}
                          symbol={data.symbol}
                          idCripto={data.id}
                        />
                        <span>
                          {data.name} | {data.symbol}
                        </span>
                      </div>
                    </Link>
                  </div>
                </td>
                <td>{data.marketCapUsd}</td>
                <td>{data.priceUsd}</td>
                <td>{data.volumeUsd24Hr}</td>
                <td
                  className={
                    Number(data.changePercent24Hr) > 0
                      ? "text-profit"
                      : "text-loss"
                  }
                >
                  {Number(data.changePercent24Hr).toFixed(2)}
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
