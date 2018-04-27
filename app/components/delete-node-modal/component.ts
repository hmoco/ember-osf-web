import Component from '@ember/component';
import defaultTo from 'ember-osf-web/utils/default-to';
import randomScientist from 'ember-osf-web/utils/random-scientist';

export default class DeleteNodeModal extends Component.extend({
    didReceiveAttrs(this: DeleteNodeModal, ...args) {
        this._super(...args);
        this.set('scientistInput', '');
        this.set('scientistName', randomScientist());
    },
}) {
    nodeType: string = defaultTo(this.nodeType, 'project');
    scientistName: string;
    scientistInput: string;
}