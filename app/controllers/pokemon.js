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
        propertyName: `type`,
        title: `Type`
      },
      {
        propertyName: `power`,
        title: `Power`
      }
    ];
  })
});
