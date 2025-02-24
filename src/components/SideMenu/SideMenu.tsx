import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TaskIcon from "@mui/icons-material/Task";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const menuItems = [
  { text: "トップページ", icon: <HomeIcon />, href: "/" },
  { text: "研修生一覧", icon: <PeopleAltIcon /> },
  { text: "研修課題一覧", icon: <TaskIcon /> },
  { text: "ユーザー作成", icon: <GroupAddIcon /> },
];

export const SideMenu = () => {
  return (
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
      {menuItems.map(({ text, icon, href }, index) => (
        <ListItemButton
          key={index}
          component={href ? "a" : "button"}
          href={href}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );
};
