"use strict";

/**
 * offer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::offer.offer", ({ strapi }) => ({
  async createAndDelete(ctx) {
    try {
      const idToDelete = ctx.request.params.id;
      const body = ctx.request.body;
      body.data.publishedAt = new Date().getTime();
      console.log(idToDelete);
      console.log(body);
      await strapi.entityService.create("api::offer.offer", body);
      await strapi.entityService.delete("api::offer.offer", idToDelete);
      return { message: "une offre a été créee et une autre supprimée" };
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
}));
