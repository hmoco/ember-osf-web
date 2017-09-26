import Ember from 'ember';

export default Ember.Controller.extend({
    title: Ember.computed('model.givenName', function() {
        return `${this.get('model.givenName')}'s Quick Files`;
    }),
    actions: {
        openFile(file) {
            if (file.get('guid')) {
                this.transitionToRoute('file-detail', file.get('guid'));
            } else {
                window.location = `/file_redirect${file.get('path')}`;
            }
        }
    }
});
