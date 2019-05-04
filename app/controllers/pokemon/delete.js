import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  actions: {
    deletePokemon() {
      var pokemon = this.model;
      pokemon.destroyRecord();
      this.transitionToRoute("pokemons");
    },

    close() {
      this.transitionToRoute("pokemon");
    }
  }
});
