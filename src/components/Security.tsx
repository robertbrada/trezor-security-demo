import * as React from 'react';
import styled from 'styled-components';

type State = {
    pinSet: boolean;
    showPIN: boolean;
    pin: number;
};

const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: green;
    border: 2px solid green;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: green;
        color: white;
    }
`;

const SecurityCard = styled.div`
    display: inline-block;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 10px;
`;

export class Security extends React.Component<{}, State> {
    readonly state: State = {
        pinSet: false,
        showPIN: false,
        pin: 0,
    };

    setPinHandler = () => {
        // TODO set PIN to state variable
        this.setState({ pinSet: true });
    };

    showPinHandler = () => {
        this.setState({ showPIN: true });
    };

    render() {
        const { pinSet } = this.state;
        let content;

        if (pinSet) {
            content = (
                <>
                    <div>PIN code created successfully!</div>
                    <Button type="button" onClick={this.showPinHandler}>
                        View PIN
                    </Button>
                </>
            );
        } else {
            content = (
                <>
                    <div>Set your PIN code</div>
                    <div>Set a strong PIN number</div>
                    <Button type="button" onClick={this.setPinHandler}>
                        Show PIN
                    </Button>
                </>
            );
        }

        return <SecurityCard>{content}</SecurityCard>;
    }
}

export default Security;
