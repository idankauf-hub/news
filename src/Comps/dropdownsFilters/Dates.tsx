import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { COLORS } from "../../styles/colors";
import type {} from "@mui/x-date-pickers/themeAugmentation";
// import type {} from '@mui/x-date-pickers-pro/themeAugmentation';
import { Box, createTheme, SxProps, ThemeProvider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { updateFilters } from "../../store/query";
import { useDispatch } from "react-redux";
import { Input } from "./style";

// const theme = createTheme({
//   components: {
//     MuiDatePicker: {
//       styleOverrides: {
//         root: {
//           color:"blue",
//           backgroundColor: "white",

//         }
//       }
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           border:"none"
//         }
//       }
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           border:"none",
//           outline:"none"
//         }
//       }
//     }
//   }
// });

interface DatesProps {
  onSelect?: (e: string) => void;
  data: string[];
}
const Dates = ({ onSelect, data }: DatesProps) => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );
  const popperSx: SxProps = {
    "& .MuiInputBase-root": {
      backgroundColor: "rgba(120, 120, 120, 0.2)",
      border: "334px solid black",
    },
  };
  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    // <div style={{ backgroundColor: "white", border: "none" }}>
    //   <LocalizationProvider dateAdapter={AdapterDateFns}>
    //     <DatePicker
    //       PopperProps={{
    //         sx: popperSx,
    //       }}
    //       InputProps={{
    //         disableUnderline: true,
    //       }}
    //       value={value}
    //       onChange={(value) => {
    //         dispatch(updateFilters({ date: value?.toDateString() }));
    //       }}
    //       renderInput={(params) => (
    //         <TextField
    //           {...params}
    //           variant="standard"
    //           sx={{
    //             backgroundColor: "white",
    //             textAlign: "center",
    //             justifyContent: "center",
    //             outlineColor: "red",
    //           }}
    //         />
    //       )}
    //     />
    //   </LocalizationProvider>
    // </div>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(value) => {
          setValue(value);
          dispatch(updateFilters({ date: value?.toDateString() }));
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "30%",
              alignItems: "center",
              background: "white",
              padding: "15px",
              gap: "10px",
              borderRadius: "10px",
            }}
          >
            <Input
              ref={inputRef}
              {...inputProps}
              style={{
                border: "none",
                width: "70px",
              }}
            />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default Dates;
