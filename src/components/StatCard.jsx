/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";
import dotsSvg from "../assets/images/icon-ellipsis.svg";

/* eslint-disable no-unused-vars */
const StatCard = ({ activity }) => {
  const { time } = useContext(TimeContext);
  console.log(time);

  return (
    <div
      className={`stat-card-container ${activity.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <div
        className={`stat-card ${activity.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <h3 className="stat-card-title">
          {activity.title} <img src={dotsSvg} alt="" />{" "}
        </h3>
        <h2 className="current-hours">
          {activity.timeframes[time].current}hrs
        </h2>
        <small className="previous-hours">
          last week-{activity.timeframes[time].previous}hrs
        </small>
      </div>
    </div>
  );
};

export default StatCard;
