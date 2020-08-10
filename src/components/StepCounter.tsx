/**
 * A component which shwos the user current step in the Trezor setup process
 */

import React from 'react';
import styled from 'styled-components';

// component props
interface Props {
    stepsCount: number;
    currentStep: number;
}

// props used to dynamically change CSS
interface StyleProps {
    renderingStep: number;
    currentStep: number;
}

// styled components
const StepsContainer = styled.ul`
    margin: 1em auto;
    display: block;
    list-style: none;
    padding: 0;
`;

const StepItem = styled.li`
    width: 22px;
    height: 22px;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    margin: 1em;
    padding: 0.4em;
    border-radius: 500px;
    background-color: ${(props: StyleProps) => (props.renderingStep <= props.currentStep ? '#00aa00' : 'white')};
    color: ${(props: StyleProps) => (props.renderingStep <= props.currentStep ? 'white' : 'black')};
    border: ${(props: StyleProps) => (props.renderingStep === props.currentStep ? '7px solid #9fde85' : 'none')};

    @media (max-width: 589px) {
        width: 19px;
        height: 19px;
        font-size: 16px;
        margin: 0.5em;
    }
`;

const VerticalLine = styled.div`
    width: 70px;
    display: inline-block;
    border-top: 1px solid #bababf;
    vertical-align: super;

    @media (max-width: 1150px) {
        width: 50px;
    }

    @media (max-width: 589px) {
        width: 20px;
    }
`;

const stepCounter = (props: Props) => {
    const { stepsCount, currentStep } = props;

    // convert N to array [1, 2, ..., N]
    const numberArr = Array.from({ length: stepsCount }, (_, index) => index + 1);

    // render steps
    const counter = (
        <StepsContainer>
            {numberArr.map((number) => (
                <span key={number}>
                    <StepItem renderingStep={number} currentStep={currentStep}>
                        {number}
                    </StepItem>
                    {/* do not render tha last vertical line */}
                    {number === stepsCount ? <></> : <VerticalLine />}
                </span>
            ))}
        </StepsContainer>
    );

    return <>{counter}</>;
};
export default stepCounter;
