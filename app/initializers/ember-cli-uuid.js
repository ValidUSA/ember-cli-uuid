import Ember from 'ember';
import uuid from 'ember-cli-uuid/utils/uuid-helpers';

export default {

  name: 'ember-cli-uuid',

  initialize: function () {

    DS.Adapter.reopen({

      generateIdForRecord: function () {
        return uuid();
      }

    });
  }

};
