import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});



Ember.$('#pingpong').on('scroll', function() {
  if(Ember.$(this).scrollTop() + Ember.$(this).innerHeight() >= Ember.$(this)[0].scrollHeight) {
      alert('end reached');
  }
})



loadInitializers(App, config.modulePrefix);

export default App;
