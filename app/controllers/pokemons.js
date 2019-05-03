import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  columns: computed(function() {
    return [
      {
        propertyName: `name`,
        title: `Name`
      },
      {
        propertyName: `typeLabel`,
        title: `Type`
      },
      {
        propertyName: `level`,
        title: `Level`
      }
    ];
  }),

  actions: {
    rowClick(row) {
      this.transitionToRoute("pokemon", row.id);
    }
  }
});
