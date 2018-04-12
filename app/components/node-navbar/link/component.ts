import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import { tagName, classNames } from '@ember-decorators/component';

@tagName('li')
@classNames('active')
export default class NodeNavbarLink extends Component {
    @service router;

    id: 'string';
    useLinkTo?: boolean;
    destination?: string;
    extraClasses?: string;


    // @computed('destination')
    // get routeName(this: NodeNavbarLink): string {
    //     const dest = this.get('destination');
    //     return `guid-node${dest ? '.' : ''}${dest}`;
    // }
    //
    //
    // @computed('destination')
    // get translatingKey(this: NodeNavbarLink): string {
    //     return `node_navbar.${this.get('destination')}`
    // }
};
