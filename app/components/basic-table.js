import Component from "@ember/component";

export default Component.extend({
  rows: null,

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
