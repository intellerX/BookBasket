import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CarouselItem2.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {
  const { id, title, autor, genre, page_number, editorial, language, source , isList } = props;


  return (
    <div className="carousel-item2">
      <img className="carousel-item2__img" src={source} alt={title} />
      <div className="carousel-item2__details">
        <div>
          <Link to={`#`}>
            <img className="carousel-item2__details--img" src={"https://img.icons8.com/color/2x/heart-puzzle.png"} alt="Play Icon" />
          </Link>
          {!isList ? (
            <img
              className="carousel-item2__details--img"
              src={plusIcon}
              alt="Reproducir"
              
            />
          ) :
            (
              <img
                className="carousel-item2__details--img"
                src={removeIcon}
                alt="Quitar de mi lista"
               
              />
            )
          }
        </div>
        <p className="carousel-item2__details--title">{title}</p>
        <p className="carousel-item2__details--subtitle">{`${autor} / ${genre} / ${editorial} / ${language} / ${page_number}`}</p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  title: PropTypes.string,
  autor: PropTypes.string,
  genre: PropTypes.string,
  page_number: PropTypes.string,
  editorial: PropTypes.string,
  language: PropTypes.string,
  source: PropTypes.string

};



export default connect(null, null)(CarouselItem);

