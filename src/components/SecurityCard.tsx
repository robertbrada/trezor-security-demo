/**
 * Component that tells the user to create a PIN for his Trezor device
 * Component has two main states:
 *   1) Show button to set the PIN
 *   2) PIN was successfully created
 */

import * as React from 'react';
import styled from 'styled-components';
import PinIcon from './svg/PinIcon';
import PinOkIcon from './svg/PinOkIcon';

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
    vertical-align: top;
    max-width: 250px;
`;

const IconWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 75px;
    height: 75px;
    border-radius: 100%;
    border: 3px solid black;
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

const VerticalLine = styled.hr`
    display: block;
    margin-top: 1.2em;
    margin-bottom: 0.4em;
    height: 1px;
    border: 0;
    border-top: 2px solid #eceff1;
`;

type State = {
    pinSet: boolean;
    showPin: boolean;
    pin: number;
};

export class SecurityCard extends React.Component<{}, State> {
    readonly state: State = {
        pinSet: false,
        showPin: false,
        pin: 123456,
    };

    /**
     * Sets the PIN variable and changes component state to 'pin successfully created'
     */
    setPinHandler = () => {
        // TODO set PIN value to this.state.pin
        this.setState({ pinSet: true });
    };

    /**
     * Shows the user PIN which he created
     */
    showPinHandler = () => {
        this.setState({ showPin: true });
    };

    /**
     * Function returns component content depending on the value of pinSet variable
     * @param pinSet says if PIN was successfully
     */
    getContent = (pinSet: boolean) => {
        let icon, headline, description, button;

        // render the content depending on the value of 'pinSet' variable
        if (pinSet) {
            // PIN was created successfully
            icon = <PinOkIcon />;
            headline = 'PIN code created successfully!';
            description = '';
            button = (
                <ShowPinButton type="button" onClick={this.showPinHandler}>
                    View PIN
                </ShowPinButton>
            );
        } else {
            // PIN was not created yet
            icon = <PinIcon />;
            headline = 'Set PIN code';
            description = 'Set a strong PIN to prevent unauthorized access';
            button = (
                <SetPinButton type="button" onClick={this.setPinHandler}>
                    Set PIN
                </SetPinButton>
            );
        }

        return { icon, headline, description, button };
    };

    render() {
        const { pinSet } = this.state;

        // get component's content based on the 'pinSet' value
        const { icon, headline, description, button } = this.getContent(pinSet);

        return (
            <Card>
                <IconWrapper>{icon}</IconWrapper>
                <Headline>{headline}</Headline>
                <Description>{description}</Description>
                <VerticalLine />
                {button}
            </Card>
        );
    }
}

export default SecurityCard;
