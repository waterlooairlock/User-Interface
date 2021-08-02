import React from 'react';
import styled from "styled-components";
import Reading from './Reading';
import Box from '@material-ui/core/Box';


const StyledReadingsContainer = styled.div`
  display:flex;
`;

function ReadingBlock(props) {
    return (
        <StyledReadingsContainer>
            <Reading val={props.tempVal} unit={"°C"} name={"Temperature"}/>
            <Reading val={props.pressureVal} unit={"kPa"} name={"Pressure"}/>
            <Reading val={props.airQualVal} unit={""} name={"Air Quality"}/>
        </StyledReadingsContainer>
    );
}

export default ReadingBlock;