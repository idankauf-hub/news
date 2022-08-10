import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { Box, createTheme, SxProps, ThemeProvider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { updateFilters } from "../../store/query";
import { useDispatch } from "react-redux";
import { Input } from "./style";
import { DateIcon } from "../../Icons/index";

interface DatesProps {
  data: string[];
}
const Dates = () => {
  const dispatch = useDispatch();

  const [date, setDate] = React.useState<Date | string>("Dates");

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        components={{
          OpenPickerIcon: DateIcon,
        }}
        value={date}
        onChange={(value) => {
          setDate(value || "");
          dispatch(
            updateFilters({ date: new Date(value || "").toISOString() })
          );
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "35%",
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
                  width: "75px",
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
