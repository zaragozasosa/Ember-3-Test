import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pokemon/add-move', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pokemon/add-move');
    assert.ok(route);
  });
});
