import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

import CasAuthenticatedRouteMixin from '../mixins/cas-authenticated-route';

export default Route.extend(CasAuthenticatedRouteMixin, {
    currentUser: service('currentUser'),
    beforeModel(transition) {
        this._super(transition);
        this.transitionTo('user-quickfiles', this.get('currentUser').get('currentUserId'));
    },
});
