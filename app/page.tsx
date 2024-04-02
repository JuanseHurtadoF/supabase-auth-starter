import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/sections/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={120}
        height={32}
        className="rounded-lg"
      /> */}
      </main>
    </>
  );
}
