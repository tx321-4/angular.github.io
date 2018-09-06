/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-09-03 22:48:47
 * @version $Id$
 */

angular.module("myApp",[]).controller('namesCtrl',function($scope){
	$scope.names = [
	{name : "Jani", country : "Norway"},
	{name : "Hege", country : "Sweden"},
	{name : "Kai",country : "Denmark"}
	];
});