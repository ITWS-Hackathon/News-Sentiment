import ReactWordcloud from 'react-wordcloud';
import words from './test.json';

const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    scale: "sqrt",
    fontSizes: [5, 60]
};

function WC() {
    return(
        <div style={{width: "100vh", height: "66vh"}}>
            <ReactWordcloud words={words} options={options} size={[400, 300]}/>
        </div>
    );
}

export default WC;