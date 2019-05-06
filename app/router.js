import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("pokemons", function() {
    this.route("add");
  });
  this.route("pokemon", { path: "pokemon/:pokemon_id" }, function() {
    this.route("delete");
    this.route("add-move");
    this.route("edit");
  });
});

export default Router;
