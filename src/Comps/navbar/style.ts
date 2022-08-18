import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import {DisplayCenterRow} from "../../styles/layouts"
export const NavBarContainer = styled(DisplayCenterRow)`
height:74px;
width: 100%;
background-color:${COLORS.darkblue} ;
border: 1px solid ${COLORS.darkblue};
box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
border-radius: 0px;
`;

export const Logo = styled.div`
padding: 0px;
width: 66px;
height: 50px;
top:12px;
bottom: 12px;
padding: 0px 20px;
`;