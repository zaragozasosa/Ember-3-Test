import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr(),
  power: DS.attr(),
  type: DS.attr(),

  pokemon: DS.belongsTo("pokemon")
});
