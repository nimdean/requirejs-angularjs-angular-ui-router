require.config({
    baseurl:'js/',// 定义基础路径
    paths:{// 定义引入资源的一些变量名
        'angular':'lib/angular.min',
        'uiRouter':'lib/angular-ui-router.min'
    },
    map:{
        '*':{// 引入css.min.js插件使之可以依赖加载css文件
            'css':'lib/css.min'
        }
    },
    shim:{
        'angular':{// 必须导出一个变量名，否则别处无法引入angular
            exports:'angular'
        },
        'uiRouter':{// 示例，将几个css文件也依赖了进来
            deps:['angular','css!/css/reset.css','css!/css/index.css']
        }
    },
    waitSeconds:0,
    urlArgs:'bust=' + new Date().getTime()// 添加文件版本号，发版时可以固定版本号
});
require(['app'],function(app){
    angular.bootstrap(document,[app.name]);// 这个是angular的一个手动启动应用的函数，因为我们并没有在html标签中绑定ng-app
});
