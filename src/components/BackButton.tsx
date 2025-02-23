import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
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

type BackButtonColor = {
  color?: string; // color はオプショナルの文字列型
};

export const BackButton: React.FC<BackButtonColor> = ({ color }) => (
  <SButton display="flex" alignItems="center" marginBottom="48px">
    <KeyboardArrowLeftIcon sx={{ color }} />
    <SText color={color}>戻る</SText>
  </SButton>
);

const SButton = styled.button<ButtonStyle>`
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
const SText = styled.p<TextStyle>`
  font-size: ${({ fontSize = "14px" }) => fontSize};
  font-weight: ${({ fontWeight = "normal" }) => fontWeight};
  color: ${({ color = "#000" }) => color};
  margin-bottom: ${({ marginBottom = "0px" }) => marginBottom};
`;
