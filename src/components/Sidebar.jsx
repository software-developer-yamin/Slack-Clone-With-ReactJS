import {
  Add,
  Apps,
  Bookmark,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { db } from "../firebase";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Developer HQ</h2>
          <h3>
            <FiberManualRecord />
            developer.yamin
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={Bookmark} title="Saved items" />
      <SidebarOption Icon={PeopleAlt} title="People & users groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption />
      {channels?.docs.map((doc) => (
        <SidebarOption title={doc.data().name} key={doc.id} id={doc.id} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.section`
  color: white;
  background-color: var(--stack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  margin-top: 60px;
  max-width: 260px;

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    color: #49274b;
    background-color: white;
    padding: 8px;
    font-size: 35px;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.section`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 999;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
