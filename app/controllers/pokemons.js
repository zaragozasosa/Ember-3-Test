import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  columns: computed(function() {
    return [
      {
        propertyName: `name`,
        title: `Name`,
        filter: true
      },
      {
        propertyName: `typeLabel`,
        title: `Type`,
        filter: true
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
