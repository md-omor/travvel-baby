import React from "react";
import styled from "styled-components";
import data from "../data/ProfileSettings.json";

const ViewFriends = () => {
  return (
    <Wrapper>
      <div className="friend__section">
        <div className="friends__router_btn">
          <button>SUGGESTED BABIES</button>
          <button>SUGGESTED TRIPS</button>
        </div>

        <div className="suggested__friend">
          {data.viewFriends.map(({ id, female, name, follows, icons }) => (
            <div key={id} className="suggested__single_friend">
              <div className="follow__img_name">
                <div className="follows__img">
                  <img src={female} alt="female" />
                </div>
                <div className="follows__name">
                  <span>{name}</span>
                  <p>{follows}</p>
                </div>
              </div>

              <div className="follows__icon">
                <img src={icons} alt="icons" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .friend__section {
    width: 286px;
  }

  .friends__router_btn {
    margin-top: 50px;
    border-bottom: 1px solid #d3d6d6;
    button {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 11px;
      color: #a5a7aa;
      border: none;
      border-bottom: 3px solid #b76e79;
      margin-right: 15px;
      padding: 17px 1px;
      cursor: pointer;
    }
  }
  .suggested__friend {
    padding: 14px 0;
  }

  .suggested__single_friend {
    display: flex;
    align-items: center;
    height: 75px;
    border-bottom: 1px solid #d3d6d6;
    justify-content: space-between;
  }

  .follow__img_name {
    display: flex;
    align-items: center;
  }

  .follows__img {
    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .follows__name {
    span {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      color: #2c2c2c;
    }
    p {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 11px;
      color: #818488;
      margin-top: 5px;
      margin: 0 0 8px 0;
    }
  }

  .follows__icon {
    border: 1px solid #b76e79;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 7px 16px;
    cursor: pointer;
  }
`;

export default ViewFriends;
