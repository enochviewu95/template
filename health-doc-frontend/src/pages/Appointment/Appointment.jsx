import Navbar from "../../components/Navbar/Navbar";
import styles from "./Appointment.module.css";
import { Link } from "react-router-dom";
import React from "react";
import {usePaystackPayment} from'react-paystack';

import "react-toastify/dist/ReactToastify.css";

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 55000,
  publicKey: 'pk_test_46b55afe24aca946278128768cd8c90dedce47a8',
  currency:'GHS'
}

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button className={styles.pay} onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Pay GHS 550</button>
      </div>
    );
};


function Appointment() {
  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
        <div className={styles.left_wrapper}>
          <div className={styles.t1}>History</div>
          <div className={styles.docs}>
            <div className={styles.doc1}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
            <div className={styles.doc2}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
            <div className={styles.doc2}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
            <div className={styles.doc2}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
            <div className={styles.doc2}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
          </div>
          <div className={styles.button}>
            <a href="">
              <div className={styles.b}>Create New Record</div>
            </a>
          </div>
          <div className={styles.t1}>Doctors Suggestions</div>
          <div className={styles.docsu}>
            <div className={styles.doc1}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
            <div className={styles.doc2}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
            <div className={styles.doc2}>
              <img src="doc.webp" />
              <div>
                <div className={styles.t2}>Dentist</div>
                <div className={styles.t3}>Dr. Roman Reigns</div>
              </div>
              <div className={styles.date}>&#128197; 20Jan 2023</div>
            </div>
          </div>
        </div>
        <div className={styles.right_wrapper}>
          <div className={styles.doctors_identity}>
            <div className={styles.grid_container2}>
              <img className={styles.img} src="image 7.webp" alt="" />
              <div className={styles.doctors_identity_content}>
                <p className={styles.doctors_identity_content1}>John Wilson</p>
                <p className={styles.doctors_identity_content2}>Physician</p>
                <p className={styles.doctors_identity_content3}>
                  Time : 4:00pm -5:00pm
                </p>
              </div>
            </div>
          </div>
          <div className={styles.appointment_1}>
            <p className={styles.appointment_fee_text}>Appointment Fee</p>
            <p className={styles.appointment_fee}>GHS 500</p>
          </div>
          <div className={styles.appointment_2}>
            <p className={styles.admin_fee_text}>Admin Fee</p>
            <p className={styles.admin_fee}>GHS 50</p>
          </div>
          <div className={styles.appointment_3}>
            <p className={styles.total_fee_text}>Total Fee</p>
            <p className={styles.total_fee}>GHS 550</p>
          </div>
          {/* <StripeCheckout
            stripeKey="pk_test_51MvIxBSBOxWp4pAyGoeweYV6l1WI83qkno8SGJSeNd63fgm58e1bCYByxQRS8w2TUnYgFxHm8Zei09dsYMqXdNQV00XMjZBEgg"
            token={handletoken}
            amount={500 * 100}
            name="MedifyMe"
            billingAddress
            shippingAddress
          > */}
          {/* <Link to="/checkout">
            <div className={styles.pay}>Pay GHS 550</div>
          </Link> */}
             <PaystackHookExample/>
          {/* </StripeCheckout> */}
        </div>
      </div>
    </>
  );
}

export default Appointment;
