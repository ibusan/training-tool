// 研修生編集画面の作成

import React, { useState } from "react";
import styled from "styled-components";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Reset } from "styled-reset";
import { BackButton } from "./components/BackButton/BackButton";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { BasicInfoForm } from "./components/BasicInfoForm/BasicInfoForm";
import { Registration } from "./components/Registration/Registration";
import { CategoryComponent } from "./components/Category/Category";
import { TeacherComponent } from "./components/Teacher/Teacher";
import { StartDay } from "./components/StartDay/StartDay";
import { WishDay } from "./components/WishDay/WishDay";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type TextStyle = {
  color?: string;
  marginBottom?: string;
  fontSize?: string;
  fontWeight?: string;
};

const trainingStatus = ["研修中", "入社済み", "退社済み"] as const;
type TrainingStatus = (typeof trainingStatus)[number];

dayjs.locale("ja");

// スタイリング
const AppContainer = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${({ isMenuOpen }) => (isMenuOpen ? "200px" : "0")};
`;

const Header = styled(AppBar)`
  position: fixed;
  z-index: 1201;
  transition: margin-left 0.3s ease-in-out;
`;

const Body = styled.div<{ isMenuOpen: boolean }>`
  /* padding: 64px 64px 0 64px; */
  transition: margin-left 0.3s ease-in-out;
  background-color: #e8e8e8;
`;
const BodyInner = styled.div`
  padding: 64px 64px 0 64px;
  transition: margin-left 0.3s ease-in-out;
  background-color: #e8e8e8;
`;

const Sidebar = styled.div<{ isMenuOpen: boolean }>`
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

const SText = styled.p<TextStyle>`
  font-size: ${({ fontSize = "14px" }) => fontSize};
  font-weight: ${({ fontWeight = "normal" }) => fontWeight};
  color: ${({ color = "#000" }) => color};
  margin-bottom: ${({ marginBottom = "0px" }) => marginBottom};
`;

const SGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 64px;
`;
const SFlex = styled.div`
  display: flex;
  align-items: center;
`;

const SSection = styled.section`
  margin-bottom: 64px;
`;
const SDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [entryDay, setEntryDay] = useState<Dayjs | null>(dayjs("2024/12/01"));
  const [personStatus, setPersonStatus] = useState<TrainingStatus>("研修中");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    // ここにクリックした後にハンバーガーメニューアイコンを非表示にする記述を追加する
    const hamburger = document.getElementById("hamburger");
    // const title = document.getElementById("title");
    const close = document.getElementById("close");
    if (hamburger && close) {
      if (isMenuOpen) {
        // メニューを閉じる
        hamburger.style.display = "block";
        close.style.display = "none";
      } else {
        // メニューを開く
        hamburger.style.display = "none";
        close.style.display = "block";
      }
    }
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    const value = event.target.value as TrainingStatus;
    setPersonStatus(value);
  };

  return (
    <>
      <Reset />
      <Sidebar isMenuOpen={isMenuOpen}>
        <Typography
          variant="h6"
          style={{
            paddingTop: "16px",
          }}
          sx={{ color: "#000", width: "240px", height: "100%" }}
        >
          <SDiv>
            <IconButton
              onClick={toggleMenu}
              id="close"
              style={{ display: "none" }}
            >
              <ChevronLeftIcon sx={{ color: "#000" }} />
            </IconButton>
          </SDiv>
          <div>
            <SideMenu />
          </div>
        </Typography>
      </Sidebar>
      <AppContainer isMenuOpen={isMenuOpen}>
        <Body isMenuOpen={isMenuOpen}>
          <Header position="static">
            <Toolbar
              sx={{
                justifyContent: "space-between",
                backgroundColor: "#398ab9",
              }}
            >
              <SFlex>
                <IconButton
                  edge="start"
                  color="inherit"
                  sx={{ textAlign: "right" }}
                  onClick={toggleMenu}
                  id="hamburger"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  id="title"
                  sx={{
                    display: "inline",
                    marginLeft: isMenuOpen ? "30px" : "16px",
                  }}
                >
                  研修管理ツール
                </Typography>
              </SFlex>
              <Button color="inherit" sx={{ position: "relative", right: "0" }}>
                ログイン
              </Button>
            </Toolbar>
          </Header>
          <BodyInner>
            <BackButton color="#398ab9" />
            <SText
              color="#398ab9"
              fontSize="40px"
              fontWeight="bold"
              marginBottom="64px"
            >
              研修生の編集
            </SText>
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "#fff",
                padding: "48px 24px",
                marginBottom: "48px",
              }}
            >
              <BasicInfoForm />
              <SText
                color="rgb(73, 84, 100)"
                fontSize="24px"
                marginBottom="32px"
                fontWeight="bold"
              >
                研修情報
              </SText>

              <FormControl sx={{ m: 1, width: "100%", margin: "0 0 32px 0" }}>
                <InputLabel id="status-label">研修ステータス</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  value={personStatus}
                  onChange={handleStatusChange}
                  input={<OutlinedInput label="Name" />}
                  // MenuProps={MenuProps}
                >
                  {trainingStatus.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <CategoryComponent />
              <TeacherComponent />
              <StartDay />
              <WishDay />
              {personStatus === "入社済み" && (
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ja"
                >
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ marginBottom: "32px" }}
                  >
                    <DatePicker
                      label="入社日"
                      defaultValue={dayjs("年/月/日")}
                      views={["year", "month", "day"]}
                      value={entryDay}
                      onChange={(newValue) => setEntryDay(newValue)}
                      format="YYYY/MM/DD"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
              {personStatus === "研修中" && (
                <SSection>
                  <SText
                    color="rgb(73, 84, 100)"
                    fontSize="24px"
                    marginBottom="32px"
                    fontWeight="bold"
                  >
                    課題バージョン
                  </SText>
                  <SGrid>
                    <FormControl>
                      <FormLabel id="html-css-radio">HTML&CSS</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="html-css-radio"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="v1"
                          control={<Radio />}
                          label="v1"
                        />
                        <FormControlLabel
                          value="v2"
                          control={<Radio />}
                          label="v2"
                        />
                        <FormControlLabel
                          value="v3"
                          control={<Radio />}
                          label="v3"
                        />
                      </RadioGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel id="js-jquery-radio">JS&jQuery</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="js-jquery-radio"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="v1"
                          control={<Radio />}
                          label="v1"
                        />
                        <FormControlLabel
                          value="v2"
                          control={<Radio />}
                          label="v2"
                        />
                      </RadioGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel id="sass-gulp-radio">Sass&Gulp</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="sass-gulp-radio"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="v1"
                          control={<Radio />}
                          label="v1"
                        />
                      </RadioGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel id="react-radio">React</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="react-radio"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="v1"
                          control={<Radio />}
                          label="v1"
                        />
                        <FormControlLabel
                          value="v2"
                          control={<Radio />}
                          label="v2"
                        />
                      </RadioGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel id="vue-radio">Vue</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="vue-radio"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="v1"
                          control={<Radio />}
                          label="v1"
                        />
                      </RadioGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel id="vue-radio">サイト作成</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="site-radio"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="v1"
                          control={<Radio />}
                          label="v1"
                        />
                      </RadioGroup>
                    </FormControl>
                  </SGrid>
                </SSection>
              )}
              <Registration />
            </Typography>
          </BodyInner>
        </Body>
      </AppContainer>
    </>
  );
};
