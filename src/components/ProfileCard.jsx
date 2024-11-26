/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";
import profileImage from "../assets/images/image-jeremy.png"

const times = ["daily", "weekly", "monthly"];

const ProfileCard = () => {
  const { time, setTime } = useContext(TimeContext);

  return (
    <div className="profile-card">
      <div className="card-heading">
        <img src={profileImage} className="profileImage" alt="" />
        <p className="report-for">Report for</p>
        <h2 className="person-name">Jeremy Robson</h2>
      </div>
      <ul className="time-type-buttons">
        {times.map((timeType) => {
          return (
            <li key={timeType}>
              <button
                onClick={() => setTime(timeType)}
                style={{
                  color: time === timeType ? "white" : "hsl(236, 100%, 87%)",
                  cursor: "pointer",
                }}
                className="time-buttons"
              >
                {timeType}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileCard;
