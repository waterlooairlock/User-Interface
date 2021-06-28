import React, { useState } from 'react';
import styled from "styled-components";
import Reading from './Reading';

function ReadingBlock(tempVal, pressureVal, airQualVal) {
    return (
        <div>
            <Reading val={tempVal} unit={"°C"} name={"Temperature"}/>
            <Reading val={pressureVal} unit={"kPa"} name={"Pressure"}/>
            <Reading val={airQualVal} unit={""} name={"Air Quality"}/>
        </div>
    );
}

export default ReadingBlock;