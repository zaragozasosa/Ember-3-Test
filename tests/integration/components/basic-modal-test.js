import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | basic-modal", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("modalOpen", true);

    await render(hbs`{{basic-modal}}`);

    assert.equal(this.element.textContent.trim(), "");

    await render(hbs`
      <BasicModal @modalOpen={{modalOpen}}>
        template block text
      </BasicModal>
    `);

    assert.ok(
      this.element.textContent.trim().indexOf("template block text") !== -1
    );
  });
});
