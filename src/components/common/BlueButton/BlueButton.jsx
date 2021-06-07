import styled from "styled-components";

const Button = styled.button`
  width: inherit;
  height: inherit;
  background-color: #10c9c3;
  font-family: gothamPro, sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  border-radius: 4px;
  border: none;

  :hover {
    background-color: #2aaea9;
  }

  :focus {
    outline: none !important;
  }
`;

const BlueButton = (props) => {
    return <Button {...props}>{props.content || props.children}</Button>
}

export default BlueButton;