var App;

module("Acceptances - Index", {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test("index renders", function(){
  expect(1);

  visit('/').then(function(){
    ok(exists("h2:contains('Crushing it!')"));
  });
});
