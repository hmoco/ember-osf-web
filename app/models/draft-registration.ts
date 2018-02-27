import DS from 'ember-data';
import OsfModel from './osf-model';

/**
 * @module ember-osf-web
 * @submodule models
 */

/**
 * Model for OSF APIv2 draft registrations.
 * This model represents draft registration data and can be accessed as a relationship of a node.
 * For information on how to interact with a node's draft registrations, see:
 * * https://api.osf.io/v2/docs/#!/v2/Node_Draft_Registrations_List_GET
 * * https://api.osf.io/v2/docs/#!/v2/Node_Draft_Registration_Detail_GET
 * @class DraftRegistration
 */
export default class DraftRegistration extends OsfModel.extend({
    registrationSupplement: DS.attr('fixstring'),
    registrationMetadata: DS.attr('object'),
    datetimeInitiated: DS.attr('date'),
    datetimeUpdated: DS.attr('date'),
    branchedFrom: DS.belongsTo('node', {
        inverse: null,
    }),
    initiator: DS.belongsTo('user', {
        inverse: null,
    }),
    registrationSchema: DS.belongsTo('metaschema', {
        inverse: null,
    }),
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
    interface ModelRegistry {
        'draft-registration': DraftRegistration;
    }
}