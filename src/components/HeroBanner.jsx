import React from "react";
import fondoPortal from "../assets/fondo-portal-datos-abiertos.webp";

const HeroBanner = ({
  text = "hola",
  image = fondoPortal,
  height = "h-[30vh]",
  textClass = "text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center"
}) => (
  <div className={`relative w-full ${height} overflow-hidden`}>
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <img
        src={image}
        alt="Fondo portal datos abiertos"
        className="w-full h-full object-cover blur-md"
        style={{ display: 'block', margin: '0 auto' }}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-4xl mx-auto px-4">
        <h1 className={textClass + " flex-1 text-center md:text-left"}>
          {text}
        </h1>
        <div className="hidden md:block h-16 w-px bg-white opacity-60 mx-4" />
        <img
          src="https://adn.gob.do/wp-content/uploads/2021/11/Logo.svg"
          alt="Logo ADN"
          className="h-12 w-auto md:h-16 md:ml-4 drop-shadow-lg mt-4 md:mt-0"
          style={{ maxHeight: '64px' }}
        />
      </div>
    </div>
  </div>
);

export default HeroBanner; 