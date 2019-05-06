import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | basic-table-cell", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("column", { propertyName: "name" });
    this.set("row", { name: "test" });

    await render(hbs`{{basic-table-cell}}`);

    assert.equal(this.element.textContent.trim(), "");

    await render(hbs`
      <BasicTableCell @column={{column}} @row={{row}} />
    `);

    assert.equal(this.element.textContent.trim(), this.get("row.name"));
  });
});
