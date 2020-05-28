import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const Publishablekey = 'pk_test_bJbNlPTx8sNmZlZndjOj2MiT0005PiSTOV';

  const onToken = token => {
    console.log('StripeCheckoutButton -> token', token);
    alert('payment success');
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
