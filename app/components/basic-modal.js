import Component from "@ember/component";

export default Component.extend({
  modalOpen: false,
  modelX: null,
  title: null,
  errors: null,
  submitText: "Save",

  actions: {
    submitModal() {
      this.submit();
    },

    closeModal() {
      this.setProperties({
        modalOpen: false,
        modelX: null,
        title: null,
        errors: null
      });
      this.close();
    }
  }
});
