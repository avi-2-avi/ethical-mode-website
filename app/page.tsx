"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "./components/Card";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col">
      <section
        id="hero"
        className="bg-hero-pattern bg-center h-[80vh] bg-cover"
      >
        <div className="flex flex-row justify-center lg:justify-between py-4 px-20">
          <p className="text-xl">Ethical Mode</p>
          <ul className="hidden lg:flex flex-row lg:space-x-10 xl:space-x-20">
            <li>
              <a href="#brands">Marcas</a>
            </li>
            <li>
              <a href="#apps">Aplicaciones</a>
            </li>
            <li>
              <a href="#blog">Infórmate</a>
            </li>
            <li>
              <a href="#plans">Planes</a>
            </li>
            <li>
              <a href="#contact">Contactanos</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row h-full items-center px-8 md:pl-20">
          <div className="flex flex-col items-start w-[440px] bg-yellow/60 lg:bg-yellow/0 p-4 rounded-lg">
            <h1>Somos lo que llevamos puesto</h1>
            <p className="pt-2 pb-8">Conoce más, compra mejor</p>
            <button
              className="bg-black text-white px-6 py-2 rounded-lg"
              onClick={() => router.push("#blog")}
            >
              Conoce Más
            </button>
          </div>
        </div>
      </section>

      <section
        id="brands"
        className="flex flex-col text-center items-center py-16"
      >
        <h2 className="text-green px-4">Descubre las marcas con impacto positivo</h2>
        <div className="flex flex-row h-full items-center gap-x-2 pt-2 pb-8">
          <p>ver todas</p>
          <Image
            src="/svgs/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-around space-y-8 md:space-y-0 md:space-x-20 px-4">
          <Card
            title="Ecolaf"
            url="https://ecoalf.com/en-int"
            image="/images/brand1.png"
          />
          <Card
            title="Numon"
            url="https://ecoalf.com/en-int"
            image="/images/brand2.png"
          />
          <Card
            title="Lifegist"
            url="https://ecoalf.com/en-int"
            image="/images/brand3.png"
          />
        </div>
        <div className="w-[80%] h-[3px] bg-green mt-10"></div>
      </section>

      <section id="apps">
        <p>Apps</p>
      </section>

      <section id="blog">
        <p>Blog</p>
      </section>

      <section id="plans">
        <p>Plans</p>
      </section>

      <section id="contact">
        <p>Contact</p>
      </section>
    </main>
  );
}
