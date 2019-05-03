import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  row: null,
  column: null,

  value: computed("row", "column", function() {
    var row = this.get("row");
    var column = this.get("column");

    if (row && column && column.propertyName) {
      if (row[column.propertyName]) {
        return row[column.propertyName];
      }
    }

    return null;
  })
});
