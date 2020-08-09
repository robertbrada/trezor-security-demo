import React from 'react';
import './App.css';
import styled from 'styled-components';

import Security from './components/Security';

const StepHeadline = styled.div`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 2.5em;
    color: #263238;
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
            <StepHeadline>Secure your Trezor 3/4</StepHeadline>
            <Wrapper>
                <Security />
                <Security />
                <Security />
                <Security />
            </Wrapper>
        </div>
    );
}

export default App;
