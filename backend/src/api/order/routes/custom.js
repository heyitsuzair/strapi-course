// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/order/pre-transaction",
      handler: "custom.exampleAction",
    },
  ],
};
