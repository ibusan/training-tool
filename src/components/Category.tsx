import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Theme, useTheme } from "@mui/material/styles";
import { useState } from "react";

const trainingCategory = [
  "フロントエンド",
  "バックエンド",
  "アプリケーション",
  "デザイナー",
];

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

export const CategoryComponent = () => {
  const theme = useTheme();
  const [personCategory, setPersonCategory] = useState<string[]>([]);

  const handleCategoryChange = (
    event: SelectChangeEvent<typeof personCategory>
  ) => {
    const {
      target: { value },
    } = event;
    setPersonCategory(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: "100%", margin: "0 0 32px 0" }}>
      <InputLabel id="demo-multiple-name-label">研修カテゴリー</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={personCategory}
        onChange={handleCategoryChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {trainingCategory.map((category) => (
          <MenuItem
            key={category}
            value={category}
            style={getStyles(category, personCategory, theme)}
          >
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
