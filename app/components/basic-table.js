import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  rows: null,

  showFilters: computed("columns", function() {
    return this.columns ? this.columns.isAny("filter") : false;
  }),

  filteredRows: computed("rows", "columns.@each.filterValue", function() {
    let rows = this.model;

    if (rows && this.columns) {
      this.columns.forEach(function(col) {
        if (col.filterValue) {
          rows = rows.filter(function(row) {
            let original = new String(row[col.propertyName]).toLowerCase();
            let search = new String(col.filterValue).toLowerCase();

            return original.indexOf(search) !== -1;
          });
        }
      });
    }

    return rows;
  }),

  didInsertElement() {
    this.set("rows", this.model);
  },

  actions: {
    rowClick(row) {
      if (this.rowClick) {
        this.rowClick(row);
      }
    }
  }
});
