import styled from "styled-components";

const Button = styled.button`
  color: var(--vermelho);
  border: 3px solid var(--vermelho);
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  font-family: 'Montserrat', sans-serif;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button