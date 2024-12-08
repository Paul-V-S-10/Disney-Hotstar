import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';

// Function to render custom thumbnails

const Home = () => {
  const customRenderThumb = () => {
    
    return movieList.map((item, index) => {
      return ( <img  key={index} src={item.thumbnail} alt={`Thumbnail ${index + 1}`} />);

    });
    
  };

  const movieList = [
    { src: 'Oppenheimer.mp4', thumbnail: 'oppenheimer thumbnail.jpg'},
    { src: 'TENET.mp4', thumbnail: 'tenet thumbnail.jpeg' },
    { src: 'Oppenheimer.mp4', thumbnail: 'oppenheimer thumbnail.jpg'},
    { src: 'TENET.mp4', thumbnail: 'tenet thumbnail.jpeg' },
    { src: 'Oppenheimer.mp4', thumbnail: 'oppenheimer thumbnail.jpg'},
    { src: 'TENET.mp4', thumbnail: 'tenet thumbnail.jpeg' },
    { src: 'Oppenheimer.mp4', thumbnail: 'oppenheimer thumbnail.jpg'},
    { src: 'TENET.mp4', thumbnail: 'tenet thumbnail.jpeg' },
    { src: 'Oppenheimer.mp4', thumbnail: 'oppenheimer thumbnail.jpg'},
    { src: 'TENET.mp4', thumbnail: 'tenet thumbnail.jpeg' },
  ]

  return (

    <Carousel className='home' renderThumbs={customRenderThumb}>
      {movieList.map((item, index) => (
        <div key={index}>
          <video
            width="100%"
            height="auto"
            muted={true}
            controls={false}
            loop={true}
            autoPlay={true}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the HTML5 video tag.
          </video>
        </div>
      ))}
    </Carousel>
  );
};

export default Home;
