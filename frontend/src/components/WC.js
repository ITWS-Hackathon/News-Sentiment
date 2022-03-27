import ReactWordcloud from 'react-wordcloud';
import words from './test.json';

const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
};

function WC() {
    return(
        <div style={{width: 320, height: 240}}>
            <ReactWordcloud words={words} options={options} />
        </div>
    );
}

export default WC;