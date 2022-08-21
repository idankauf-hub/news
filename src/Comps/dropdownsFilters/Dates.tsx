import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { updateFilters } from "../../store/query";
import { useDispatch } from "react-redux";
import { Input } from "./style";
import { DateIcon } from "../../Icons/index";
import dayjs from "dayjs";
import { COLORS } from "../../styles/colors";

interface DatesProps {
  data: string[];
}
const Dates = () => {
  const dispatch = useDispatch();

  const [date, setDate] = React.useState<Date | string>("Dates");

  const changeDateForamt = (value: string | Date) => {
    const formatted = dayjs(value).format("YYYY-MM-DD");
    return formatted;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        components={{
          OpenPickerIcon: DateIcon,
        }}
        value={date}
        onChange={(value) => {
          setDate(value || "");
          dispatch(updateFilters({ date: changeDateForamt(value || "") }));
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
   
                "@media (min-width: 1401px)": {
                  width: "190px",
                  fontSize: "0.72rem",

    
                },
                width: "15vw",
                alignItems: "center",
                background: "white",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <Input
                ref={inputRef}
                value={date.toString()}
                {...inputProps}
                placeholder={"Dates"}
                style={{
                  border: "none",
                }}
              />
              {InputProps?.endAdornment}
            </Box>
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default Dates;
