"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BrandCard } from "./components/BrandCard";
import { AppCard } from "./components/AppCard";
import { BlogPost } from "./components/BlogPost";
import { Plan } from "./components/PlanCard";

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
        <h2 className="text-green px-4">
          Descubre las marcas con impacto positivo
        </h2>
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
          <BrandCard
            title="Ecolaf"
            url="https://ecoalf.com/en-int"
            image="/images/brand1.png"
          />
          <BrandCard
            title="Numon"
            url="https://ecoalf.com/en-int"
            image="/images/brand2.png"
          />
          <BrandCard
            title="Lifegist"
            url="https://ecoalf.com/en-int"
            image="/images/brand3.png"
          />
        </div>
        <div className="w-[80%] h-[3px] bg-green mt-10"></div>
      </section>

      <section id="apps">
        <div className="flex xl:hidden mb-10 flex-col items-center text-green">
          <h2>Aplicaciones</h2>
          <p className="text-3xl font-medium">¿Qué ofrecemos?</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:justify-around 2xl:mx-40">
          <AppCard title="EthiModeApp">
            <ul className="list-disc space-y-2 px-4">
              <li>Buscar y comprar ropa ética de marcas y tiendas</li>
              <li>Notifica cuando te encuentras cerca a tiendas</li>
              <li>Marcadores en Google Maps de las tiendas</li>
              <li>Búsquedas selectivas</li>
              <li>Notificaciones de promociones y ofertas de ropa</li>
            </ul>
          </AppCard>
          <div className="hidden xl:flex">
            <div className="flex flex-row h-full items-center">
              <div className="flex flex-col text-green">
                <h2>Aplicaciones</h2>
                <p className="text-3xl font-medium">¿Qué ofrecemos?</p>
              </div>
            </div>
          </div>
          <AppCard title="FriendlyModeApp">
            <p className="text-center">
              ¿Buscas que tu marca se comprometa con la producción y comercio
              ético?
            </p>
            <p className="font-semibold text-center">Prueba con nuetra app</p>
            <ul className="list-disc space-y-2 mt-6 px-4">
              <li>Perfil con logo de tu marca</li>
              <li>Indicador de nivel ético de la firma</li>
              <li>Valoración en “Ethical points”</li>
            </ul>
          </AppCard>
        </div>
      </section>

      <section
        id="blog"
        className="bg-green text-white px-8 md:px-40 2xl:px-64 my-20"
      >
        <h2 className="my-8">Conoce Más</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 pb-12">
          <BlogPost title="¿Qué es “fast fashion”?" image="/images/blog1.png" />
          <div className="space-y-4">
            <BlogPost
              title="¿Cómo tener un armario sostenible"
              image="/images/blog2.png"
            />
            <BlogPost
              title="¿Qué hacer con la ropa que no uso más?"
              image="/images/blog3.png"
            />
          </div>
          <BlogPost
            title="¿De qué está hecha mi ropa?"
            image="/images/blog4.png"
          />
        </div>
      </section>

      <section id="plans" className="md:px-40 2xl:px-64 mb-20">
        <h2 className="text-black text-center mb-10">Planes</h2>
        <div className="flex flex-col xl:flex-row items-center space-y-10 xl:space-y-0 xl:justify-between">
          <Plan title="Plan Free" image="/images/plan1.png">
            <p>
              Gozar de los beneficios que ofrecemos como comprar ropa ética por
              categorías y preferencias.
            </p>
          </Plan>
          <Plan title="Plan Premium" image="/images/plan2.png">
            <p> $3.49/mes con pago mensual.</p>
            <p>$2.99/mes con pago anual.</p>
            <p>Acceso completo a nuestra EthiModeApp</p>
          </Plan>
        </div>
      </section>

      <section
        id="contact"
        className="bg-green text-white flex flex-col items-center text-center py-20 space-y-6 px-4"
      >
        <h2>Contactanos</h2>
        <p>
          <span className="font-medium">Dirección: </span>Av Lorem ipsum dolor
          sit amet
        </p>
        <p>
          <span className="font-medium">Teléfono: </span>999 999 999
        </p>
        <p>
          <span className="font-medium">Correo electrónico: </span>
          myethical@mail.com
        </p>
        <div className="pt-8 flex flex-row space-x-12">
          <Image
            src="/svgs/linkedin.svg"
            alt="linkedin"
            width={28}
            height={28}
          />
          <Image src="/svgs/youtube.svg" alt="youtube" width={28} height={28} />
          <Image
            src="svgs/instagram.svg"
            alt="instagram"
            width={28}
            height={28}
          />
          <Image
            src="/svgs/facebook.svg"
            alt="facebook"
            width={28}
            height={28}
          />
        </div>
      </section>
    </main>
  );
}
