import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';

import { getAuthUrl } from '../utils/auth';

/**
 * @module ember-osf
 * @submodule mixins
 */

/**
 * Controller mixin for login based on OSF cookie authentication. Intended to be used in tandem with OsfCookieLoginRoute mixin.
 * This auth method is not available to third-party applications.
 *
 * @class OsfCookieLoginController
 * @extends Ember.Mixin
 */
export default Mixin.create({
    session: service('session'),

    queryParams: ['ticket'],
    ticket: null,

    actions: {
        login() {
            window.location = getAuthUrl(window.location);
        },
        loginSuccess() {},
        loginFail() {},
    },
});
