define([],function(){
    'use strict'
    var dir = ['$http',function($http){// 写成数组样式可以加载依赖注入，其实也能直接是个函数，只是直接写成函数没法实现依赖注入，其他如directive之类的也类似
      return {
        strict:'EA',
        replace:true,
        template:'<h4>自定义指令！</h4>',
        scope:{
          info:'='
        }
        /**
         * 关于指令的一些内容:strict有四种'ECMA'分别是标签/类名/注释/属性,比如只定义成'E',那么该指令引用的时候只能以自定义标签的形式引用,其他类同
         * scope作用于的一些东西:指令可以直接继承父作用域,也可以开辟自己的隔离作用域,还能在父作用域的基础上开辟自己的作用域,所以存在三种配置项,其中
         * 开辟隔离作用域的指令对应scope写法详细参照网上的教程
         * 
         * **/
      }
    }];
    return dir;
})

