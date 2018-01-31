import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';

import { getAuthUrl } from '../utils/auth';

/**
 * @module ember-osf
 * @submodule mixins
 */

/**
 * Controller mixin to add support for OAuth2 token based authentication
 *
 * Intended to be used in tandem with OsfTokenLoginRouteMixin
 *
 * @class OsfTokenLoginControllerMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({
    session: service(),
    actions: {
        login() {
            window.location = getAuthUrl(window.location);
        },
        loginSuccess() {},
        loginFail() {},
    },
});
