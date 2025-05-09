import Image from "next/image";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="container bg-amber-50 ">
      <h1 className="font-">Meu Portifólio</h1>
      <HomePage/>
      <h1>Olá pessoas</h1>
    </div>
  );
}
