
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "uk.co.workingedge.cordova.plugin.sqliteporter.sqlitePorter",
          "file": "plugins/uk.co.workingedge.cordova.plugin.sqliteporter/www/sqlitePorter.js",
          "pluginId": "uk.co.workingedge.cordova.plugin.sqliteporter",
        "clobbers": [
          "cordova.plugins.sqlitePorter"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-sqlite-storage": "6.0.0",
      "uk.co.workingedge.cordova.plugin.sqliteporter": "1.1.1",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-statusbar": "2.4.2"
    };
    // BOTTOM OF METADATA
    });
    