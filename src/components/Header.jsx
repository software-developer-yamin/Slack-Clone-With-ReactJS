import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input type="search" placeholder="Search" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--stack-color);
  color: white;
`;

const HeaderRight = styled.section`
flex:0.3;
display:flex;
align-items: flex-end;

> .MuiSvgIcon-root {
  margin-left: auto !important;
  margin-right: 30px !important;
}
`;

const HeaderSearch = styled.section`
  flex: 0.4;
  text-align: center;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  display: flex;
  padding: 0 50px;
  align-items: center;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderLeft = styled.section`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto !important;
    margin-right: 30px !important;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
