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

  actions: {
    addMove() {
      var model = this.model;
    },

    close() {
      this.transitionToRoute("pokemon");
    }
  }
});
