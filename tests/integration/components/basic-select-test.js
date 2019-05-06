import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | basic-select", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("options", ["one", "two", "three"]);

    await render(hbs`{{basic-select}}`);

    assert.equal(this.element.textContent.trim(), "");

    await render(hbs`
      <BasicSelect @options={{options}} />
    `);

    assert.equal(this.element.querySelectorAll("option").length, "3");
  });
});
