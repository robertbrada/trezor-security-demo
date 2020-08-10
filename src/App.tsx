import React from 'react';
import './App.css';
import styled from 'styled-components';
import Logo from './logo.svg';

import SecurityCard from './components/SecurityCard';
import StepCounter from './components/StepCounter';

const LogoWrapper = styled.img`
    position: fixed;
    width: 90px;
    left: 20px;
    top: 20px;
`;

const StepHeadline = styled.div`
    color: #263238;
    font-weight: 500;
    font-size: 22px;
    margin: 2em auto 2em auto;
`;

const Wrapper = styled.div`
    display: flex-inline;
    margin: 0 auto;

    @media (max-width: 1150px) {
        max-width: 600px;
    }

    @media (min-width: 1151px) {
        max-width: 100%;
    }
`;

function App() {
    // set fixed values for step counter (for demo purposes)
    const stepsCount = 4;
    const currentStep = 3;

    return (
        <div className="App">
            <LogoWrapper src={Logo} alt="Trezor Logo" />

            <StepHeadline>{currentStep}. Secure your Trezor</StepHeadline>
            <StepCounter stepsCount={stepsCount} currentStep={currentStep} />

            <Wrapper>
                <SecurityCard />
                <SecurityCard />
                <SecurityCard />
                <SecurityCard />
            </Wrapper>
        </div>
    );
}

export default App;
