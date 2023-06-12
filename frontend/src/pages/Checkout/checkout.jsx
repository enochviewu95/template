import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Navbar from "../../components/Navbar/Navbar";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

import styles from "./checkout.module.css";

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  // const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const url = 
  
  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/payments/create_payment_intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className={styles.container}>
      <Navbar />
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
