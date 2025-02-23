import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TaskIcon from "@mui/icons-material/Task";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export const SideMenu = () => {
  return (
    <>
      <List
        component="nav"
        sx={{
          backgroundColor: "#fff",
          width: "240px",
          height: "100%",
          position: "absolute",
          zIndex: "3",
        }}
      >
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="トップページ" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="研修生一覧" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary="研修課題一覧" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="ユーザー作成" />
        </ListItemButton>
      </List>
    </>
  );
};
