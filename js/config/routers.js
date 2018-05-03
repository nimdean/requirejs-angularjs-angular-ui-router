define(['app'],function(app){
    'use strict'
    var app = angular.module('appRouter',['ui.router']);
    app.run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams
    }]).config(function($stateProvider,$urlRouterProvider,$locationProvider,$uiViewScrollProvider){
        $uiViewScrollProvider.useAnchorScroll();
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'views/home.html',
                controllerUrl:[
                    'js/controller/homeCtrl.js'
                ]
            })
    })
})