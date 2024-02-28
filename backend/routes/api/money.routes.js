const router = require('express').Router();
const { YooCheckout } = require('@a2seven/yoo-checkout');

router.get('/', async (req, res) => {
  const { mer, price, inputPhoneUser, inputNameUser } = req.query;
  const checkout = new YooCheckout({
    shopId: '203647',
    secretKey: 'test_cpwNwGhf9MghNH-qkR5NHvecN7zkZuUKZWdvhkXo4KQ',
  });
  const data = new Date().getMilliseconds()

  const idempotenceKey = `Jajw-dw1-${data}`;

  const createPayload = {
    amount: {
      value: price,
      currency: 'RUB',
    },
    payment_method_data: {
      type: 'bank_card',
    },
    confirmation: {
      type: 'redirect',
      return_url: 'http://localhost:3000/',
    
    },
    description: `${inputNameUser} ${inputPhoneUser} ${mer}`,
  };

  try {
    const payment = await checkout.createPayment(createPayload, idempotenceKey);
    res.redirect(payment.confirmation.confirmation_url);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
