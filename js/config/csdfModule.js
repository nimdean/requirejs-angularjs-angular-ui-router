define([// 定义依赖
    'angular',
    'js/directive/testDire.js',
    'controller/index/indexCtrl',
    'controller/homeCtrl',
    'js/service/testService.js',
    'js/filter/reverse.js'
],function(
    angular,
    testDir,
    indexCtrl,
    homeCtrl,
    testService,
    reverse
){
    'use strict'
    var module = angular.module('csdfModules',[]);// 定义的该module名字，
    // 说点个人理解，controller、service、factory、directive、filter等都是属于module下的东西，可以像下面这样挂载，但因为service之类的会存在依赖关系，所以在加载的时候要注意调整下顺序，防止报依赖错误
    // 万物挂载module下应该不会有大问题，第三方插件应该也可以这样挂载
    module.filter('reverse',reverse);
    module.controller('indexCtrl',indexCtrl);
    module.controller('homeCtrl',homeCtrl);
    module.service('testService',testService);
    module.directive('testDir',testDir);
    return module;// 不要忘了return，否者这个文件就没有输出东西了，另外注意那些controller、directive、service之类的都需要记得return
})