
import React, { useState } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
// import BotomBar from './../components/BottoBar/botomNavbar'
export default function Wallet({ initialCardNumber, initialCardExpiry, initialCVC, changeFunction }) {

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();

    const [cardNumber, setCardNumber] = useState(initialCardNumber);
    const [cardExpiry, setCardExpiry] = useState(initialCardExpiry);
    const [cardCVC, setCardCVC] = useState(initialCVC);

    return (
        <div className="wallet">
            <div className="bod">
                <div {...wrapperProps}>
                    <input {...getCVCProps({ onChange: changeFunction })} value={cardCVC} style={{ backgroundColor: 'white', borderRadius: '5px', width: 67, height: 30, fontSize: 20, marginLeft: 210, border: 'none', outline: 'none' , marginTop: 10 }} />
                    <input {...getCardNumberProps({ onChange: changeFunction })} value={cardNumber}
                        style={{ border: 'none', outline: 'none', fontSize: 27, backgroundColor: 'white', borderRadius: '5px', width: '100%', marginTop: 30, marginBottom: 30 }} />
                    <input {...getExpiryDateProps({ onChange: changeFunction })} value={cardExpiry} style={{ backgroundColor: 'white', borderRadius: '10px', width: 80, height: 30, fontSize: 20, border: 'none', outline: 'none', }} />
                    <svg {...getCardImageProps({ images })} style={{ width: 50, height: 30, marginLeft: 136 }} />
                </div>
            </div>

        </div>



    );
}