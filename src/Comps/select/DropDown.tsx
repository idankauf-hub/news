import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ForwardIcon } from "../../Icons";

import { COLORS } from "../../globalStyle";
import { CustomeSelect, DropDownContainer } from "./style";

interface Data {
  value: string | number;
  Icon?: () => JSX.Element;
}

interface SelectProps {
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  data?: Data[];
  element?: () => JSX.Element;
}

// data =[{Icon,title} ,{..}] //getting an object of anything
// const Item = (item)=>{
//   return <div><Icon/><p>{item.title}</p><Icon/></div> // getting a Jsx element
// }
// const onClick=(item)=>{
//   console.log(item.Icon)
// }

const DropDown: React.FC<SelectProps> = ({
  placeholder = "search",
  onClick,
  data,
  element,
}) => {
  console.log(data);

  return (
    <DropDownContainer>
      <FormControl fullWidth>
        <CustomeSelect
          fullWidth
          displayEmpty
          sx={{
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: 0.25,
            color: COLORS.purpleblue,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
          IconComponent={ForwardIcon}
          // value={age}
          // onChange={handleChange}
        >
          {/* {data.map(item=><Item item={item}/>) } */}
          {data?.map((item) => (
            <MenuItem value={item.value}>
              {item.Icon }
            </MenuItem>
          ))}

          {/* <MenuItem value={10}>
            <p>Ten</p>
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </CustomeSelect>
      </FormControl>
    </DropDownContainer>
  );
};

export default DropDown;
