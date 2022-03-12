import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useRef,useEffect } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../features/rooms/roomSlice";
import { db } from "../firebase";
import ChatInput from "./ChatInput";
import Message from "./Message";

function Chat() {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [roomId,loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
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

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelId={roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      )}
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
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

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
