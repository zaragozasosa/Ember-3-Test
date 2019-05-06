import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deletePokemon() {
      let pokemon = this.model;

      pokemon.deleteRecord();
      pokemon.save().then(
        function() {
          this.transitionToRoute("pokemons");
        }.bind(this)
      );
    },

    close() {
      this.transitionToRoute("pokemon");
    }
  }
});
