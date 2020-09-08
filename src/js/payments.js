import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY, BASE_URL, PRICE_ID } from "../env";

const buyNowListener = () => {
  const heroBuyButton = document.getElementById("hero-buy");
  heroBuyButton.addEventListener("click", () => {
    loadStripe(STRIPE_PUBLISHABLE_KEY).then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: PRICE_ID, // Replace with the ID of your price
              quantity: 1,
            },
          ],
          mode: "payment",
          successUrl: `${BASE_URL}/success.html`,
          cancelUrl: `${BASE_URL}/cancel.html`,
        })
        .catch((err) => console.log(err));
    });
  });
};

export { buyNowListener };
