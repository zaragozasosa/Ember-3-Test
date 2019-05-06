import Route from "@ember/routing/route";
import EmberObject from "@ember/object";

export default Route.extend({
  model() {
    return EmberObject.create({});
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("pokemon", this.modelFor("pokemon"));
  }
});
