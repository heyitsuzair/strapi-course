const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async exampleAction(ctx) {
    try {
      const add_order = await strapi.entityService.create("api::order.order", {
        data: ctx.request.body,
      });
      ctx.body = "Order Added!";
    } catch (err) {
      ctx.body = err;
    }
  },
}));
