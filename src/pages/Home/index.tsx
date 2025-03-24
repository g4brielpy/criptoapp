import { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { api } from "../../api/coincap";

import { Tr } from "../../components/Tr";
import { ButtonMore } from "../../components/ButtonMore";
import { AssetsProps } from "../../types/AssetsProps";

export default function Home() {
  const [criptosFecth, setCriptosFecth] = useState<AssetsProps[]>([]);

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await api.get("/assets", {
          params: { limit: 10 },
        });
        setCriptosFecth(response.data.data);
      } catch (e) {
        console.log("Erro " + e);
      }
    };

    getAssets();
  }, []);

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
              <th>Moeda</th>
              <th>Valor mercado</th>
              <th>Preço</th>
              <th>Volume</th>
              <th>Mudança 24h</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primaryOpace font-bold h-12 rounded-lg">
              <td>Teste | BTC</td>
              <td>$1.3T</td>
              <td>$65.000,00</td>
              <td>$16B</td>
              <td>1.20</td>
            </tr>

            {criptosFecth.map((data: AssetsProps) => (
              <Tr key={data.id}>
                <td>
                  {data.name} | {data.symbol}
                </td>
                <td>$1.3T</td>
                <td>$65.000,00</td>
                <td>$16B</td>
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
