import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const teste = keyframes`
  from {
    opacity: 0;
  }

  to {
   opacity: 1;
  }
`;

export const ProductList = styled.ul`
  animation: ${teste} 2s forwards;
  animation-timing-function: ease-out;
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    transition: 0.5s;
    overflow: hidden;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 20px;
      transition: 0.5s;
      transform: translateX(280px);
    }
    > span {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0 20px;
      transition: 0.5s;
      transform: translateX(-280px);
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      transition: 0.5s;
      transform: translateY(600px);

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }
    }
  }
  li:hover {
    background: #fff;
  }

  li:hover > strong {
    transform: translateX(0);
  }

  li:hover > span {
    transform: translateX(0);
  }

  li:hover button {
    transform: translateY(0);
  }
`;
