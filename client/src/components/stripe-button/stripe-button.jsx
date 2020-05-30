import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const Publishablekey = 'pk_test_bJbNlPTx8sNmZlZndjOj2MiT0005PiSTOV';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment Success');
      })
      .catch(err => {
        console.log(`Error on payment ${err}`);
        alert('There was an issue with your payment');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description={`Your Total is ${price}`}
      panelLabel="Pay Now"
      stripeKey={Publishablekey}
      token={onToken}
      amount={priceForStripe}
    />
  );
};

export default StripeCheckoutButton;
