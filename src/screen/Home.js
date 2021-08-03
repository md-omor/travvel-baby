import React from "react";
import { ProfileSettings, ViewFriends, NewsFeed } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="home">
        <ProfileSettings />
        <NewsFeed />
        <ViewFriends />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .home {
    display: flex;
    width: 1600px;
    margin: auto;
  }
  /* 
  @media screen and (max-width: 414px) {
    .home {
      width: 100%;
      display: block;
    }

    .news__feed {
      width: 100%;
    }
  } */
`;

export default Home;
