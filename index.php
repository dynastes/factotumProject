<!DOCTYPE html>
<html ng-app="app" ng-controller="appCtrl"> <!-- lang="it" -->
    <head>
        <meta charset="utf-8">
    	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <script src="assets/js/angular.min.js"></script>
        <script src="assets/js/jquery-3.1.0.min.js" ></script>
    	<script src="assets/js/bootstrap.js" ></script>
        <script src="assets/js/controller.js"></script>

        <title></title>
    </head>

    <body>
        <nav class="navbar navbar-default" role="navigator">
    		<div class="navbar-header">
    			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav-toggle">
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    			</button>
    			<a class="navbar-brand" href="#/">FactotumProjects</a>
    		</div>

    		<div class="collapse navbar-collapse" id="nav-toggle">
    			<ul class="nav navbar-nav">
    				<!-- con html5mode attivato -->
    				<!-- <li class="active"><a href="/anguboot">Browse</a></li>
    				<li ><a href="/anguboot/add-contact">Add contact</a></li>
    				<li ><a href="/anguboot/contact/1">Contatto 1</a></li> -->

    				<!-- senza HTML5MODE disattivato -->
    				<li ng-class="pageClass('/')"><a href="#/">Prove Varie</a></li> <!-- ng-class permette di poter dare una tag CSS "class" all'HTML. Il valore che sta tra virgolette è una funzione/handler che ho creato all'interno dell'app.js e restituisce la stringa "active" se il link inviato come parametro
    				è uguale al link della pagina in cui ci troviamo al momento. Quindi, se al momento ci troviamo nella Home e questo è il link che porta alla Home, la risultante sarà: class="active" che, per Bootstrap, significa che il link/pulsante deve essere evidenziato. -->
    				<li ng-class="pageClass('/lista-utenti')"><a href="#/lista-utenti">Lista carte</a></li>
    				<li ng-class="pageClass('/add-contact')"><a href="#/add-contact">Aggiungi carta</a></li>
    				<!-- <li ><a href="#/contact/1">Contatto 1</a></li> --> <!-- link inutile, ma che spiega chiaramente che si può visualizzare le info del primo utente semplicemente mettendo come parametro il suo ID -->

    			</ul>
    			<form class="navbar-form navbar-right" role="search" > <!-- ng-if="manageSearchBar()" --> <!-- per mostrare la searchBox solo nella pagina /lista-utenti -->
    				<input type="text" class="form-control" placeholder="Cerca nella spazzatura..." ng-model="search" ng-keyup="startSearchHandler()"> <!-- NG-MODEL: è un modo per dichiarare una variabile e dire che si può usare sia nel codice HTML sia nella app.js. Una volta dichiarata così, non è necessario dichiararla nella app.js.
    				SEARCH: questa è la variabile search che ci aiuterà a filtrare i valori della lista qui giù. In questo momento verranno filtrate tutte le stringhe contenute nella lista (sia nome che cognome che Via, ma se volessimo filtrare soltanto il nome, basta usare come modello "search.nome"). -->
    			</form>
    		</div>
    	</nav>

        <div class="container">
            <div class="page-header">
                <h1>Benvenuto <small>{{nome || "utente indefinito"}}</small></h1>

            </div> <!-- /page-header  -->

            <div class="jumbotron">
                <input type="text" class="form-control input-lg" ng-model="nome"/>
    		    <ng-view></ng-view>
            </div> <!-- /jumbotron  -->

            <table class="table table-striped">
                <tr>
                    <th> Nome </th>
                    <th> Titolo </th>
                    <th> HP </th>
                    <th> ATK </th>
                    <th> DEF </th>
                </tr>

                <tr ng-repeat="carta in carte">
                    <td> {{carta.nome}} </td>
                    <td ng-bind="carta.titolo"> </td>
                    <td ng-bind="carta.hp"> </td>
                    <td ng-bind="carta.atk"> </td>
                    <td ng-bind="carta.def"> </td>
                </tr>
            </table>

    	</div> <!-- /container  -->

        <!-- Inserisco la barra laterale per i link rapidi  -->
        <div class="clearfix">
            <div class="pull-right">
                <button type="button" class="btn btn-default" aria-label="Left Align" ng-click="clickHandler()">
                    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> Aggiungi<!-- glyphicon-plus-sign -->
                </button>
            </div>
        </div>
    </body>

</html>
