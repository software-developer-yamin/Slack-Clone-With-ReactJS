import { Button } from "@mui/material";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const SignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <h1>Sign in to the DeveloperYamin</h1>
        <p>developer.yamin.com</p>

        <Button onClick={SignIn}>Sign In With Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.section`
  display: grid;
  background-color: #f8f8f8;
  height: 100vh;
  place-items: center;
`;

const LoginInnerContainer = styled.main`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    background-color: #0a8d48 !important;
    text-transform: inherit !important;
    color: white;
  }
`;
