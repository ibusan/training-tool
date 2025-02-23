import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

type TextStyle = {
  color?: string;
  marginBottom?: string;
  fontSize?: string;
  fontWeight?: string;
};

export const BasicInfoForm = () => {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [nameEmpty, setNameEmpty] = useState<boolean>(false);
  const [mailEmpty, setMailEmpty] = useState<boolean>(false);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    if (e.target.value) {
      setNameEmpty(false);
    }
  };

  const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);

    if (e.target.value) {
      setMailEmpty(false);
    }
  };

  const onBlurName = () => {
    if (!name) {
      setNameEmpty(true);
    }
  };
  const onBlurMail = () => {
    if (!mail) {
      setMailEmpty(true);
    }
  };
  return (
    <SSection>
      <SText
        color="rgb(73, 84, 100)"
        fontSize="24px"
        marginBottom="32px"
        fontWeight="bold"
      >
        基本情報
      </SText>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%" },
          marginBottom: "32px",
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          error={nameEmpty}
          id="outlined-helperName"
          label="名前"
          value={name}
          placeholder="研修　太郎"
          onChange={onChangeName}
          onBlur={onBlurName}
          helperText={nameEmpty ? "必須項目です。" : ""}
          sx={{ margin: "0px" }}
        ></TextField>
      </Box>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { width: "100%" } }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          error={mailEmpty}
          id="outlined-helperMail"
          label="メールアドレス"
          value={mail}
          placeholder="frontend@ysinc.co.jp"
          onChange={onChangeMail}
          onBlur={onBlurMail}
          helperText={mailEmpty ? "必須項目です。" : ""}
          sx={{ margin: "0px" }}
        ></TextField>
      </Box>
    </SSection>
  );
};

const SSection = styled.div`
  margin-bottom: 64px;
`;
const SText = styled.p<TextStyle>`
  font-size: ${({ fontSize = "14px" }) => fontSize};
  font-weight: ${({ fontWeight = "normal" }) => fontWeight};
  color: ${({ color = "#000" }) => color};
  margin-bottom: ${({ marginBottom = "0px" }) => marginBottom};
`;
