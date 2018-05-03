define([],function(){
    'use strict'
    var ser = ['$http','$q',function($http,$q){// 写成数组样式可以加载依赖注入，其实也能直接是个函数，只是直接写成函数没法实现依赖注入，其他如directive之类的也类似
        this.test = function(){
            console.log('服务成功注入！');
        }
    }];
    return ser;
})