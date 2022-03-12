import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../features/rooms/roomSlice";
import { db } from "../firebase";
import ChatInput from "./ChatInput";

function Chat() {
  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      <>
        <ChatHeader>
          <ChatHeaderLeft>
            <h4>
              <strong>#Room-Name</strong>
            </h4>
            <StarBorderOutlined />
          </ChatHeaderLeft>
          <ChatHeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </ChatHeaderRight>
        </ChatHeader>

        <ChatMessages></ChatMessages>

        <ChatInput channelId={roomId} channelName={roomDetails?.data().name} />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.section`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 60px;
`;

const ChatMessages = styled.main``;

const ChatHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const ChatHeaderLeft = styled.section`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const ChatHeaderRight = styled.section`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
