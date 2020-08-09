import React from 'react';
import './App.css';
import styled from 'styled-components';

import SecurityCard from './components/SecurityCard/SecurityCard';

const StepHeadline = styled.div`
    color: #263238;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 2.5em;
`;

const Wrapper = styled.div`
    display: flex-inline;
    margin: 0 auto;

    @media (max-width: 1090px) {
        max-width: 600px;
    }

    @media (min-width: 1091px) {
        max-width: 100%;
    }
`;

function App() {
    return (
        <div className="App">
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
