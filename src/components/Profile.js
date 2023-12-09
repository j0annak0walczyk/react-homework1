import { Details } from "./Details";
import { Logo } from "./Logo";
import { Metrics } from "./Metrics";
import "./Profile.css";

const profileData = {
  followersNumber: "80K",
  followersWhat: "Followers",
  likesNumber: "80,3K",
  likesWhat: "Likes",
  photosNumber: "1,4K",
  photosWhat: "Photos",
};

export const Profile = () => {
  return (
    <div className="blue-background">
      <div className="profile">
        <Logo />
        <Details />
        <div className="profileLine"></div>
        <div className="profile-metrics">
          <Metrics
            number={profileData.followersNumber}
            what={profileData.followersWhat}
          />
          <Metrics
            number={profileData.likesNumber}
            what={profileData.likesWhat}
          />
          <Metrics
            number={profileData.photosNumber}
            what={profileData.photosWhat}
          />
        </div>
      </div>
    </div>
  );
};
