import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | list pokemons", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("should show pokemon as the home page", async function(assert) {
    await visit("/");
    assert.equal(currentURL(), "/pokemons", "should redirect automatically");
  });

  test("should list 10 pokemon.", async function(assert) {
    await visit("/");
    assert.equal(
      this.element.querySelectorAll("tr").length,
      10,
      "should display 10 pokemon"
    );
  });
});
