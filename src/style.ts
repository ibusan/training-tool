import { AppBar } from "@mui/material";
import styled from "styled-components";

type TextStyle = {
  color?: string;
  marginBottom?: string;
  fontSize?: string;
  fontWeight?: string;
};

// スタイリング
export const AppContainer = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${({ isMenuOpen }) => (isMenuOpen ? "200px" : "0")};
`;

export const Header = styled(AppBar)`
  position: fixed;
  z-index: 1201;
  transition: margin-left 0.3s ease-in-out;
`;

export const Body = styled.div<{ isMenuOpen: boolean }>`
  /* padding: 64px 64px 0 64px; */
  transition: margin-left 0.3s ease-in-out;
  background-color: #e8e8e8;
`;
export const BodyInner = styled.div`
  padding: 64px 64px 0 64px;
  transition: margin-left 0.3s ease-in-out;
  background-color: #e8e8e8;
`;

export const Sidebar = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: #fff;
  color: white;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  z-index: 1200;
  transition: all 0.3s ease-in-out;
`;

export const SText = styled.p<TextStyle>`
  font-size: ${({ fontSize = "14px" }) => fontSize};
  font-weight: ${({ fontWeight = "normal" }) => fontWeight};
  color: ${({ color = "#000" }) => color};
  margin-bottom: ${({ marginBottom = "0px" }) => marginBottom};
`;

export const SGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 64px;
`;
export const SFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const SSection = styled.section`
  margin-bottom: 64px;
`;
export const SDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;
