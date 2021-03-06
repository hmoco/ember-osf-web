import FactoryGuy from 'ember-data-factory-guy';
import faker from 'faker';

FactoryGuy.define('log', {
    default: {
        date: () => faker.date.past(1),
        // Extracted from Nodelog.actions as of May 24, 2016
        action: () => faker.random.arrayElement([
            'checked_in', 'checked_out', 'file_tag_removed', 'file_tag_added',
            'created_from', 'project_created', 'project_registered', 'project_deleted',
            'node_created', 'node_forked', 'node_removed', 'pointer_created',
            'pointer_forked', 'pointer_removed', 'wiki_updated', 'wiki_deleted',
            'wiki_renamed', 'made_wiki_public', 'made_wiki_private', 'contributor_added',
            'contributor_removed', 'contributors_reordered', 'permissions_updated', 'made_private',
            'made_public', 'tag_added', 'tag_removed', 'edit_title',
            'edit_description', 'updated_fields', 'addon_file_moved', 'addon_file_copied',
            'folder_created', 'file_added', 'file_updated', 'file_removed',
            'file_restored', 'addon_added', 'addon_removed', 'comment_added',
            'comment_removed', 'comment_updated', 'made_contributor_visible', 'made_contributor_invisible',
            'external_ids_added', 'embargo_approved', 'embargo_cancelled', 'embargo_completed',
            'embargo_initiated', 'retraction_approved', 'retraction_cancelled', 'retraction_initiated',
            'registration_cancelled', 'registration_initiated', 'registration_approved', 'prereg_registration_initiated',
            'citation_added', 'citation_edited', 'citation_removed', 'primary_institution_changed',
            'primary_institution_removed',
        ]),
        params: {}, // Correct info from this field will depend on the log type
        // TODO: Figure out node vs originalnode vs linkedNode vs templateNode, and add sample traits with correct values
    },
});
