import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import styled from "styled-components";

function Chat() {
  return (
    <ChatContainer>
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
