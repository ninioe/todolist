import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
    namespace: 'api',
    host: 'http://127.0.0.1:8000'
});
