import React from "react";

import mastercardImg from "../images/card/mastercardLogo.png";
import visaImg from "../images/card/visaLogo.png";
import revolutImg from "../images/card/revolutLogo.png";
import { CARD_MASTERCARD, CARD_REVOLUT, CARD_VISA } from "../constants/appConstants";

const MastercardIcon = ({ className }) => <img src={mastercardImg} className={className} alt="mastercard" />;
const VisaIcon = ({ className }) => <img src={visaImg} className={className} alt="visa" />;
const RevolutIcon = ({ className }) => <img src={revolutImg} className={className} alt="revolut" />;


const CardLogo = ({ type, className }) => {
    switch (type) {
        case CARD_MASTERCARD:
            return <MastercardIcon className={className} />
        case CARD_VISA:
            return <VisaIcon className={className} />
        case CARD_REVOLUT:
            return <RevolutIcon className={className} />
        default:
            return <div />;
    }
}

export default CardLogo;