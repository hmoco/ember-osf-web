import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:guid-user/quickfiles', 'Unit | Controller | guid-user/quickfiles', {
    needs: [
        'service:currentUser',
        'service:metrics',
    ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
    const controller = this.subject();
    assert.ok(controller);
});
