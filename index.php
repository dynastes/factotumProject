<!DOCTYPE html>
<html ng-app="app" ng-controller="appCtrl"> <!-- lang="it" -->
    <head>
        <meta charset="utf-8">
    	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <script src="assets/js/angular.min.js"></script>
        <script src="assets/js/angular-route.min.js" ></script>
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
    				<li><a href="#/">Prove Varie</a></li> <!--  ng-class="pageClass('/')" permette di poter dare una tag CSS "class" all'HTML. Il valore che sta tra virgolette è una funzione/handler che ho creato all'interno dell'app.js e restituisce la stringa "active" se il link inviato come parametro
    				è uguale al link della pagina in cui ci troviamo al momento. Quindi, se al momento ci troviamo nella Home e questo è il link che porta alla Home, la risultante sarà: class="active" che, per Bootstrap, significa che il link/pulsante deve essere evidenziato. -->
    				<li><a href="#/card-list">Lista carte</a></li>
    				<li><a href="#/add-card">Aggiungi carta</a></li>
    				<!-- <li ><a href="#/contact/1">Contatto 1</a></li> --> <!-- link inutile, ma che spiega chiaramente che si può visualizzare le info del primo utente semplicemente mettendo come parametro il suo ID -->

    			</ul>
    			<form class="navbar-form navbar-right" role="search" > <!-- ng-if="manageSearchBar()" --> <!-- per mostrare la searchBox solo nella pagina /lista-utenti -->
    				<input type="text" class="form-control" placeholder="Cerca nella spazzatura..." ng-model="search" ng-keyup="startSearchHandler()"> <!-- NG-MODEL: è un modo per dichiarare una variabile e dire che si può usare sia nel codice HTML sia nella app.js. Una volta dichiarata così, non è necessario dichiararla nella app.js.
    				SEARCH: questa è la variabile search che ci aiuterà a filtrare i valori della lista qui giù. In questo momento verranno filtrate tutte le stringhe contenute nella lista (sia nome che cognome che Via, ma se volessimo filtrare soltanto il nome, basta usare come modello "search.nome"). -->
    			</form>
    		</div>
    	</nav>

        <div class="container">
            <!--div class="page-header">

            </div--> <!-- /page-header  -->


		    <ng-view></ng-view>

            <!--div class="jumbotron">
            </div> < /jumbotron  -->


    	</div> <!-- /container  -->

        <!-- Inserisco la barra laterale per i link rapidi  -->
        <div class="clearfix">
            <div class="pull-right">
                <button type="button" class="btn btn-default" aria-label="Left Align" ng-click="clickHandler()">
                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Aggiungi
                </button>
            </div>
        </div>
    </body>

</html>
