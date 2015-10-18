/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();


 var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
wind.add(textfield);
 


 var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });



main.on('click', 'select', function(e) {
 console.log("Click sleect MAIN CARD. Go to wind");
  wind.show();
});

wind.on('click', 'select', function(e) {
 console.log("Click sleect WINDOWS. Go to Menu");
  menu.show();
});

menu.on('click', 'select', function(e) {
 console.log("Click sleect MENU. Go to Card");
  main.show();
});
