import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  max-width: 1020px;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

     img {
      height: 36px;
      width: 36px;
      margin-right: 10px;
    }

     span {
      font-size: 16px;
      font-weight: bold;
      color: #2C4CA4;
    }

     a {
      margin-left: 10px;
      color: #04E474;
      text-decoration: none;
      font-size: 16px;

      &:after {
      content: '';
      width: 0px;
      height: 1px;
      display: block;
      background: ${darken(0.05, '#04E474')};
      transition: 300ms;
      }

      &:hover {
        color: ${darken(0.05, '#04E474')};
      }

      &:hover:after {
        width: 100%;
      }
    }

  }

  footer {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
      padding: 12px;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        margin-left: 5px;
      }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
    transition: fill 0.2s;

    .btnUpdate:hover {
      fill: ${darken(0.05, '#7159c1')};
    }
    .btnDelete:hover {
      fill: ${darken(0.05, '#da4567')};
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
