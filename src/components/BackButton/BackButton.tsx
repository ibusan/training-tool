import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { SButton } from "./BackButtonStyle";
import { SText } from "./BackButtonStyle";

type BackButtonColor = {
  color?: string; // color はオプショナルの文字列型
};

export const BackButton: React.FC<BackButtonColor> = ({ color }) => (
  <SButton display="flex" alignItems="center" marginBottom="48px">
    <KeyboardArrowLeftIcon sx={{ color }} />
    <SText color={color}>戻る</SText>
  </SButton>
);
