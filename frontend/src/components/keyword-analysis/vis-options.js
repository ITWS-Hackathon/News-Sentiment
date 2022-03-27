import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

// https://react-bootstrap.netlify.app/components/buttons/#checkbox--radio
function VisualizationOptions() {
  const [radioValue, setRadioValue] = useState('0');

  const radios = [
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-info'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value)
              console.log(radio.value)
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default VisualizationOptions;