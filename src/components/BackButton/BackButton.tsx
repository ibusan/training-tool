import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { SButton } from "./BackButtonStyle";
import { SText } from "./BackButtonStyle";

type BackButtonColor = {
  color?: string; // color はオプショナルの文字列型
  text?: string;
};

export const BackButton: React.FC<BackButtonColor> = ({ color, text }) => (
  <SButton display="flex" alignItems="center" marginBottom="48px">
    <KeyboardArrowLeftIcon sx={{ color }} />
    <SText color={color}>{text}</SText>
  </SButton>
);
