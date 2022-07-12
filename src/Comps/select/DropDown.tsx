import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ForwardIcon } from "../../Icons";

import { COLORS } from "../../globalStyle";
import { CustomeSelect, DropDownContainer } from "./style";

interface SelectProps {
  placeholder?: string;
  searchFunction: (e: string) => void;
  input: string;
  Icon?: () => JSX.Element;
  //recentSearches:string[]; //last searches per user - local storage
}


const DropDown = () => {

  

  return (
      <DropDownContainer>
        <FormControl fullWidth>
          <CustomeSelect
            fullWidth
            displayEmpty
            sx={{
              alignItems:"center",
              justifyContent: "center",
              fontWeight:500,
              fontSize:14,
              letterSpacing:0.25,
              color:COLORS.purpleblue,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
              }
            }}
            
            IconComponent={ForwardIcon}
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </CustomeSelect>
        </FormControl>
        </DropDownContainer>
  );
};

export default DropDown;
