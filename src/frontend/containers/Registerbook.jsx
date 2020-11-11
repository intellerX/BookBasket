import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerBook } from "../actions";
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';
import { Row, Col, Dropdown,DropdownButton } from 'react-bootstrap';

const Register = props => {
  const [form, setValues] = useState({
    autor: '',
    editorial: '',
    genre: '',
    issn: '',
    language: '',
    page_number: '',
    price: '',
    publication_date: '',
    quantity: 0,
    state: 'D',
    title: '',
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerBook(form, '/login');
  }
  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Añadir Libro</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>


            <Row>
              <Col>
                <input
                  name="autor"
                  className="input"
                  type="text"
                  placeholder="Autor"
                  onChange={updateInput}
                />
              </Col>
              <Col>
                <input
                  name="editorial"
                  className="input"
                  type="text"
                  placeholder="Editorial"
                  onChange={updateInput}
                />
              </Col>
            </Row>



            <input
              name="genre"
              className="input"
              type="text"
              placeholder="Genero"
              onChange={updateInput}
            />
            <input
              name="issn"
              className="input"
              type="text"
              placeholder="Issn"
              onChange={updateInput}
            />
            <input
              name="language"
              className="input"
              type="text"
              placeholder="Idioma"
              onChange={updateInput}
            />
            <Row>
              <Col>
                <input
                  name="page_number"
                  className="input"
                  type="text"
                  placeholder="Numero de Página"
                  onChange={updateInput}
                />
              </Col>

              <Col>
                <input
                  name="price"
                  className="input"
                  type="text"
                  placeholder="Valor"
                  onChange={updateInput}
                />
              </Col>
            </Row>

            <Row>
              <Col>
              <input
                  name="publication_date"
                  className="input"
                  type="text"
                  placeholder="Fecha Publicación"
                  onChange={updateInput}
                />

              </Col>
              <Col>
                <input
                  name="quantity"
                  className="input"
                  type="number"
                  value="1"
                  onChange={updateInput}
                />
              </Col>
            </Row>

            <input
              name="title"
              className="input"
              type="text"
              placeholder="Titulo"
              onChange={updateInput}
            />



            <button className="button" type="submit">Aceptar</button>
          </form>
          <Link to="/" className="register__container--login">
            Atrás
          </Link>
        </section>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  registerBook,
};

Register.propTypes = {
  registerBook: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);