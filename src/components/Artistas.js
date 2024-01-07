import React, { Component } from 'react';
import Artista from './Artista';
import { BiSearch } from "react-icons/bi";
import { BiExpandVertical } from "react-icons/bi";
// motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn } from '../variants';

class Artistas extends Component {
  state = {
    artistas: [],
  };

  componentDidMount() {
    this.consultaArtistas();
  }

  consultaArtistas = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eb4c8b9d543e4db6bebeb74824236a2d';

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        this.setState({
          artistas: data.articles,
        });
      });
  };

  render() {
    return (
      <div id='artistas' className='container mx-auto sm:pt-5 lg:pt-10'>

        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-5'>

          <h2 className='h2 text-secondary flex flex-col text-center'>Artistas para contratar</h2>
          <p className='min-w-sm xl:mb-8 mb-2 xl:text-[20px] text-center'>
            Contrate a artistas destacados en UP! Agency y asegúrese el éxito en sus eventos y fiestas.
          </p>

          <div className='mx-auto flex flex-col md:flex-row justify-center items-center gap-5 pb-8'>

            {/* buscador por descripcion */}
            <label class="relative block w-60">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg class="h-5 w-5 fill-slate-900" viewBox="0 0 20 20"><BiSearch /></svg>
              </span>
              <input class=" placeholder:text-white block
           bg-black/20 w-full border border-accent rounded-md py-2 pl-9 pr-3 
           shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 
           focus:ring-1 text-sm"
                placeholder="Encuentre su Artista favorito"
                type="text"
                name="search" />
            </label>
            {/* buscador por categorias */}
            <label className="relative block w-60">
              <span className="sr-only">Search category</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-900" viewBox="0 0 20 20">
                  {/* Icono para el despliegue */}
                </svg>
              </span>
              <select
                className="block bg-black/20 w-full border border-accent rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm placeholder-text-slate-400"
                name="categorias"
              >
                <option value="" disabled selected>
                  Selecciona una categoría
                </option>
                <option value="categoria1">Categoría 1</option>
                <option value="categoria2">Categoría 2</option>
                <option value="categoria3">Categoría 3</option>
                {/* Agrega más opciones según tus necesidades */}
              </select>
            </label>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
          {this.state.artistas.map((artista) => (
            <motion.div
              key={artista.url}
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 flex flex-col lg:mb-0'>
              <Artista artista={artista} />
            </motion.div>
          ))}
        </div>

      </div>
    );
  }
}

export default Artistas;