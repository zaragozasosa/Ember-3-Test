import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  name: DS.attr(),
  level: DS.attr(),
  type1: DS.attr(),
  type2: DS.attr(),

  moves: DS.hasMany("move"),

  typeLabel: computed("type1", "type2", function() {
    if (this.type2) {
      return [this.type1, "/", this.type2].join("");
    } else {
      return this.type1;
    }
  }),

  movesSortProperties: computed(function() {
    return ["power:desc"];
  }),

  sortedMoves: computed.sort("moves", "movesSortProperties"),

  strongestMove: computed("sortedMoves", function() {
    if (this.sortedMoves.firstObject) {
      return this.sortedMoves.firstObject;
    } else {
      return null;
    }
  })
});
