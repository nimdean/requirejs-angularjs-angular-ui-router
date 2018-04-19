define([], function(){
    'use strict'
    var ctrl = ['$scope','$http','homeService',function($scope, $http,homeService){
        debugger;
        console.log("主页");
        $http.get('data/example.json').then(function(rs){
            debugger;
        })
    }];
    return ctrl;
});