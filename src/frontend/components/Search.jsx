import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres leer hoy?</h2>
      <input className="search" type="text" className={inputStyle} placeholder="Buscar..." />
    </section>
  );
}

Search.propTypes = {
  isHome: PropTypes.bool,
};

export default Search;