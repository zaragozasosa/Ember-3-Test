import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | pokemon/add-move', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:pokemon/add-move');
    assert.ok(controller);
  });
});
