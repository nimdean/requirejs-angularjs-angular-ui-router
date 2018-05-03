define([// 加载需要的依赖
    'uiRouter',
    'js/config/routers.js',
    'js/config/csdfModule.js'
],function(){
    'use strict'
    // 给APP应用加载上以下几个module，这几个module下还对应着各自的module，详见对应的js文件
    var app = angular.module('myApp',['ui.router','appRouter','csdfModules']);// 该angular应用需要加载的module，ui.router是UIRouter的固定写法，不知道会不会有别的写法，appRouter和csdfModules都是对应js文件自定义的模块名
    return app;
})