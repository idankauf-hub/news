import React, { useState, useEffect, ChangeEvent } from "react";
import MenuItem from "@mui/material/MenuItem";

import { ForwardIcon } from "../../Icons";
import { COLORS } from "../../styles/colors";
import { CustomSelect } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectCountry, selectSources } from "../../store/selectedDropDown";
import { updateFilters } from "../../store/query";
import { createTheme, ThemeProvider } from "@mui/material";

interface SelectProps {
  placeholder: string;
  onSelect: (e: string) => void;
  data: any[];
}
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Mulish",
      textTransform: "none",
      fontSize: 16,
      fontWeight: 400,
      color: "#5A5A89",
    },
  },
});

const DropDown = ({ onSelect, data, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [val, setVal] = useState<string>(placeholder || "");
  const [disabled, setDisabled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const SelectedState = useSelector((state: RootState) => state.selected);

  let dropDowns;

  if (placeholder == "Sources") {
    dropDowns = data?.map((item: any, i) => {
      return (
        <div key={i} onClick={() => handleSourceClick(item.id, item.name)}>
          <ThemeProvider theme={theme}>
            <MenuItem
              sx={{
                "&:hover": { backgroundColor: "rgba(223, 224, 235, 0.41)" },
              }}
              key={i}
              value={item.id}
            >
              {item.name}
            </MenuItem>
          </ThemeProvider>
        </div>
      );
    });
  } else {
    dropDowns = data?.map((item, i) => {
      return (
        <div key={i} onClick={() => handleClick(item)}>
          <ThemeProvider theme={theme}>
            <MenuItem
              sx={{
                "&:hover": { backgroundColor: "rgba(223, 224, 235, 0.41)" },
              }}
              key={i}
              value={item}
            >
              {item}
            </MenuItem>
          </ThemeProvider>
        </div>
      );
    });
  }

  const handleSourceClick = (id: string, name: string) => {
    onSelect(id);
    setVal(name);
    dispatch(updateFilters({ country: "" }));
    dispatch(selectSources(true));
    dispatch(selectCountry(false));
  };

  const handleClick = (value: string) => {
    if (placeholder == "Country") {
      dispatch(selectCountry(true));
      dispatch(selectSources(false));
      dispatch(updateFilters({ sources: "" }));
    }
    onSelect(value);
    setVal(value);
  };

  useEffect(() => {
    if (placeholder === "Sources" && SelectedState.country) setDisabled(true);
    else if (placeholder === "Sources") {
      setDisabled(false);
    }
  }, [SelectedState.country, SelectedState.sources]);

  useEffect(() => {
    if (placeholder === "Country" && SelectedState.sources) {
      setDisabled(true);
    } else if (placeholder === "Country") {
      setDisabled(false);
    }
  }, [SelectedState.sources]);

  return (
    <CustomSelect
      size="small"
      disabled={disabled}
      displayEmpty
      disableUnderline
      id="select"
      defaultValue={""}
      value={val || ""}
      onClick={() => setIsOpen(!isOpen)}
      fullWidth
      MenuProps={{
        PaperProps: { sx: { maxHeight: 300 } },
      }}
      open={isOpen}
      sx={{
        background: "white",
        fontWeight: 500,
        fontSize: 14,
        width: "37%",
        letterSpacing: 0.25,
        color: COLORS.purpleblue,
        borderRadius: "10px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
        "& .MuiPaper-root": {
          transition: "none !important",
          outlineColor: "white",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      IconComponent={ForwardIcon}
      native={false}
      renderValue={(value: any) => {
        return <div>{value}</div>;
      }}
    >
      {dropDowns}
    </CustomSelect>
  );
};

export default DropDown;
