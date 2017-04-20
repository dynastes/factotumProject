/*function appCtrl($scope){ //lo scope prende tutte le variabili ng-model scritti nella pagina
    $scope.nome="Utente";
}*/

var app=angular.module('controller', []);

app.controller('appCtrl', ['$scope', function($scope){
	$scope.nome=null;
}]);
