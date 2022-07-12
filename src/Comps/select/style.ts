import styled from "styled-components";

import { COLORS } from "../../globalStyle";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const DropDownContainer = styled(Box)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 16px;
position: absolute;
width: 138.93px;
height: 40px;
right: 21.07px;
top: 5px;
`;

export const CustomeSelect = styled(Select)`
width: 138.93px;
height: 40px;
`;