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
    let url = 'https://newsapi.org/v2/top-headlines?country=ar&apiKey=eb4c8b9d543e4db6bebeb74824236a2d';

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        this.setState({
          artistas: data.articles,
        });
      });
  };

  render() {
    return (
      <div id='artistas' className='container row-auto'>
        {this.state.artistas.map((artista) => (
          <Artista 
          key={artista.url} 
          artista={artista} />
        ))}
      </div>
    );
  }
}

export default Artistas;