import React from 'react';
import styled from "styled-components";

const StyledNumContainer = styled.div`
  background: #2d2d2d;
  height: 250px;
  width: 250px;
  border-radius:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

const StyledVal = styled.div`
  font-size: 100px;
  color: white;
`;

const StyledUnit = styled.div`
  left: -40px;
  position:relative;
  font-size:20px;
`;

const StyledName = styled.div`
  font-size: 20px;
  width:250px;
  color: white;
  text-align: center;
`;

const FlexDiv = styled.div`
  display:flex;
  align-items: flex-end;
`;

const ReadingContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 20px;
`;

function Reading(props) {
    return (
        <ReadingContainer>
            <FlexDiv>
                <StyledNumContainer>
                    <StyledName>{props.name}</StyledName>
                    <StyledVal>{props.val}</StyledVal>
                </StyledNumContainer>
                <StyledUnit>{props.unit}</StyledUnit>
            </FlexDiv>

        </ReadingContainer>
    );
}

export default Reading;