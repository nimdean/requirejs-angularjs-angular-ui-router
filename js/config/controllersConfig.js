define([
    'controller/index/indexCtrl',
    'js/controller/home/homeCtrl.js',
    'js/controller/setting/settingCtrl.js',
    'js/controller/about/aboutCtrl.js'
], function (
    indexCtrl,
    homeCtrl,
    settingCtrl,
    aboutCtrl
) {
    'use strict'
    var module = angular.module('myApp.controller', []);
    module.controller('indexCtrl', indexCtrl);
    module.controller('homeCtrl', homeCtrl);
    module.controller('settingCtrl', settingCtrl);
    module.controller('aboutCtrl', aboutCtrl)
    return module;
});