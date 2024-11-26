import ProfileCard from "./ProfileCard"
import StatCard from "./StatCard"
import data from "../assets/data.json"

const TimeTracker = () => {
  return (
    <div className="time-tracker">
      <div className="time-div">
        <ProfileCard />
      {
            data.map((activity) => {
                return <StatCard key={activity.title} activity={activity} />
            })
        }
      </div>
    </div>
  )
}

export default TimeTracker