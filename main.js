// initialize your app
// and ...
// nw.Window.open('index.html', {}, function(win) {});

// Load native UI library.

var gui = require('nw.gui');

var option = {
  key : "A",
  active : function() {
    console.log("Global desktop keyboard shortcut: " + this.key + " active.");
  },
  failed : function(msg) {
    // :(, fail to register the |key| or couldn't parse the |key|.
    console.log(msg);
  }
};

// Create a shortcut with |option|.
var shortcut = new gui.Shortcut(option);

// Register global desktop shortcut, which can work without focus.
gui.App.registerGlobalHotKey(shortcut);

// If register |shortcut| successfully and user struck "Ctrl+Shift+A", |shortcut|
// will get an "active" event.

// You can also add listener to shortcut's active and failed event.
shortcut.on('active', function() {
  console.log("Global desktop keyboard shortcut: " + this.key + " active.");
  document.write("Global desktop keyboard shortcut: " + this.key + " active.")
});

shortcut.on('failed', function(msg) {
  console.log(msg);
  document.write(msg)
});

// Unregister the global desktop shortcut.
// gui.App.unregisterGlobalHotKey(shortcut);
