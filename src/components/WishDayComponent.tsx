import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export const WishDay = () => {
  const [wishDay, setWishDay] = useState<Dayjs | null>(dayjs("2024/12/01"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <DemoContainer components={["DatePicker"]} sx={{ marginBottom: "32px" }}>
        <DatePicker
          label="入社希望日"
          defaultValue={dayjs("年/月/日")}
          views={["year", "month", "day"]}
          value={wishDay}
          onChange={(newValue) => setWishDay(newValue)}
          format="YYYY/MM/DD"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
