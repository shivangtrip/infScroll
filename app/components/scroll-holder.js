import Ember from 'ember';

export default Ember.Component.extend({
     listItems: [
        { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' },
  { name: 'Yehuda' },
  { name: 'Tom' },
  { name: 'Trek' }
    ],
    welcome: function() {
            alert('welcome');
    },
    actions: {
        boom() {
        alert('boom!');
        }
    },
    init() {
        this._super(...arguments);
    this.errors = [];
    console.log(Ember.$('#pingpong'));
    
        //alert('init');
    },
    didInsertElement() {
        console.log('From DidInsert'+this.listItems);
        let localList = this.listItems;
        Ember.$('#pingpong').on('scroll', function() {
            //console.log('scrolling');
            if(Ember.$(this).scrollTop() + Ember.$(this).innerHeight() >= Ember.$(this)[0].scrollHeight) {
                //alert('end reached');
                console.log(this);
                
                console.log(Math.random().toString(36).substring(7));
                
                localList.addObject({name: Math.random().toString(36).substring(7)});
            }
          });
          this.set('listItems', localList);
          console.log('set');
    }
    
});
