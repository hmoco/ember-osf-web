import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import OSFAgnosticAuthRouteMixin from '../mixins/osf-agnostic-auth-route';

export default Route.extend(OSFAgnosticAuthRouteMixin, {
    moment: service(),

    beforeModel() {
        this.get('moment').setTimeZone('UTC');

        return this._super(...arguments);
    },
});
