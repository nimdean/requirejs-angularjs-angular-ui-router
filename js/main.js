require.config({
    paths: {
        'angular': 'lib/angular.min',
        'uiRouter': 'lib/angular-ui-router.min',
        'echarts': 'lib/echarts.common.min',
        'jQuery': 'lib/jquery-3.2.1.min',
        'indexCtrl': 'controller/index/indexCtrl',
        'homeService':'service/homeService'
    },
    map: {
        '*': {
            'css': 'lib/css.min'
        }
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps:[
                'css!../css/index/index.css'
            ]
        },
        'app': {
            deps: ['angular']
        },
        'uiRouter': {
            deps: ['angular']
        }
    },
    waitSeconds: 0,
    urlArgs: 'v=' + new Date().getTime()
})
require(['app'], function (app) {
    angular.bootstrap(document, ['myApp']);
})