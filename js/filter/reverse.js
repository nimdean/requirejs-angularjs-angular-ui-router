define([],function(){
    'use strict'
    var fil =  ['$http',function($http){// 写成数组样式可以加载依赖注入，其实也能直接是个函数，只是直接写成函数没法实现依赖注入，其他如directive之类的也类似，$http只是随便写的一个依赖，可以根据实际需求引入
        return function(text) {
            return text.split("").reverse().join("");
        };
    }];
    return fil;
})