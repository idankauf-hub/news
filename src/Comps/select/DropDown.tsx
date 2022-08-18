import React, { useState, useEffect, ChangeEvent } from "react";
import MenuItem from "@mui/material/MenuItem";

import { ForwardIcon } from "../../Icons";
import { COLORS } from "../../styles/colors";
import { CustomSelect } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectCountry, selectSources } from "../../store/selectedDropDown";
import { updateFilters } from "../../store/query";
import { createTheme, ThemeProvider, Tooltip } from "@mui/material";

interface SelectProps {
  placeholder: string;
  onSelect: (e: string) => void;
  data: any[];
  forwardedRef?: any;
  forwardedRefOptions?: any;
}
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Mulish",
      textTransform: "none",
      fontSize: 12,
      fontWeight: 400,
      color: "#5A5A89",
    },
  },
});
const iconTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          right: "19.54px",
          top: "40%",
        },
      },
    },
  },
});

const DropDown = ({
  onSelect,
  data,
  placeholder,
  forwardedRef,
  forwardedRefOptions,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [val, setVal] = useState<string>(placeholder || "");
  const [disabled, setDisabled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const SelectedState = useSelector((state: RootState) => state.selected);
  const Query = useSelector((state: RootState) => state.query);
  const [disabledTooltipText, setDisabledTooltipText] = useState<string>("");
  let dropDownsValues;

  if (placeholder == "Sources" && data.length !== 0) {
    dropDownsValues = data?.map((item: any, i) => {
      return (
        <div key={i} onClick={() => handleSourceClick(item.id, item.name)}>
          <ThemeProvider theme={theme}>
            <MenuItem
              ref={forwardedRefOptions}
              sx={{
                "&:hover": { backgroundColor: "rgba(223, 224, 235, 0.41)" },
              }}
              key={item.id}
              value={item.id}
            >
              {item.name}
            </MenuItem>
          </ThemeProvider>
        </div>
      );
    });
  } else if (data.length !== 0) {
    dropDownsValues = data?.map((item, i) => {
      return (
        <div key={i} onClick={() => handleClick(item)}>
          <ThemeProvider theme={theme}>
            <MenuItem
              ref={forwardedRefOptions}
              sx={{
                "&:hover": { backgroundColor: "rgba(223, 224, 235, 0.41)" },
              }}
              key={item + " " + i}
              value={item}
            >
              {item}
            </MenuItem>
          </ThemeProvider>
        </div>
      );
    });
  } else {
    dropDownsValues = [`No ${placeholder.toLowerCase()}`].map((item, i) => {
      return (
        <ThemeProvider theme={theme}>
          <MenuItem
            ref={forwardedRefOptions}
            sx={{
              "&:hover": { backgroundColor: "rgba(223, 224, 235, 0.41)" },
            }}
            key={"no Data"}
            value={item}
          >
            {item}
          </MenuItem>
        </ThemeProvider>
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
      setDisabledTooltipText(
        `Cannot choose ${placeholder.toLowerCase()} if a country has been selected`
      );
    }
  }, [SelectedState.country, SelectedState.sources]);

  useEffect(() => {
    if (placeholder === "Country" && SelectedState.sources) {
      setDisabled(true);
      setDisabledTooltipText(
        `Cannot choose ${placeholder.toLowerCase()} if a sources has been selected`
      );
    } else if (placeholder === "Country") {
      setDisabled(false);
    }
  }, [SelectedState.sources]);
  useEffect(() => {
    setDisabled(false);
  }, [Query.query.endpoint]);

  return (
    <ThemeProvider theme={iconTheme}>
      <Tooltip title={disabled ? disabledTooltipText : ""}>
        <CustomSelect
          ref={forwardedRef}
          key={placeholder}
          size="small"
          disabled={disabled}
          id="select"
          defaultValue={""}
          value={val || ""}
          onClick={() => (disabled ? setIsOpen(false) : setIsOpen(!isOpen))}
          MenuProps={{
            PaperProps: { sx: { maxHeight: 300 } },
          }}
          open={isOpen}
          sx={{
            background: "white",
            fontWeight: 500,
            fontSize: "0.85rem",
            "@media (min-width: 600px)": {
              width: "11vw",
            },
            "@media (max-width: 1450px)": {
              width: "16vw",
              fontSize: "0.74rem",
            },

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
            "&:hover .Mui-disabled": {
              cursor: "not-allowed",
            },
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
              outlineColor: "white",
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          IconComponent={ForwardIcon}
          native={false}
          renderValue={(value: any) => {
            return <div key={value}>{value}</div>;
          }}
        >
          {dropDownsValues}
        </CustomSelect>
      </Tooltip>
    </ThemeProvider>
  );
};

export default DropDown;
