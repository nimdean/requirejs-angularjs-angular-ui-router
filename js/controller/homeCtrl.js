define([], function(){
    'use strict'
    var ctrl = ['$scope','testService',function($scope,testService){
        console.log("主页");
        $scope.foo = "自定义过滤器";
        testService.test();
        $scope.pageSet = {
            currentPage:1, // 当前页
            totalItems:100,
            totalPage:35, // 总页数
            eachPageNum:10, // 每页展示数
            eachPageNumList:[10,20,30], // 可选每页展示数列表
            pageChange:function(){ // 页码发生变化是调用的函数
                console.log('页签发生变化');
            }
        }
    }];
    return ctrl;
});