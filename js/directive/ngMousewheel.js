define([],function(){
    'use strict'
    var dir = ['$http',function($http){// 写成数组样式可以加载依赖注入，其实也能直接是个函数，只是直接写成函数没法实现依赖注入，其他如directive之类的也类似
      return {
        strict:'A',
        replace:true,
        // template:function(ele,attr){
        //     console.log(ele);
        //     return;
        // },
        scope:{
          info:'='
        }
      }
    }];
    return dir;
})

