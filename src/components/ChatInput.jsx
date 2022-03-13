import { Button } from "@mui/material";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) return false;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message ${channelName}`}
        />
        <Button type="submit" hidden onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.footer`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    width: 60%;
    bottom: 30px;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
