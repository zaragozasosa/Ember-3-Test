import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pokemon/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pokemon/delete');
    assert.ok(route);
  });
});
