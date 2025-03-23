import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <main className="container mx-auto">
      <form action="#">
        <input
          type="text"
          name="name-crypt"
          placeholder="Digite o nome da Crypto"
          required
        />
        <button type="submit">
          <BsSearch size={"2rem"} color="#fff" />
        </button>
      </form>
    </main>
  );
}
