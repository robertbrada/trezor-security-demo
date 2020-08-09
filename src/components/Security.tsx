import * as React from 'react';
import styled from 'styled-components';
import PinIcon from '../svg/PinIcon';
import PinOkIcon from '../svg/PinOkIcon';

type State = {
    pinSet: boolean;
    showPIN: boolean;
    pin: number;
};

interface StyleProps {
    pinSet: boolean;
}

const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    border: 2px solid;
    margin: 1em auto 0.5em auto;
    padding: 0.5em 1em;
    transition: 0.2s all ease-out;
`;

const SetPinButton = styled(Button)`
    color: #00aa00;
    border-color: #00aa00;
    background-color: white;

    &:hover {
        background-color: #00aa00;
        color: white;
    }
`;

const ShowPinButton = styled(Button)`
    color: black;
    border-color: black;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const SecurityCard = styled.div`
    display: inline-block;
    margin: 20px;
    padding: 20px;
    border: 1px solid #d7d9de;
    background-color: white;
    border-radius: 10px;
    width: 180px;
    height: 240px;
    vertical-align: top;
    max-width: 250px;

    // -webkit-box-shadow: 3px 3px 5px 0px rgba(69, 90, 100, 0.19);
    // -moz-box-shadow: 3px 3px 5px 0px rgba(69, 90, 100, 0.19);
    // box-shadow: 3px 3px 5px 0px rgba(69, 90, 100, 0.19);
`;

const IconWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 3px solid black;
    // border: ${(props: StyleProps) => (props.pinSet ? '3px solid #00aa00' : '3px solid black')};
    display: flex;
    align-items: center;
    margin-bottom: 1.2em;

    & > svg {
        margin: 0 auto;
        display: block;
    }
`;

const Headline = styled.div`
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 0.5em;
`;

const Description = styled.div`
    font-weight: light;
    color: #859096;
`;

const Line = styled.hr`
    display: block;
    margin-top: 1.2em;
    margin-bottom: 0.4em;
    height: 1px;
    border: 0;
    border-top: 2px solid #eceff1;
`;

export class Security extends React.Component<{}, State> {
    readonly state: State = {
        pinSet: false,
        showPIN: false,
        pin: 123456,
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
                    <IconWrapper pinSet={true}>
                        <PinOkIcon />
                    </IconWrapper>
                    <Headline>PIN code created successfully!</Headline>
                    <Line />
                    <ShowPinButton type="button" onClick={this.showPinHandler}>
                        View PIN
                    </ShowPinButton>
                </>
            );
        } else {
            content = (
                <>
                    <IconWrapper pinSet={false}>
                        <PinIcon fill="#000" />
                    </IconWrapper>

                    <Headline>Set your PIN code</Headline>
                    <Description>Set a strong PIN number</Description>
                    <Line />

                    <SetPinButton type="button" onClick={this.setPinHandler}>
                        Set PIN
                    </SetPinButton>
                </>
            );
        }

        return <SecurityCard>{content}</SecurityCard>;
    }
}

export default Security;
