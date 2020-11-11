import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Search from '../components/Search';
import '../assets/styles/Home.scss';
import { Nav, NavDropdown,Navbar } from 'react-bootstrap';

const Home = ({trends, originals }) => (
  <>
    <Header />
    <Navbar bg="dark" variant="dark">
      <Nav variant="pills" activeKey="1" >
        <Nav.Item>
          <Nav.Link eventKey="1" href="/">
            Inicio
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Agrega amigos o chatea">
            Contactos
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" >
            Mensajes
        </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Billetera" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Pedidos</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Carrito de Compras</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">$0.0</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Añadir Saldo</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
    <Search isHome />

    <Categories title="Libros">
      <Carousel>
        {trends.map(item => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
    <Categories title="Noticias">
      <Carousel>
        {originals.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
      </Carousel>
    </Categories>
  </>
);

const mapStateToProps = state => {
  return {
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);
