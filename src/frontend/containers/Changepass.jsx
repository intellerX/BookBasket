import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePassword } from "../actions";
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    old_pass: '',
    new_pass: '' 
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.changePassword(form, '/login');
  }
  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Cambiar Contraseña</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={updateInput}
            />

            <input
              name="old_pass"
              className="input"
              type="text"
              placeholder="Contraseña Antigua"
              onChange={updateInput}
            />

            <input
              name="new_pass"
              className="input"
              type="text"
              placeholder="Contraseña nueva"
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
  changePassword,
};

Register.propTypes = {
  changePassword: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);