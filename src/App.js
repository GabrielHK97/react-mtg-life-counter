import "./App.css";
import LifeCounter from "./components/lifeCounter";

function App() {
  let initialLife = 40;
  return (
    <div>
      <div className="background center-content">
      </div>
      <div className="background grid absolute big-font">
        <div className="top-left">
          <div className="content center-content one top-life"><LifeCounter initialLife={initialLife}/></div>
        </div>
        <div className="top-right">
          <div className="content center-content two top-life"><LifeCounter initialLife={initialLife}/></div>
        </div>
        <div className="bottom-left">
          <div className="content center-content three"><LifeCounter initialLife={initialLife}/></div>
        </div>
        <div className="bottom-right">
          <div className="content center-content four"><LifeCounter initialLife={initialLife}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
