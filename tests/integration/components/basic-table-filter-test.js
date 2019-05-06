import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | basic-table-filter", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("col", { title: "Label", filterValue: null });

    await render(hbs`{{basic-table-filter}}`);

    assert.equal(this.element.textContent.trim(), "");

    await render(hbs`
      <BasicTableFilter @column={{col}} />
    `);

    assert.equal(this.element.querySelectorAll("input").length, "1");
    assert.equal(this.element.querySelectorAll("label").length, "1");
  });
});
