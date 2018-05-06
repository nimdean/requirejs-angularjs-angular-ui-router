define([], function() {
  "use strict";
  var dir = [
    "$timeout",
    function($timeout) {
      // 写成数组样式可以加载依赖注入，其实也能直接是个函数，只是直接写成函数没法实现依赖注入，其他如directive之类的也类似
      return {
        strict: "A",
        replace: false,
        scope: {
          ngMousewheel: "&"
        },
        link: function(scope, ele, attr) {
          ele[0].onmousewheel = function(event) {
            // 非火狐浏览器
            if (event.wheelDelta > 0) {
              // 向上滑动
              scope.mouseWheelTimeoutUp && $timeout.cancel(scope.mouseWheelTimeoutUp);
              scope.mouseWheelTimeoutUp = $timeout(function(){
                scope.ngMousewheel({dir:'up'});
              }, 200);
            } else {
              // 向下滑动
              scope.mouseWheelTimeoutDown && $timeout.cancel(scope.mouseWheelTimeoutDown);
              scope.mouseWheelTimeoutDown = $timeout(function(){
                scope.ngMousewheel({dir:'down'});
              }, 200);
            }
          };
          ele[0].addEventListener("DOMMouseScroll", function(event) {
            // 火狐浏览器
            if (event.detail > 0) {
              // 向下滑动
              scope.mouseWheelTimeoutDown && $timeout.cancel(scope.mouseWheelTimeoutDown);
              scope.mouseWheelTimeoutDown = $timeout(function(){
                scope.ngMousewheel({dir:'down'});
              }, 200);
            } else {
              // 向上滑动
              scope.mouseWheelTimeoutUp && $timeout.cancel(scope.mouseWheelTimeoutUp);
              scope.mouseWheelTimeoutUp = $timeout(function(){
                scope.ngMousewheel({dir:'up'});
              }, 200);
            }
          });
        }
      };
    }
  ];
  return dir;
});
