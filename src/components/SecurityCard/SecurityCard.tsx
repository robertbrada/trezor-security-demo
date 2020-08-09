import * as React from 'react';
import styled from 'styled-components';
import PinIcon from '../../svg/PinIcon';
import PinOkIcon from '../../svg/PinOkIcon';

type State = {
    pinSet: boolean;
    showPIN: boolean;
    pin: number;
};

interface StyleProps {
    pinSet: boolean;
}

const Button = styled.button`
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
    background-color: white;
    border-color: #00aa00;

    &:hover {
        color: white;

        background-color: #00aa00;
    }
`;

const ShowPinButton = styled(Button)`
    color: black;
    background-color: white;
    border-color: black;

    &:hover {
        color: white;
        background-color: black;
    }
`;

const Card = styled.div`
    display: inline-block;
    margin: 20px;
    padding: 25px 15px;
    border: 1px solid #d7d9de;
    background-color: white;
    border-radius: 10px;
    width: 195px;
    // height: 280px;
    vertical-align: top;
    max-width: 250px;

    // -webkit-box-shadow: 3px 3px 5px 0px rgba(69, 90, 100, 0.19);
    // -moz-box-shadow: 3px 3px 5px 0px rgba(69, 90, 100, 0.19);
    // box-shadow: 3px 3px 5px 0px rgba(69, 90, 100, 0.19);
`;

const IconWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 75px;
    height: 75px;
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
    font-size: 18px;
    margin-bottom: 0.6em;
`;

const Description = styled.div`
    color: #859096;
    font-weight: light;
`;

const Line = styled.hr`
    display: block;
    margin-top: 1.2em;
    margin-bottom: 0.4em;
    height: 1px;
    border: 0;
    border-top: 2px solid #eceff1;
`;

export class SecurityCard extends React.Component<{}, State> {
    readonly state: State = {
        pinSet: false,
        showPIN: false,
        pin: 123456,
    };

    setPinHandler = () => {
        this.setState({ pinSet: true });
    };

    showPinHandler = () => {
        this.setState({ showPIN: true });
    };

    render() {
        // declare variables that we will use
        const { pinSet } = this.state;
        let icon, headline, description, button;

        if (pinSet) {
            // set the variable values in case the PIN was created successfully
            icon = <PinOkIcon />;
            headline = 'PIN code created successfully!';
            description = '';
            button = (
                <ShowPinButton type="button" onClick={this.showPinHandler}>
                    View PIN
                </ShowPinButton>
            );
        } else {
            // set the variable values for the case that PIN was not created yet
            icon = <PinIcon />;
            headline = 'Set PIN code';
            description = 'Set a strong PIN to prevent unauthorized access';
            button = (
                <SetPinButton type="button" onClick={this.setPinHandler}>
                    Set PIN
                </SetPinButton>
            );
        }

        return (
            <Card>
                <>
                    <IconWrapper pinSet={pinSet}>{icon}</IconWrapper>
                    <Headline>{headline}</Headline>
                    <Description>{description}</Description>
                    <Line />
                    {button}
                </>
            </Card>
        );
    }
}

export default SecurityCard;
