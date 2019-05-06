export default function() {
  this.namespace = "api";

  this.get("/pokemons");
  this.get("/pokemons/:id");
  this.post("/pokemons");
  this.put("/pokemons/:id");
  this.patch("/pokemons/:id");
  this.post("/moves");

  this.del("/pokemons/:id", (schema, request) => {
    let pokemon = schema.pokemons.find(request.params.id);

    pokemon.moves.destroy();
    pokemon.destroy();
  });
}
