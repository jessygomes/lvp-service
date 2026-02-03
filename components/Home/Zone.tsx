import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Zone() {
  return (
    <section className="wrapper py-16 md:py-20 lg:py-24 2xl:py-32 bg-white">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-20 items-center">
          {/* Contenu texte */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-three text-noir tracking-wide">
                Zone d&apos;intervention
              </h2>
            </div>

            <p className="text-base md:text-lg 2xl:text-xl text-gray-700 font-one leading-relaxed max-w-xl 2xl:max-w-2xl">
              Nous intervenons rapidement et efficacement sur l&apos;ensemble de
              l&apos;Île-de-France, auprès des particuliers comme des
              professionnels.
            </p>

            {/* Liste des zones optionnelle */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-second/10 rounded-sm text-second font-two text-sm">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>Toute l&apos;Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Carte */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-gray-50 to-gray-100 rounded-sm p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Décoration d'angle */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-second/30 rounded-tr-sm" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-second/30 rounded-bl-sm" />

              {/* Image de la carte */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/img/home/image.png"
                  fill
                  alt="Carte Île-de-France"
                  className="object-cover rounded-sm border border-second/20"
                />
              </div>
            </div>

            {/* Badge flottant */}
            {/* <div className="absolute -bottom-4 -left-4 bg-second text-white px-6 py-3 rounded-sm shadow-lg font-two text-sm">
              Intervention rapide
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
