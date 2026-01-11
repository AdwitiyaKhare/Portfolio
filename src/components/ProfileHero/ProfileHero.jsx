import ProfileCard from "../ProfileCard/ProfileCard";
import CoreStrengths from "../CoreStrengths/CoreStrengths";
import "./ProfileHero.css";

export default function ProfileHero() {
  return (
    <div className="profile-hero-row">
      <div className="profile-hero-col">
        <ProfileCard />
      </div>

      <div className="profile-hero-col">
        <CoreStrengths />
      </div>
    </div>
  );
}
