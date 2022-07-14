import React, {useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ForwardIcon } from "../../Icons";

import { COLORS } from "../../globalStyle";
import { CustomeSelect, DropDownContainer } from "./style";

interface SelectProps<T> {
  selectedLabel?: string;
  getDropDownValue: (e: T) => void;
  data: T[]; // T = {Icon , title}
  ListElement: ({ item }: { item: T }) => JSX.Element;
  // SelectedElement?: ({item}:{item:T}) => JSX.Element;
}



const DropDown = <T,>({
  selectedLabel,
  getDropDownValue,
  data,
  ListElement,
}: // SelectedElement = ListElement
SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [label, setLabel] = useState<string>(selectedLabel);
  const handleClick = (value:T) => {
    console.log(value)
    // setLabel(value)
    getDropDownValue(value);
  };

  return (
    <DropDownContainer>
      <FormControl fullWidth>
        <CustomeSelect
          onClick={()=>setIsOpen(!isOpen)}
          fullWidth
          displayEmpty
          open={isOpen}
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
          // onChange={() => handleChange}
          value={selectedLabel}
        >
          {data.map((item:T) => {
            return (
              <div onClick={() => handleClick(item)}>
                <ListElement item={item}></ListElement>
              </div>
            );
          })}
        </CustomeSelect>
      </FormControl>
    </DropDownContainer>
  );
};

export default DropDown;
