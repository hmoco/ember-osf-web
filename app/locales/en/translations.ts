/* tslint:disable:object-literal-sort-keys max-line-length */

export default {
    general: {
        OSF: 'OSF',
        share: 'Share',
        embed: 'Embed',
        download: 'Download',
        delete: 'Delete',
        view: 'View',
        edit: 'Edit',
        cancel: 'Cancel',
        revisions: 'Revisions',
        md5: 'MD5',
        date: 'Date',
        sha2: 'SHA2',
        title: 'Title',
        contributors: 'Contributors',
        modified: 'Modified',
        description: 'Description',
        create: 'Create',
        and: 'and',
        more: 'more',
        upload: 'Upload',
        rename: 'Rename',
        move: 'Move',
        name: 'Name',
        size: 'Size',
        version: 'Version',
        downloads: 'Downloads',
        close: 'Close',
        back: 'Back',
        filter: 'Filter',
        revert: 'Revert',
        save: 'Save',
        ellipses: '\u2026',
        warning: 'Warning',
        clipboard_copy: 'Copy to clipboard',
        sort_asc: 'Sort ascending',
        sort_desc: 'Sort descending',
        next: 'next',
        previous: 'previous',
        help: 'help',
    },
    maintenance: {
        line1: 'The site will undergo maintenance between <strong>{{start}} and {{end}}</strong> ({{utc}} UTC).',
        line2: 'Thank you for your patience.',
        title: 'Notice:',
    },
    quickfiles: {
        title: '{{user-name}}\'s Quick Files',
        description: 'Files uploaded here are <b>publicly accessible</b> and easy to share with others using the share link.',
        feedback_dialog_text: 'Tell us what you think of Quick Files',
        transition_auth: 'You must be logged in to view your Quick Files. Redirecting to the login page.',
    },
    feedback: {
        button_text: 'Feedback',
        placeholder: 'Share your feedback',
        follow_up_label: 'Contact me about further opportunities to improve the OSF',
        title: 'Send feedback',
        confirm_button_text: 'Send',
        thank_you: 'Thank you!',
        success: 'Your feedback has been submitted.',
        dismiss: 'Got it',
    },
    file_detail: {
        version: {
            id: 'Version ID',
            title: '(Version: {{version-number}})',
        },
        embed: {
            dynamic: 'Dynamically render iframe with JavaScript',
            direct: 'Direct iframe with fixed height and width',
        },
        tags: 'Tags:',
        toggle: 'Toggle view:',
        delete_file: {
            question: 'Delete file?',
            confirm: 'Are you sure you want to delete <b>{{file-name}}</b>',
        },
        sha2_description: 'SHA-2 is a cryptographic hash function designed by the NSA used to verify data integrity.',
        md5_description: 'MD5 is an algorithm used to verify data integrity.',
        // toast messages
        delete_success: 'File deleted',
        delete_fail: 'Error, unable to delete file',
        save_success: 'File saved',
        save_fail: 'Error, unable to save file',
        mfr_iframe_title: 'Rendering of document',
        add_tag: 'add a tag to enhance discoverability',
    },
    file_browser: {
        loading: 'Loading...',
        delete_multiple: 'Delete multiple',
        download_zip: 'Download as zip',
        drop_placeholder: 'Drop files here to upload',
        drop_reminder: 'Drop file to upload',
        no_files: 'This user has not uploaded any quickfiles',
        share_title: 'Share',
        clipboard_copy: 'Copy to clipboard',
        info: {
            title: 'How to use the file browser',
            upload: '<b>Upload:</b> Single file uploads via drag and drop or by clicking the upload button.',
            select: '<b>Select rows:</b> Click on a row to show further actions in the toolbar. Use Command or Shift keys to select multiple files.',
            folders: '<b>Folders:</b> Not supported; consider an OSF project for uploading and managing many files.',
            open1: '<b>Open files:</b> Click a file name to go to view the file in the OSF.',
            open2: '<b>Open files in new tab:</b> Press Command (Ctrl in Windows) and click a file name to open it in a new tab.',
            download: '<b>Download as zip:</b> Click the Download as Zip button in the toolbar to download all files as a .zip.',
        },
        delete_modal: {
            title: 'Delete "{{selectedItems.firstObject.itemName}}"?',
            title_multiple: 'Delete multiple?',
            body: 'This action is irreversible',
        },
        conflict_modal: {
            title: 'An item named {{textValue}} already exists in this location.',
            keep_info: '"Keep both" will retain both files (and their version histories) in this location.',
            replace_info: '"Replace" will overwrite the existing file in this location. You will lose previous versions of the overwritten file. You will keep previous versions of the moved file.',
            keep_button: 'Keep both',
            replace_button: 'Replace',
        },
        move_modal: {
            title: 'Move file to project',
            move_button: 'Move file',
        },

    },
    dashboard: {
        page_title: 'Home',
        title: 'Dashboard',
        create_new_project_button: 'Create new project',
        quicksearch: {
            search: 'Search your projects',
            other_links: 'Go to <a href="/myprojects/">My Projects</a> to organize your work or <a href="/search/">search</a> the OSF',
            no_results: 'No results found!',
            no_projects: {
                line1: 'You have no projects yet. Create a project with the button on the top right.',
                line2: 'This feature allows you to search and quickly access your projects.',
                preview_alt: 'Preview of a full quick projects screen',
            },
            private_parent: 'Private project / ',
            private_grandparent: 'Private project / Private / ',
        },
        noteworthy: {
            description: 'Discover public projects',
            new_and_noteworthy: 'New and noteworthy',
            failed_noteworthy: 'Failed loading "new and noteworthy" projects',
            most_popular: 'Most popular',
            failed_popular: 'Failed loading "most popular" projects',
            search_more: 'Search for more projects',
            by: 'by',
        },
        meetings: {
            title: 'Hosting a conference or meeting?',
            description: 'Use the OSF for Meetings service to provide a central location for conference submissions.',
            button: 'View meetings',
        },
        preprints: {
            title: 'Browse the latest research',
            description: 'Check out the latest preprints hosted on OSF covering a variety of research areas.',
            button: 'View preprints',
        },
    },
    new_project: {
        header: 'Create new project',
        title_placeholder: 'Enter project title',
        more: 'More',
        affiliation: 'Affiliation',
        remove_all: 'Remove all',
        select_all: 'Select all',
        no_matches: 'No matches found',
        description_placeholder: 'Enter project description',
        template_title: 'Template (optional)',
        template_search_help: 'Start typing to search your projects. Selecting project as template will duplicate its structure in the new project without importing the content of that project.',
        template_placeholder: 'Select a project to use as template',
        success_message: 'New project created successfully!',
        stay_here: 'Keep working here',
        go_to_new: 'Go to new project',
    },
    banners: {
        prereg: {
            description: 'Improve your next study. Enter the Prereg Challenge and you could win $1,000.',
            button: 'Start Prereg Challenge',
        },
    },
    move_to_project: {
        create_new_project: 'Create new project',
        connect_to_existing: 'Connect file to existing OSF project',
        enter_project_title: 'Enter project title',
        new_project_message: 'You have selected to create a new public project for your file. Users will still have access to your file unless the project becomes private.',
        choose_project: 'Choose project',
        project_select_message: 'The list of projects appearing are projects and components for which you have write access. Registrations are not included here.',
        no_projects_exist_error: 'You have no available projects. Go back to create a new project.',
        could_not_create_project: 'Could not create project. Please try again.',
        convert_or_copy_message: {
            project: 'Clicking "Move file" will immediately make changes to your OSF project and move your file.',
            component: 'Clicking "Move file" will immediately make changes to your OSF component and move your file.',
        },
        no_longer_public_warning: {
            project: 'Files moved to private projects will no longer be public or discoverable by others.',
            component: 'Files moved to private components will no longer be public or discoverable by others.',
        },
        file_successfully_moved: 'File was moved successfully!',
        could_not_move_file: 'Could not move file. Please try again',
        keep_working_here: 'Keep working here',
        go_to_new_project: 'Go to new project',
        go_to_component: 'Go to component',
        go_to_project: 'Go to project',
    },
    navbar: {
        add: 'Add',
        add_a_preprint: 'Add a {{preprintWords.preprint}}',
        browse: 'Browse',
        cancel_search: 'Cancel search',
        donate: 'Donate',
        go_home: 'Go home',
        my_projects: 'My Projects',
        my_quick_files: 'My Quick Files',
        reviews: 'My Reviewing',
        search: 'Search',
        search_help: 'Search help',
        search_the_OSF: 'Search the OSF',
        send_search: 'Send search query',
        support: 'Support',
        toggle_primary: 'Toggle primary navigation',
        toggle_secondary: 'Toggle secondary navigation',
    },
    auth_dropdown: {
        log_out: 'Log out',
        my_profile: 'My Profile',
        osf_support: 'OSF Support',
        settings: 'Settings',
        sign_up: 'Sign Up',
        sign_in: 'Sign in',
        user_gravatar: 'User gravatar',
        toggle_auth_dropdown: 'Toggle auth dropdown',
    },
    search_help_modal: {
        close: 'Close',
        search_help: 'Search help',
        queries: 'Queries',
        search_uses_the: 'Search uses the ',
        search_syntax: 'search syntax',
        help_description: 'This gives you many options, but can be very simple as well. Examples of valid searches include:',
    },
    support: {
        title: 'Support',
        faq_title: 'Frequently Asked Questions',
        faq_paragraph: 'How can it be free? How will the OSF be useful to my research? What is a registration? Get your questions about the Open Science Framework answered on our ',
        faq_link_text: 'FAQ page.',
        faq_button: 'Visit FAQ',
        guides_title: 'OSF Guides',
        guides_paragraph_1: 'Learn how to use the OSF for improving your research workflow. Read our ',
        guides_link_text: 'Guides',
        guides_paragraph_2: 'for step-by-step screenshots that show you the basics of project structures, version control, privacy, files, add-on support, and more!',
        guides_button: 'Visit Guides',
        contact_title: 'Get in Touch',
        contact_technical: 'For emails about technical support:',
        contact_questions: 'For all other questions or comments',
        prereg_title: 'Do you have Prereg Challenge related questions?',
        prereg_paragraph_1: 'Check out our ',
        prereg_link_text: 'Prereg section',
        prereg_paragraph_2: ' on the cos.io website.',
        status_title: 'Are you experiencing downtime with our services?',
        status_paragraph_1: 'Check out our',
        status_link_text: 'status page',
        status_paragraph_2: 'for updates on how our services are operating.',
        consultation_title: 'Are you looking for statistics consultations?',
        consultation_paragraph: 'COS provides statistics consultation. To learn more about this service visit the',
        consultation_link_text: 'COS statistics consulting page.',
        social_title: 'Other ways to get help',
        social_twitter: 'Ask us a question on twitter',
        social_mailing: 'Join our mailing list',
        social_facebook: 'Follow us on Facebook',
        social_github: 'Connect with COS on GitHub',
    },
    not_found: {
        title: 'Page not found',
        body: 'The requested resource could not be found. If this should not have occurred and the issue persists, please report it to <a href="mailto:{{supportEmail}}">{{supportEmail}}</a>',
    },
    zoom_to_guid: {
        title: 'Zoom to a GUID within this app',
        zoom: 'Zoom!',
        placeholder: 'Enter a GUID',
    },
    osf_mode_footer: {
        dev_mode: 'This site is running in development mode.',
    },
};
