import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.section`
display:flex;
align-items:center;
padding:20px;

> img {
     height: 50px;
     border-radius: 8px;
     object-fit: contain;
}
`;
const MessageInfo = styled.div`
padding-left: 10px;

> h4 > span {
     font-weight: 300;
     color: gray;
     font-size: 10px;
     margin-left: 4px;
}
`;
