import TimeTracker from "./components/TimeTracker";
import TimeContextProvider from "./context/TimeContext";
import "./css/App.css";

const App = () => {
  return (
    <>
      <TimeContextProvider>
        <div
          style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
        >
          <TimeTracker />
        </div>
      </TimeContextProvider>
    </>
  );
};

export default App;
