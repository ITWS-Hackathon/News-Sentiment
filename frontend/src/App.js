import "./App.css";
import Navbar from "./components/navbar";
import VisualizationOptions from "./components/keyword-analysis";

function App() {
  return (
    <>
      <Navbar />
      <div className="test">
        <VisualizationOptions></VisualizationOptions>
      </div>
    </>
  );
}

export default App;
