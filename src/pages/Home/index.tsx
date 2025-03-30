import { useState } from "react";
import { useNavigate } from "react-router";
import { useFetchAssets } from "../../hooks/useFetchAssets";
import { AssetsProps } from "../../types/AssetsProps";

import { Erro } from "./Erro";
import { Loading } from "./Loading";

import { Tr } from "../../components/Tr";
import { Link } from "react-router";
import { BsSearch } from "react-icons/bs";
import { ButtonMore } from "../../components/ButtonMore";
import { CryptoIcon } from "../../components/CryptoIcon";

export default function Home() {
  // Chamada da API, primeira requisição buscas as 10 primeiras moedas.
  const { criptosFecth, setOffSetCriptos, isLoading, isErro } =
    useFetchAssets();
  const navigate = useNavigate();
  const [inputCripto, setInputCripto] = useState<string>("");

  function handleGetMore(): void {
    setOffSetCriptos((prevOffSet) => prevOffSet + 10);
  }

  function handleSubmitCrypto(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    navigate(`detail/${inputCripto.toLowerCase()}`);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isErro) {
    return <Erro />;
  }

  return (
    <main className="container mx-auto px-6 pb-6">
      <form className="flex gap-6" onSubmit={handleSubmitCrypto}>
        <input
          type="text"
          name="name-crypt"
          placeholder="Digite o nome da Crypto"
          required
          className="
            w-full h-12 px-5 rounded-md border-none 
            bg-primaryOpace text-white outline-none 
            transition-all duration-300 ease-in-out 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600
          "
          value={inputCripto}
          onChange={(e) => setInputCripto(e.target.value)}
        />

        <button type="submit">
          <BsSearch
            size={"2.4rem"}
            color="#fff"
            className="transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
          />
        </button>
      </form>

      <section className="overflow-auto">
        <table className="text-white text-center my-10 px-4 w-full min-w-[700px] table-fixed border-separate border-spacing-y-4">
          <thead>
            <tr className="text-cyan-500">
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
                          className="w-6 h-auto object-cover hover:animate-spin"
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
