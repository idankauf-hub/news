import React, { useState, useEffect, ChangeEvent } from "react";
import MenuItem from "@mui/material/MenuItem";
import { ForwardIcon } from "../../Icons";

import { COLORS } from "../../styles/colors";
import { CustomeSelect } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectCountry, selectSources } from "../../store/selectedDropDown";

interface SelectProps {
  placeholder: string;
  onSelect: (e: string) => void;
  data: string[];
}

const DropDown = ({ onSelect, data, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [val, setVal] = useState<string>(placeholder || "");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const dispatch = useDispatch();

  const Query = useSelector((state: RootState) => state.query);
  const SelectedState = useSelector((state: RootState) => state.selected);

  const handleClick = (value: string) => {
    console.log("chose");
    setIsClicked(true);
    if (placeholder == "Sources") {
      dispatch(selectSources(true));
    }
    if (placeholder == "Country") {
      dispatch(selectCountry(true));
    }
    onSelect(value);
    setVal(value);
  };
  const isQueryEmpty = () => {
    if (placeholder == "Country") {
      Query.query.filters.sources.length === 0
        ? setDisabled(false)
        : setDisabled(true);
    }
    if (placeholder == "Sources") {
      Query.query.filters.country.length === 0
        ? setDisabled(false)
        : setDisabled(true);
    }
    // if (placeholder == "Sources") {
    //   Query.query.filters.sources.length === 0
    //     ? setDisabled(false)
    //     : setDisabled(true);
    // }
  };
  useEffect(() => {
    // isQueryEmpty();
    console.log(placeholder, isClicked);
    if (placeholder === "Sources" && SelectedState.country) setDisabled(true);
    else {
      setDisabled(false);
    }
    //call api
    //build query url
    //state url
    // call api with the query url ^
  }, [Query.query.filters.country]);
  useEffect(() => {
    // isQueryEmpty();
    if (placeholder === "Country" && SelectedState.sources) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    //call api
    //build query url
    //state url
    // call api with the query url ^
  }, [Query.query.filters.sources]);
  return (
    <CustomeSelect
      disabled={disabled}
      id="select"
      defaultValue={""}
      value={val || ""}
      onClick={() => setIsOpen(!isOpen)}
      fullWidth
      open={isOpen}
      sx={{
        background: "white",
        fontWeight: 500,
        fontSize: 14,
        width: "37%",
        letterSpacing: 0.25,
        color: COLORS.purpleblue,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
      }}
      IconComponent={ForwardIcon}
      native={false}
      renderValue={(value: any) => {
        return <div>{value}</div>;
      }}
    >
      {data?.map((item, i) => {
        return (
          <div key={i} onClick={() => handleClick(item)}>
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          </div>
        );
      })}
    </CustomeSelect>
  );
};

export default DropDown;
