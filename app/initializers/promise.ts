import Application from '@ember/application';
import Ember from 'ember';

export function initialize(application: Application): void {
    window.Promise = Ember.RSVP.Promise

}

export default {
  initialize
};
