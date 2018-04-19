define(['angular'], function(angular){
		'use strict'
		var ctrl = ['$scope','$http', function($scope, $http){
			$scope.header = {
				"title":"我的简历",
				"menu":[
					{
						"name":"主页",
						"href":"home"
					},{
						"name":"设置",
						"href":"setting"
					},{
						"name":"关于我",
						"href":"about"
					}
				]
			}
		}];
		return ctrl;
	});