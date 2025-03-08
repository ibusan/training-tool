// 研修生編集画面の作成

import React, { useState } from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
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
import {
  AppContainer,
  Header,
  Body,
  BodyInner,
  Sidebar,
  SText,
  SGrid,
  SFlex,
  SSection,
  SDiv,
} from "./style";
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

dayjs.locale("ja");

const radioGroups = [
  { id: "html-css-radio", label: "HTML&CSS", options: ["v1", "v2", "v3"] },
  { id: "js-jquery-radio", label: "JS&jQuery", options: ["v1", "v2"] },
  { id: "sass-gulp-radio", label: "Sass&Gulp", options: ["v1"] },
  { id: "react-radio", label: "React", options: ["v1", "v2"] },
  { id: "vue-radio", label: "vue", options: ["v1"] },
  { id: "make-site-radio", label: "サイト作成", options: ["v1"] },
];

const trainingStatus = ["研修中", "入社済み", "退社済み"] as const;
type TrainingStatus = (typeof trainingStatus)[number];

export const App: React.FC = () => {
  const [personStatus, setPersonStatus] = useState<TrainingStatus>("研修中");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [entryDay, setEntryDay] = useState<Dayjs | null>(dayjs("2024/12/01"));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    const hamburger = document.getElementById("hamburger");
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
            <BackButton color="#398ab9" text="戻る" />
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
              <BasicInfoForm title="基本情報" />
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
                    {radioGroups.map(({ id, label, options }) => (
                      <FormControl key={id}>
                        <FormLabel id={id}>{label}</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby={id}
                          name={`${id}-group`}
                        >
                          {options.map((option) => (
                            <FormControlLabel
                              key={option}
                              value={option}
                              control={<Radio />}
                              label={option}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    ))}
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
