"use client";

import Image from "next/image";
import { CopyButton } from "@/components/ui/CopyButton";

export default function OmbudsmanPage() {
  return (
    <main className="min-h-screen p-6 pb-32 max-w-5xl mx-auto flex flex-col gap-8">
      
      {/* --- Header Section --- */}
      <header className="flex flex-col md:flex-row items-center text-justify gap-6 mt-4">
        {/* Logo Centralizada */} 
        <div className="relative w-48 h-24 md:h-48 md:w-64">
           <Image 
             src="/assets/logo_horizontal_versao_azul.svg" 
             alt="Olho D'água Logo" 
             fill
             className="object-contain"
             priority 
           />
        </div>

        {/* Texto Introdutório */}
        <p className="text-paragrafo text-blue-dark/80 max-w-2xl text-justify leading-relaxed">
          O <strong>Olho D’água</strong> é uma iniciativa da{' '}
          <span className="font-bold text-purple-dark">Loading Jr.</span> que utiliza tecnologia 
          para monitorar, em tempo real, a temperatura e a vida útil dos filtros nos bebedouros do campus. 
          Nosso objetivo é integrar saúde e inovação, oferecendo a você{' '}
          <span className="font-bold text-blue-dark">dados transparentes e precisos</span> sobre a água que consome diariamente.
        </p>
      </header>

      {/* --- Grid de Informações --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {/* Card 1: Como funciona (Verde) */}
        <article className="border-2 border-green-light rounded-3xl p-6 bg-white-custom hover:shadow-lg transition-shadow">
          <h2 className="font-title text-2xl text-green-dark mb-4">Como funciona?</h2>
          <p className="text-paragrafo text-gray-700 text-justify">
            Monitoramos cada gota! Através de sensores inteligentes, medimos o volume de água que passa por cada bebedouro. 
            Assim, conseguimos calcular com precisão a saturação dos filtros, prevendo exatamente quando precisam ser trocados.
          </p>
        </article>

        {/* Card 2: Água Geladinha (Azul) */}
        <article className="border-2 border-blue-light rounded-3xl p-6 bg-white-custom hover:shadow-lg transition-shadow">
          <h2 className="font-title text-2xl text-blue-dark mb-4">Água geladinha!</h2>
          <p className="text-paragrafo text-gray-700 text-justify">
            Sabemos que ninguém gosta de andar o campus inteiro atrás de água gelada. 
            Por isso, o Olho D’água mostra a temperatura em tempo real. Agora, você escolhe o bebedouro mais geladinho direto pelo celular, economizando tempo e garantindo sua refrescância.
          </p>
        </article>

        {/* Card 3: Queremos ouvir você (Laranja - Full Width no Desktop) */}
        <article className="md:col-span-2 border-2 border-orange-light rounded-3xl p-6  hover:shadow-lg transition-shadow">
          <h2 className="font-title text-2xl text-orange-dark mb-6">Queremos ouvir você!</h2>
          
          <div className="flex flex-col gap-6">
            <p className="text-paragrafo text-gray-700">
              A transparência é a base do nosso projeto. Se você notar algo fora do normal, use nossos canais diretos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contato CA */}
              <div className="bg-white-custom p-4 rounded-2xl border border-orange-light/30">
                <h3 className="font-bold text-gray-800 mb-2">Problemas com a Água?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Gosto ruim, cor estranha ou cheiro? Entre em contato com o CA:
                </p>
                <CopyButton label="E-mail" textToCopy="emaildoca@exemplo.com" />
              </div>

              {/* Contato Loading Jr */}
              <div className="bg-white-custom p-4 rounded-2xl border border-orange-light/30">
                <h3 className="font-bold text-gray-800 mb-2">Problemas com o App?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Achou algum bug ou travamento? Relate para a equipe da Loading Jr:
                </p>
                <CopyButton label="E-mail" textToCopy="contato@loadingjr.com.br" />
              </div>
            </div>
          </div>
        </article>

      </section>

      {/* --- Footer Loading Jr --- */}
      <footer className="mt-8 flex flex-col items-center gap-2 opacity-80">
        <h3 className="font-title text-2xl text-purple-light tracking-wide">Loading jr</h3>
        <p className="font-sans text-xs text-purple-dark text-center">
          Inovando para cuidar da nossa comunidade.
        </p>
      </footer>

    </main>
  );
}