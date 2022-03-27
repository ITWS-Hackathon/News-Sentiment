import "./App.css";
import Navbar from "./components/navbar";
import KeywordInput from "./components/keyword-analysis";
import VisualizationOptions from "./components/keyword-analysis/vis-options";

function App() {
  return (
    <>
      <Navbar />;
      <div className="test">
        <VisualizationOptions></VisualizationOptions>
        <KeywordInput></KeywordInput>
      </div>
    </>
  );
}

export default App;
