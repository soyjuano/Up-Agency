import React, { Component } from 'react';
import Artista from './Artista';

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
      <div id='artistas' className='container mx-auto pt-10'>
        <h2 className='h2 text-secondary flex flex-col text-center'>Artistas para contratar</h2>
        <div className='grid grid-cols-3 gap-4'>
        {this.state.artistas.map((artista) => (
          <Artista 
          key={artista.url} 
          artista={artista} />
        ))}
        </div>
      </div>
    );
  }
}

export default Artistas;