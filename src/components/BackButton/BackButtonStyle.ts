import styled from "styled-components";

type TextStyle = {
  color?: string;
  marginBottom?: string;
  fontSize?: string;
  fontWeight?: string;
};
type ButtonStyle = {
  color?: string;
  font?: string;
  backgroundColor?: string;
  padding?: string;
  display?: string;
  alignItems?: string;
  marginBottom?: string;
};

export const SButton = styled.button<ButtonStyle>`
  display: ${({ display = "block" }) => display};
  align-items: ${({ alignItems = "normal" }) => alignItems};
  margin-bottom: ${({ marginBottom = "0px" }) => marginBottom};
  margin-top: 64px;
  background-color: transparent;
  text-decoration: none;
  border: none;
  color: ${({ color = "#000" }) => color};
  padding: 6px 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;

export const SText = styled.p<TextStyle>`
  font-size: ${({ fontSize = "14px" }) => fontSize};
  font-weight: ${({ fontWeight = "normal" }) => fontWeight};
  color: ${({ color = "#000" }) => color};
  margin-bottom: ${({ marginBottom = "0px" }) => marginBottom};
`;
