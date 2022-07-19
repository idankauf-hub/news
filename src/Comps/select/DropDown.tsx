import React, { useState, useEffect, ChangeEvent } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ForwardIcon } from "../../Icons";
import { SelectChangeEvent } from "@mui/material";

import { COLORS } from "../../globalStyle";
import { CustomeSelect, DropDownContainer } from "./style";

interface SelectProps<T> {
  getDropDownValue: (e: string) => void;
  data: string[];
}

const DropDown = <T,>({ getDropDownValue, data }: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [val, setVal] = useState<any>("Top Headlines");

  const handleClick = (value: string) => {
    getDropDownValue(value);
    setVal(value);
  };

  return (
    <DropDownContainer>
      <FormControl fullWidth>
        <CustomeSelect
          defaultValue={""}
          value={val}
          onClick={() => setIsOpen(!isOpen)}
          fullWidth
          open={isOpen}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: 0.25,
            // color: COLORS.purpleblue,
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
          {data.map((item, i) => {
            return (
              <div key={i} onClick={() => handleClick(item)}>
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              </div>
            );
          })}
        </CustomeSelect>
      </FormControl>
    </DropDownContainer>
  );
};

export default DropDown;
