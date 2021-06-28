import React, { useState } from 'react';
import styled from "styled-components";

const StyledNum = styled.div``;
const StyledUnit = styled.div``;
const StyledName = styled.div``;

function Reading(props) {
    return (
        <div>
            <StyledNum>{props.val}</StyledNum>
            <StyledUnit>{props.unit}</StyledUnit>
            <StyledName>{props.name}</StyledName>
        </div>
    );
}

export default Reading;