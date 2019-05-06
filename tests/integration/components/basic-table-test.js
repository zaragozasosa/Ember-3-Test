import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | basic-table", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("rows", [{ name: "test", type: "test" }]);
    this.set("columns", [
      { propertyName: "name", title: "Name" },
      { propertyName: "type", title: "Type" }
    ]);

    await render(hbs`{{basic-table}}`);

    assert.equal(
      this.element.textContent.trim(),
      "There are no available rows to show."
    );

    await render(hbs`
      <BasicTable @model={{rows}} @columns={{columns}} />
    `);

    assert.equal(this.element.querySelectorAll("table").length, "1");
    assert.equal(this.element.querySelectorAll("tr.data-row").length, "1");
  });
});
