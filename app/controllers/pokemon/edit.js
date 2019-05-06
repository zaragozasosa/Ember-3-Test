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

  modelCopy: computed("model", function() {
    let copy = {
      name: this.model.name,
      level: this.model.level,
      type1: this.model.type1,
      type2: this.model.type2
    };
    return copy;
  }),

  actions: {
    editPokemon() {
      let newData = this.modelCopy;
      let pokemon = this.model;

      pokemon.setProperties({
        name: newData.name,
        level: newData.level,
        type1: newData.type1,
        type2: newData.type2
      });

      pokemon.save();
      this.transitionToRoute("pokemon");
    },

    close() {
      this.transitionToRoute("pokemon");
    }
  }
});
