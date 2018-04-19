define(["app"], function (app) {
    "use strict"
    var app = angular.module('appRouter', ['ui.router']);
    app.run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams
            }
        ])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
            //用于改变state时跳至顶部
            $uiViewScrollProvider.useAnchorScroll();
            // 默认进入先重定向
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home/home.html',
                    controllerUrl: [
                        'js/controller/home/homeCtrl.js'
                    ]
                })
                .state('setting', {
                    url: '/setting',
                    templateUrl: 'views/setting/setting.html',
                    controllerUrl: [
                        'js/controller/setting/settingCtrl.js'
                    ]
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about/about.html',
                    controllerUrl: [
                        'js/controller/about/aboutCtrl.js'
                    ]
                })
        }) 
})