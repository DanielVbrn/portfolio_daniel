import Image from "next/image";
import { Providers } from "@/app/providers";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Providers>
     <Header/>
     
    </Providers>
  );
}
