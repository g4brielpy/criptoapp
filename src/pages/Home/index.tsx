import { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { api } from "../../api/coincap";

interface AssetsProps {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export default function Home() {
  const [criptosFecth, setCriptosFecth] = useState<AssetsProps[] | string>([]);

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await api.get("/assets");
        setCriptosFecth(response.data.data);
      } catch (e) {
        setCriptosFecth("Erro ao buscar ativos: " + e);
      }
    };

    getAssets();
  }, []);

  console.log(criptosFecth);

  return (
    <main className="container mx-auto px-6">
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
        <table className="text-white mt-10 w-full text-center min-w-[600px]">
          <thead>
            <tr>
              <th>Moeda</th>
              <th>Valor mercado</th>
              <th>Preço</th>
              <th>Volume</th>
              <th>Mundaça 24h</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primaryOpace font-bold h-12 rounded-lg">
              <td>Bitcoin | BTC</td>
              <td>$1.3T</td>
              <td>$65.000,00</td>
              <td>$16B</td>
              <td>1.20</td>
            </tr>
            <tr>
              <td>Bitcoin | BTC</td>
              <td>$1.3T</td>
              <td>$65.000,00</td>
              <td>$16B</td>
              <td>1.20</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
