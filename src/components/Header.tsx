import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

export const HeaderComponent = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: "#398ab9" }}>
      <Toolbar>
        <SSideMenu></SSideMenu>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          研修管理ツール
        </Typography>
        <Button color="inherit">ログイン</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

const SSideMenu = styled.div`
  width: 240px;
  background-color: #fff;
`;
