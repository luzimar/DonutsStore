import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  function getCartSize(cart) {
    return cart.reduce((acumulator, product) => acumulator + product.amount, 0);
  }

  const cartSize = useSelector(state => getCartSize(state.cart));

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Donuts Store" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
