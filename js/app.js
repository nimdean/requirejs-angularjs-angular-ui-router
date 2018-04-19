define([
    'uiRouter',
    'config/controllersConfig',
    'config/routerConfig'
], function (uiRouter, controllers, routerConfig) {
    'use strict'
    var app = angular.module('myApp', ['ui.router', 'appRouter', 'myApp.controller']);
    return app;
})