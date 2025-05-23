import Image from "next/image";
import { Providers } from "@/app/providers";

export default function Home() {
  return (
    <Providers>
      <main className="text-7xl font-sans ">
        <h1>Daniel Vitor</h1>
      </main>
    </Providers>
  );
}
