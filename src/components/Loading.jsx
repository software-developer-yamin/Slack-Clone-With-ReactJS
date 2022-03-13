import Spinner from "react-spinkit";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingContents>
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </LoadingContents>
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const LoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
