import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:guid-file', 'Unit | Controller | guid file', {
    needs: [
        'service:currentUser',
        'service:toast',
        'service:metrics',
    ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
    const controller = this.subject();
    assert.ok(controller);
});
