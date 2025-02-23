import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Theme, useTheme } from "@mui/material/styles";
import { useState } from "react";

const trainingTeacher = ["講師１", "講師2", "講師3", "講師4", "講師3"];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const TeacherComponent = () => {
  const theme = useTheme();
  const [personalTeacher, setPersonalTeacher] = useState<string[]>([]);
  const handleTeacherChange = (
    event: SelectChangeEvent<typeof personalTeacher>
  ) => {
    const {
      target: { value },
    } = event;
    setPersonalTeacher(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <FormControl sx={{ m: 1, width: "100%", margin: "0 0 32px 0" }}>
      <InputLabel id="demo-multiple-name-label">研修担当者</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={personalTeacher}
        onChange={handleTeacherChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {trainingTeacher.map((teacher) => (
          <MenuItem
            key={teacher}
            value={teacher}
            style={getStyles(teacher, personalTeacher, theme)}
          >
            {teacher}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
