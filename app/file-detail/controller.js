import Ember from 'ember';


export default Ember.Controller.extend({
    displays: Ember.A([]),
    revision: null,
    currentUser: Ember.inject.service(),

    mfrVersion: Ember.computed('model.file', 'revision', function() {
        return this.get('revision') ? this.get('revision') : this.get('model.file.currentVersion');
    }),

    fileUrl: Ember.computed('model.file', function() {
        return encodeURIComponent(window.location.href);
    }),

    twitterUrl: Ember.computed('model.file', 'fileUrl', function() {
        return 'https://twitter.com/intent/tweet?url=' + this.get('fileUrl') + '&text=' + this.get('model.file.name') + '&via=OSFramework';
    }),

    facebookUrl: Ember.computed('model.file', 'fileUrl', function() {
        return 'https://www.facebook.com/sharer/sharer.php?u=' + this.get('fileUrl');
    }),

    linkedInUrl: Ember.computed('model.file', 'fileUrl', function() {
        return 'https://www.linkedin.com/cws/share?url=' + this.get('fileUrl') + '&title=' + this.get('model.file.name');
    }),

    emailUrl: Ember.computed('model.file', 'fileUrl', function() {
        return 'mailto:?subject=' + this.get('model.file.name') + '&body=' + this.get('fileUrl');
    }),

    mfrUrl: Ember.computed('model.file', function() {
        return 'https://mfr.osf.io/render?url=' + window.location.href + '?action=download%26mode=render';
    }),

    shareiFrameDynamic: Ember.computed('model.file', function() {
        return '<style>.embed-responsive{position:relative;height:100%;}.embed-responsive iframe{position:absolute;height:100%;}</style><script>window.jQuery || document.write(\'<script src="//code.jquery.com/jquery-1.11.2.min.js">\x3C/script>\') </script><link href="https://mfr.osf.io/static/css/mfr.css" media="all" rel="stylesheet"><div id="mfrIframe" class="mfr mfr-file"></div><script src="https://mfr.osf.io/static/js/mfr.js"></script> <script>var mfrRender = new mfr.Render("mfrIframe", "' + this.get('mfrUrl') + '");</script>';
    }),

    shareiFrameDirect: Ember.computed('model.file', function() {
        return '<iframe src="' + this.get('mfrUrl') + '" width="100%" scrolling="yes" height="677px" marginheight="0" frameborder="0" allowfullscreen webkitallowfullscreen>';
    }),

    fileTags: Ember.computed('model.file', function() {
        return this.get('model.file.tags');
    }),

    edit: false,

    _edit: Ember.observer('currentUser', 'model.user', function() {
        if (this.get('model.user.id')) { //don't change the value while id is not loaded.
            this.set('edit', this.get('model.user.id') === this.get('currentUser.currentUserId'));
        }
    }),

    fileVersions: Ember.computed('model.file', function() {
        return Ember.$.getJSON(this.get('model.file.links.download') + '?revisions=&').then(function(data) {
            return data.data;
        });
    }),

    actions: {
        share() {
            document.querySelector("#sharePaneUrl").select();
            document.execCommand('copy');
        },

        download(version) {
            const url = this.get('model.file.links.download') + '?revision=' + version;
            window.location = url;
        },

        changeView() {
            Ember.$('#mfrIframeParent').toggle();
            Ember.$('#revisionsPanel').toggle();
            Ember.$('.view-button').toggleClass('btn-default btn-primary');
        },

        openFile(file) {
            if (file.get('guid')) {
                this.transitionToRoute('file-detail', file.get('guid'));
            } else {
                window.location = `/file_redirect${file.get('path')}`;
            }
        },

        addTag(tag) {
            const model = this.get('model.file');
            this.get('fileTags').pushObject(tag);
            model.set('tags', this.get('fileTags'));
            model.save();
        },

        removeTagAtIndex(index) {
            const model = this.get('model.file');
            this.get('fileTags').removeAt(index);
            model.set('tags', this.get('fileTags'));
            model.save();
        },

        versionChange(version) {
            this.set('revision', version);
        },
    }
});
