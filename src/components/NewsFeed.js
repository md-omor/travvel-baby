import React from "react";
import styled from "styled-components";

const NewsFeed = () => {
  return (
    <Wrapper>
      <div className="news__feed">
        <h1>NewsFeed</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .news__feed {
    width: 1014px;
  }
`;

export default NewsFeed;
