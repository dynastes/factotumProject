/*function appCtrl($scope){ //lo scope prende tutte le variabili ng-model scritti nella pagina
    $scope.nome="Utente";
}*/

var app=angular.module('app', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl:'assets/view/parziali/index.php'
	});
	$routeProvider.when('/card-list', {
		controller:'cardListCtrl',
		templateUrl:'assets/view/parziali/user/lista-carte.php'
	})
})


.controller('appCtrl', ['$scope', function($scope){
//app.controller('appCtrl', function($scope){

	$scope.nome=null;

	$scope.clickHandler=function(){
		window.alert("Bottone premuto");
	};

}])

.controller('cardListCtrl', ['$scope', function($scope){
	$scope.carte = [
		{
			nome:'Goku Super Saiyan 2',
			titolo:'Tanta potenza poca potenza',
			hp:5740,
			atk:2500,
			def:1240
		},
		{
			nome:'Citriolo',
			titolo:'Smangiucchiato',
			hp:420,
			atk:20,
			def:40
		}
	];
}]);
