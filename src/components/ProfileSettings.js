import styled from "styled-components";
import Avatar from "../assets/Avatar2x.png";
import data from "../data/ProfileSettings.json";

const ProfileSettings = () => {
  return (
    <Wrapper>
      {/* profile seetings start*/}
      <div className="profile__section">
        <div className="profile">
          <div className="profile__pic">
            <img src={Avatar} alt="Avatar" />
            <h5>@janedoe</h5>
          </div>

          {/* followers */}
          <div className="profile__followers">
            <div className="profile__post_count">
              <h4>800 </h4>
              <span>POST</span>
            </div>
            <div className="profile__followers_count">
              <h4>1K </h4>
              <span>FOLLOWERS</span>
            </div>
            <div className="profile__following_count">
              <h4>200 </h4>
              <span>FOLLOWING</span>
            </div>
          </div>
        </div>

        {/* profile other seetings start*/}

        <div className="profile__setings">
          <div className="single__profile_settings">
            {data.profileSidebar.map(({ id, text, icon }) => (
              <div key={id} className="single__profile_se_info">
                <img src={icon} alt="icon" />
                <h5>{text}</h5>
              </div>
            ))}
          </div>
        </div>

        {/* profile other seetings end*/}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .profile__section {
    width: 300px;
    background: #e0e0e0fa;
    padding: 15px 20px;
  }

  .profile__pic {
    text-align: center;
    img {
      width: 70px;
      height: 70px;
    }

    h5 {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      color: #818488;
      mix-blend-mode: normal;
      opacity: 0.7;
      text-align: center;
      margin-top: 30px;
    }
  }

  .profile__followers {
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin-top: 15px;
    h4 {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #231f20;
    }
    span {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 10px;
      color: #818488;
      mix-blend-mode: normal;
      opacity: 0.7;
    }
  }

  .settings {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .profile__setings {
    margin-top: 70px;
  }

  .single__profile_se_info {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      margin-right: 30px;
    }
    h5 {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 18px;
      color: #2c2c2c;
    }
  }
`;

export default ProfileSettings;
