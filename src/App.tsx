import React from 'react';
import './App.css';
import styled from 'styled-components';
import Logo from './logo.svg';

import SecurityCard from './components/SecurityCard/SecurityCard';

const StepHeadline = styled.div`
    color: #263238;
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 1.5em;
`;

const Wrapper = styled.div`
    display: flex-inline;
    margin: 0 auto;

    @media (max-width: 1100px) {
        max-width: 600px;
    }

    @media (min-width: 1101px) {
        max-width: 100%;
    }
`;

const LogoWrapper = styled.img`
    position: fixed;
    width: 110px;
    left: calc(50% - 55px);
    top: 25px;
`;

function App() {
    return (
        <div className="App">
            <LogoWrapper src={Logo} alt="Trezor Logo" />
            <Wrapper>
                <StepHeadline>Secure your Trezor 3/4</StepHeadline>
                <SecurityCard />
                <SecurityCard />
                <SecurityCard />
                <SecurityCard />
            </Wrapper>
        </div>
    );
}

export default App;
