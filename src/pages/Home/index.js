import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="http://pngimg.com/uploads/donut/donut_PNG30.png"
          alt="Donut Morango"
        />

        <strong>Donut de Morango</strong>
        <span>R$ 6,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 2
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://i.redd.it/j8yw3zrxnxf21.png" alt="Donut Chocolate" />

        <strong>Donut de Chocolate</strong>
        <span>R$ 7,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="http://pngimg.com/uploads/donut/donut_PNG30.png"
          alt="Donut Morango"
        />

        <strong>Donut de Morango</strong>
        <span>R$ 6,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://i.redd.it/j8yw3zrxnxf21.png" alt="Donut Chocolate" />

        <strong>Donut de Chocolate</strong>
        <span>R$ 7,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 2
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="http://pngimg.com/uploads/donut/donut_PNG30.png"
          alt="Donut Morango"
        />

        <strong>Donut de Morango</strong>
        <span>R$ 6,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://i.redd.it/j8yw3zrxnxf21.png" alt="Donut Chocolate" />

        <strong>Donut de Chocolate</strong>
        <span>R$ 7,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
