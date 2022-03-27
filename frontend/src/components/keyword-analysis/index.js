import React, { useState } from "react";
import { ButtonGroup, Card, ToggleButton } from "react-bootstrap";
import styled from "styled-components";

const VisCard = styled(Card)`
  width: 18rem;
`;

// https://react-bootstrap.netlify.app/components/buttons/#checkbox--radio
function VisualizationOptions() {
  const [radioValue, setRadioValue] = useState();

  const radios = [
    { name: "Word Cloud", value: "1" },
    { name: "Sentiment Analysis", value: "2" },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-info"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
              console.log(radioValue);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <VisCard>
        {radioValue === undefined && (
          <VisCard.Img
            variant="top"
            src="https://camo.githubusercontent.com/320200a189d246d6615b46ad2d6ed8125927c1fba8e341132deb630a12dd7ea7/687474703a2f2f696d736b792e6769746875622e696f2f686f6c6465722f696d616765732f686f6c6465725f6c6176612e706e67"
          />
        )}
        {radioValue === "1" && (
          <VisCard.Img
            variant="top"
            src="https://camo.githubusercontent.com/7900ca3227df27367ce5c62c38f34142d95017f6117800bc2422c03d9c2a825c/687474703a2f2f696d736b792e6769746875622e696f2f686f6c6465722f696d616765732f686f6c6465725f736b792e706e67"
          />
        )}
        {radioValue === "2" && (
          <VisCard.Img
            variant="top"
            src="https://camo.githubusercontent.com/8938032207ed09ce71e38a8e6b06b8f08c9dcf63b8ab132d824998d100f466f4/687474703a2f2f696d736b792e6769746875622e696f2f686f6c6465722f696d616765732f686f6c6465725f76696e652e706e67"
          />
        )}
      </VisCard>
    </>
  );
}

export default VisualizationOptions;
