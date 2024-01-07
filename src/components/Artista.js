import React from 'react';

const Artista = (props) => {
  const { url, author, title, urlToImage, content } = props.artista;

  return (
    <div className=''>
      <div className='card border-2 border-white/20 rounded-xl relative'>
        <img
          src={urlToImage}
          alt={title}
          className='card-img-top rounded-xl w-full h-[200px] lg:h-[300px] xl:h-[400px]'
        />
        <div className='absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center text-white text-lg'>
          {author}
        </div>
        {/* <div className='card-body'>
          <h5 className='card-title'>{title} </h5>
          <p className='card-text'>{content} </p>
          <a href={url} className='btn'>
            Leer mas
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Artista;
