import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  pokemon: null,

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
      let newMove = this.model;
      let pokemon = this.pokemon;

      let move = this.store.createRecord("move", {
        pokemon: pokemon,
        name: newMove.name,
        type: newMove.type,
        power: newMove.power
      });

      move.save().then(
        function() {
          this.transitionToRoute("pokemon");
        }.bind(this)
      );
    },

    close() {
      this.transitionToRoute("pokemon");
    }
  }
});
