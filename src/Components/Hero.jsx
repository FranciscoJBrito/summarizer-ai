import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={logo} alt='sumz_logo' className='w-36 object-contain mt-1' /> */}
        <h2 className="text-green-600 text-3xl font-bold">Summe<span className="text-lime-400">.</span></h2>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/FranciscoJBrito/summarizer-ai", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Resume tus articulos con <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Simplifique su lectura con Summe, un resumidor de artículos de código abierto
        que transforma artículos largos en resúmenes claros y concisos.
      </h2>
    </header>
  );
};

export default Hero;
