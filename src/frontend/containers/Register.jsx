import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from "../actions";
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';
import { Row, Col, Dropdown,DropdownButton } from 'react-bootstrap';

const Register = props => {
  const [form, setValues] = useState({
    dni: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',    
    birthdate: '',    
    profile: 'Usuario',
    gender: '',
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerUser(form, '/');
  }
  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>


            <Row>
              <Col>
                <input
                  name="dni"
                  className="input"
                  type="text"
                  placeholder="DNI"
                  onChange={updateInput}
                />
              </Col>
              <Col>
                <input
                  name="first_name"
                  className="input"
                  type="text"
                  placeholder="Nombre"
                  onChange={updateInput}
                />
              </Col>
              <Col>
                <input
                  name="last_name"
                  className="input"
                  type="text"
                  placeholder="Apellido"
                  onChange={updateInput}
                />
              </Col>
            </Row>



            <input
              name="username"
              className="input"
              type="text"
              placeholder="Usuario"
              onChange={updateInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Email"
              onChange={updateInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={updateInput}
            />
            <Row>
              <Col>
                <input
                  name="direccion"
                  className="input"
                  type="text"
                  placeholder="Direccion"
                  
                />
              </Col>

              <Col>
                <input
                  name="birthdate"
                  className="input"
                  type="text"
                  placeholder="Birthdate"
                  onChange={updateInput}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <DropdownButton id="dropdown-basic-button" title="Generos de Interés">
                  <Dropdown.Item href="#/action-1">aventuras</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">ciencia ficción</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">gótica</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">policiacas</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">terror</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">fantasia</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">ciencia</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">bibliografia</Dropdown.Item>

                </DropdownButton>

              </Col>
              <Col>
                <input
                  name="generos_interes"
                  className="input"
                  type="text"
                  placeholder="Generos"
                  
                />
              </Col>
            </Row>




            <input
              name="ciudad"
              className="input"
              type="text"
              placeholder="Ciudad"
              
            />
            <input
              name="departamento"
              className="input"
              type="text"
              placeholder="Departamento"
              
            />
            <input
              name="gender"
              className="input"
              type="text"
              placeholder="Genero"
              onChange={updateInput}
            />



            <button className="button" type="submit">Registrarme</button>
          </form>
          <Link to="/login" className="register__container--login">
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);