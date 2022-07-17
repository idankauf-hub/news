import React, { useState, useEffect, ChangeEvent } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ForwardIcon } from "../../Icons";
import { SelectChangeEvent } from "@mui/material";

import { COLORS } from "../../globalStyle";
import { CustomeSelect, DropDownContainer } from "./style";

interface SelectProps<T> {
  selectedLabel?: string;
  getDropDownValue: (e: T) => void;
  data: T[]; // T = {Icon , title}
  ListElement: ({ item }: { item: T }) => JSX.Element;
  SelectedElement?: ({ item }: { item: T }) => JSX.Element;
}

const DropDown = <T,>({
  selectedLabel,
  getDropDownValue,
  data,
  ListElement,
  SelectedElement = ListElement,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [label, setLabel] = useState<string>(selectedLabel!);

  const handleClick = (value: T) => {
    // setLabel(value)
    getDropDownValue(value);
  };
  const handleChange = (
    event: SelectChangeEvent<any>,
    child: React.ReactNode
  ) => {
    console.log(event);
  };

  return (
    <DropDownContainer>
      <FormControl fullWidth>
        <CustomeSelect
          value={({ item }: any) => <ListElement item={item} />}
          onClick={() => setIsOpen(!isOpen)}
          onChange={handleChange}
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
          native={false}
          renderValue={(value: any) => {
            console.log(value);
            return <ListElement item={value}/>;
          }}
          // value={label}
        >
          {data.map((item: T) => {
            return (
              <div onClick={() => handleClick(item)}>
                <ListElement item={item} />
              </div>
            );
          })}
        </CustomeSelect>
      </FormControl>
    </DropDownContainer>
  );
};

export default DropDown;
