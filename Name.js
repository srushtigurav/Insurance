
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
 <div ng-app="myapp" ng-controller="myCtrl">
 
 First Name= <input type="text" ng-model="fname"/><br>
 <p> <span ng-bind="fname"></span> </p>
 Surname= <input type="text"  ng-model="sname"/><br>
 <br>
 FullName: {{fullName()}}
 
 </div>
 
 <script>
 var app= angular.module('myapp', []);
 app.controller('myCtrl', function( $scope)
		 {
	 $scope.fname="Surbhi";
	 $scope.sname="Hello";
	 $scope.fullName=function(){
	 	return $scope.fname+" "+ $scope.sname;
		 };
		 
	 });
 
 </script>
</body>
</html>
