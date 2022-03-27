import ReactWordcloud from 'react-wordcloud';
import words from './test.json';

const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
};

function WC() {
    return(
        <ReactWordcloud words={words} options={options} />
    );
}

export default WC;