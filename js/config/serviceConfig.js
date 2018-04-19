define([
    'homeService'
], function (
    homeService
) {
    'use strict'
    var module = angular.module('myApp.controller', []);
    module.service('homeService', homeService);
    return module;
});