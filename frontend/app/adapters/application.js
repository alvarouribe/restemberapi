// import JSONAPIAdapter from 'ember-data/adapters/json-api';
import RESTAdapter from 'ember-data/adapters/rest';
// export default JSONAPIAdapter.extend({
export default RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api'
});
