define([], function(){
    'use strict'
    var ctrl = ['$scope','testService',function($scope,testService){
        console.log("主页");
        $scope.foo = "自定义过滤器";
        testService.test();
    }];
    return ctrl;
});