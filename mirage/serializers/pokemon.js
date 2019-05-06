import { JSONAPISerializer } from "ember-cli-mirage";

export default JSONAPISerializer.extend({
  init() {
    this._super(...arguments);
    this.include = ["moves"];
  }
});
