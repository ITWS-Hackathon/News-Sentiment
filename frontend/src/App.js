import logo from './logo.svg';
import './App.css';
import KeywordInput from './components/keyword-analysis';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisualizationOptions from './components/keyword-analysis/vis-options';

function App() {
  return (
    <div className="test">
      <VisualizationOptions></VisualizationOptions>
      <KeywordInput></KeywordInput>

    </div>
  );
}

export default App;
