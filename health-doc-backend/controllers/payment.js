// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-08-01",
// });

// module.exports.createPayment = async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 10 * 100,
//       currency: "inr",
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });

//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// };

const paystack = require("paystack-api")(process.env.PAYSTACK_SECRET_KEY);

module.exports.createPayment = async (req, res) => {
  try{
    const payment = await paystack.page.create({
      name:"Enoch Viewu",
      amount: 10*100, //convert to kobo from cent
      description: "Paystack payment"
    })

    console.log('Payment',payment)
    res.send({
      clientSecret : payment['data']['reference']
    })
  }catch(err){
    return res.status(500).json({ message: err.message });
  }
};
