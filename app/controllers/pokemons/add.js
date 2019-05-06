import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  pokemonTypes: computed(function() {
    return [
      "Grass",
      "Fire",
      "Electric",
      "Rock",
      "Ground",
      "Ice",
      "Ghost",
      "Psychic",
      "Water",
      "Normal",
      "Flying",
      "Fighting",
      "Dragon",
      "Bug"
    ];
  }),

  validateForm(form) {
    let validate = {
      valid: false,
      error: null
    };

    if (!form.name) {
      validate.error = "The name is required.";
      return validate;
    } else if (!form.level) {
      validate.error = "The level is required.";
      return validate;
    } else {
      validate.valid = true;
      return validate;
    }
  },

  actions: {
    savePokemon() {
      let form = this.model;
      let validate = this.validateForm(form);
      if (validate.valid) {
        let newPokemon = this.store.createRecord("pokemon", {
          name: form.name,
          type1: form.type1,
          type2: form.type2,
          level: form.level
        });

        newPokemon.save().then(
          function() {
            this.transitionToRoute("pokemons");
          }.bind(this)
        );
      } else {
        this.set("errors", validate.error);
      }
    },

    close() {
      this.transitionToRoute("pokemons");
    }
  }
});
