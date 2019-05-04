export default function() {
  this.namespace = "api";

  this.get("/pokemons");
  this.get("/pokemons/:id");
  this.post("/pokemons");

  this.del("/pokemons/:id", (schema, request) => {
    let pokemon = schema.pokemons.find(request.params.id);

    pokemon.moves.destroy();
    pokemon.destroy();
  });
}
