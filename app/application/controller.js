import $ from 'jquery';
import Controller from '@ember/controller';
import config from 'ember-get-config';
import pathJoin from '../utils/path-join';
import OSFAgnosticAuthControllerMixin from '../mixins/osf-agnostic-auth-controller';

export default Controller.extend(OSFAgnosticAuthControllerMixin, {
    signupUrl: `${pathJoin(config.OSF.url, 'register')}?${$.param({ next: window.location.href })}`,
});
