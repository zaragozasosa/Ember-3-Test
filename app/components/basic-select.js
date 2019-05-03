import Component from "@ember/component";

export default Component.extend({
  value: null,
  nullOption: false,
  options: null,

  didInsertElement() {
    if (!this.nullOption && !this.value && this.options.length) {
      this.set("value", this.options[0]);
    }
  },

  actions: {
    changeSelection(val) {
      this.set("value", val);
    }
  }
});
