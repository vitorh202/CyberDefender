"use client";

import React, { useState } from "react";
import Image from "next/image";
import Appbar from "../components/appbar";
import { cards, Card } from "@/app/data/cards";

export default function Aprenda() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div>
        <Appbar />
    <section className="w-full min-h-screen bg-black text-[#15fc9e] px-6 py-12">
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">🎮 Como Jogar</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 border border-[#15fc9e] rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">1. Saque suas cartas</h3>
            <p>Pegue suas cartas iniciais e comece o jogo. </p>
          </div>
          <div className="p-4 border border-[#15fc9e] rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">2. Jogue Turnos</h3>
            <p>Use sua energia por turno para atacar, defender ou gerar novos recursos.</p>
          </div>
          <div className="p-4 border border-[#15fc9e] rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">3. Vença o Inimigo</h3>
            <p>Reduza a integridade do sistema inimigo a 0 sem deixar o seu ser comprometido.</p>
          </div>
        </div>
      </div>

      {/* LISTAGEM DE CARTAS */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">🎴 Cartas</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card: Card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card.id)}
              className="cursor-pointer group border border-[#15fc9e] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={card.img}
                alt={card.name}
                width={300}
                height={200}
                className="w-full h-auto"
              />
              <div className="p-4 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors">
                <h3 className="text-lg font-bold">{card.name}</h3>
                <p className="text-sm opacity-80">{card.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-[#0a0a0a] border border-[#15fc9e] rounded-xl p-6 max-w-md w-full relative">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-[#15fc9e] text-xl"
              >
                ✖
              </button>
              {cards
                .filter((card) => card.id === selectedCard)
                .map((card) => (
                  <div key={card.id} className="text-center">
                    <Image
                      src={card.img}
                      alt={card.name}
                      width={400}
                      height={300}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
                    <p className="italic mb-2">Tipo: {card.type}</p>
                    <p>{card.effect}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
    </div>
  );
};
