var app=angular.module('app', ["ngRoute", "ngSanitize"]); 
						/*ngRoute: serve per poter includere la libreria ng-route all'interno della nostra app. I route servono per 
									poter far andare l'utente in pagine diverse del nostro sito senza la necessità di ricaricare la pagina, 
									rimanendo quindi sempre nella stessa pagina
						xeditable: serve per poter creare dei controlli/stringhe editabili direttamente nella stessa pagina, senza la necessità
									di reindirizzare ad un'altra pagina per la modifica.*/

/*app.controller('appCtrl', ['$scope', function($scope){
	$scope.name=null;
	$scope.clickHandler=function(){
		window.alert("Yeah!");
	}
}])*/
app.config(function($routeProvider, $locationProvider) { /*questo è il modo di definire una route nel nostro sito. "routeProvider" da la possibilità di inserire varie 
	rotte per i link che andremo ad inserire nelle pagine*/

	// $locationProvider.html5Mode(true);
	
	/* RIchiamando la funzione ".when(...)" possiamo reindirizzare l'utente alla pagina che vogliamo quando farà click su un link che punterà al primo parametro.
		Ad esempio: nel prossimo "when" abbiamo come primo parametro una '/'. Quindi la funzione verrà richiamata quando l'utente cliccherà su un link che 
		punterà alla '/'. Quando l'utente ci cliccherà, all'utente verrà restituita la pagina view/index.html e gli verrà attribuito il controller "appCtrl" che
		abbiamo appositamente creato. */
	$routeProvider.when('/', {
		controller:'appCtrl',
		templateUrl: 'view/index.html'
	});

	$routeProvider.when('/add-contact', {
		controller:'addCtrl',
		templateUrl: 'view/add.html'
	});

	$routeProvider.when('/contact/:id', {
		controller:'contactCtrl',
		templateUrl: 'view/contact.html'
	});

	$routeProvider.when('/lista-utenti', {
		controller:'appCtrl',
		templateUrl: 'view/lista-utenti.html'
	});
		/* Questo metodo permette all'utente di essere ridirezionato in una pagina a nostro piacimento appena digita un URL sbagliato o su un link che non
		reindirizza a nessuna pagina esistente nel nostro sito. */
	$routeProvider.otherwise({
		redirectTo:'/'
	});

});

/*Le FACTORY sono servizi che permettono di condividere variabili con tutti gli altri controller. I controller possono accedere alle loro proprietà pubbliche 
(ovvero quelle proprietà dichiarate dentro il RETURN) se il nome della factory viene passata come parametro al controller. */
app.factory('utenti', function utentiFactory(){
	var utenti=[{nome:"Domenico", cognome:"Garitta", indirizzo:"Via Tal Dei Tali, 25", email:"Domenico@gsdf.it", id: 0},
					{nome:"Martina", cognome:"Tartina", indirizzo:"Via dalle Scatole, 2", email:"martina@tartina.pol", id: 1},
					{nome:"Geronimo", cognome:"Stillton", indirizzo:"Via Dotto, secondo tubo di scarico a destra", email:"Geronimo@gsdf.it", id: 2},
					{nome:"Francesco", cognome:"Guarrasi", indirizzo:"Via dalla mia strada, 23", email:"Francesco@gsdf.it", id: 3},
					{nome:"Andrea", cognome:"Serpeverde", indirizzo:"Ponte numero 5", email:"Andrea@gsdf.it", id: 4},
					{nome:"Riccardo", cognome:"Genna", indirizzo:"Via del pecorino, 44", email:"Riccardo@gsdf.it", id: 5},
					{nome:"Sofio", cognome:"Mascolino", indirizzo:"Via da non sapere, XY", email:"Sofio@gsdf.it", id: 6}
	];


	/* Tutte le funzioni che vogliamo creare e che vogliamo usare devono essere dichiarate all'interno del RETURN. QUesta regola vale solo per le FACTORY (forse) */
	return {
		get: function(){ /* Questo è il modo di creare una funzione: "nomeFunzione:function(){...}". Le funzioni non hanno bisogno di essere dichiarate nello
							$scope, perchè verranno evocate direttamente da direttive/variabili interne oppure, se sono dentro una factory e il "return",
							verranno richiamate automaticamente usando il nome della factory per poi accedervi con un punto (nomeFactory.get())*/
			return utenti;
		},

		find: function(index){
			return utenti[index];
		},

		create: function(utente){
			utenti.push(utente); /*Accoda il nuovo utente alla lista di utenti dichiarata nella Factory. Le modirfiche non sono permanenti.*/
		}, 

		destroy: function(index){
			window.alert("Sta per essere cancellato l'index "+index);
			utenti.splice(index, 1);	
		}
	};
});

app.controller('appCtrl', function($scope, $rootScope, $location, utenti){ 
									/*	- $rootScope: serve per poter creare variabili globali e accessibili ovunque. non è buona prassi usarla, infatti
											si usano i "service" se si vogliono portare valori/funzioni in tutto il sito/controller/app
										
										- $location: si usa per poter reindirizzare le pagine. Può usare la variabile path che ci permetterà di reindirizzare 
											l'utente nella pagina che desideriamo (un po' come si fa con il PHP: @header('location: index.php') ).
											Altra funzione di location è ottenere il percorso corrente/di destinazione. Utile quando si vuole sapere dove
											l'utente abbia cliccato per poter fare dei controlli o per usare una pageClass active (vedi in basso)
										
										- utenti è il nome del servizio di tipo "factory" che permette di avere in questo controller la variabile "utenti". Essa si
											può inviare a tutti gli altri controller che si vuole, basta inviare nei loro parametri lo stesso nome "utenti"*/


	/*$rootScope.utenti=[{nome:"Domenico", cognome:"Garitta", indirizzo:"Via Tal Dei Tali, 25", email:"sdfs@gsdf.it"},
					{nome:"Geronimo", cognome:"Stillton", indirizzo:"Via Dotto, secondo tubo di scarico a destra", email:"sdfs@gsdf.it"},
					{nome:"Francesco", cognome:"Guarrasi", indirizzo:"Via dalla mia strada, 23", email:"sdfs@gsdf.it"},
					{nome:"Andrea", cognome:"Serpeverde", indirizzo:"Ponte numero 5", email:"sdfs@gsdf.it"},
					{nome:"Riccardo", cognome:"Genna", indirizzo:"Via del pecorino, 44", email:"sdfs@gsdf.it"},
					{nome:"Sofio", cognome:"Mascolino", indirizzo:"Via da non sapere, XY", email:"sdfs@gsdf.it"}
	];*/
	$scope.utenti=utenti.get();
	//$filter('json')($scope.utenti); //se si richiama la variabile "utenti" all'interno dell'HTML, grazie a questo codice verrà applicato immediatamente tale filtro.
	$scope.isHidden=false; //non c'è bisogno di crearla, poichè una volta impsotata nel tag ng-hide, essa verrà inizializata a FALSE li dentro. Il suo valore, inoltre, potrà essere modificato
	
	$scope.clickHandler=function(){
		//window.alert("Yeah!");
		$scope.isHidden= !$scope.isHidden;
	};
	
	$scope.mouseOverHandler=function(){
		window.alert("L'Handler Mouse Over attivo ;)");
	};

	$scope.startSearchHandler=function(){ /* Con questa funzione, una volta che verrà evocata, redirigeremo l'utente nella pagina indicata dalla variabile
											$location.path(). In questo caso evocheremo la funzione quando l'utente scriverà qualcosa nella searchBox (da 
											qualsiasi pagina si trovi. Per fare ciò metteremo tale funzione nella direttiva "ng-keyup" della <input>*/
		$location.path('/lista-utenti');
	};

	$scope.pageClass=function(path){ /* Questa funzione viene richiamata da ng-class (che crea un'attributo "class" del CSS nelle tag) ed invia al parametro
										di questa funzione il percorso a cui punta il link. Questa funzione controlla se tale link è uguale al link attuale 
										in cui si trova l'utente e, se risulta uguale, restituisce la stringa "active" che verrà messa all'interno 
										dell'attributo "class" (quindi dinveterà class="active" che in Bootstrap significa "evidenzia questo bottone/link") */
		return ( (path==$location.path())? 'active': '' );
	};

	/*$scope.manageSearchBar=function(){
		return(($location.path()=='/lista-utenti')? true: false);
	}*/

	$scope.delete=function(index){
		utenti.destroy(index);
	};

	$scope.lista=function(){/* Questa funzione permette di modificare la secoda listbox nella Index quando un elemento della prima listbox viene selezionato */

	    var bOptions = {"saluto":["Ciao!","Hola!","Hi!"], "paura":["Aiuto!","Aaaaaaahhh!"]};

	    var A = document.getElementById('a');
	    var B = document.getElementById('b');

	    //window.alert(A);
	    
	    //on change is a good event for this because you are guarenteed the value is different
	    A.onchange = function(){
	    	//window.alert("Valore modificato");
	        //clear out B
	        B.length = 0;
	        //get the selected value from A
	        var _val = this.options[this.selectedIndex].value;
	        //loop through bOption at the selected value
	        for ( var i in bOptions[_val]){
	            //create option tag
	            var op = document.createElement('option');
	            //set its value
	            op.value = bOptions[_val][i];
	            //set the display label
	            op.text = bOptions[_val][i];
	            //append it to B
	            B.appendChild(op);
	        }
	    };
	    //fire this to update B on load
	    A.onchange();

	    $scope.getRandomSpan = function(){
	    	return Math.floor((Math.random()*100)+1);
	    }
	};

	/* questo pezzo di codice getisce la SELECT nella index. */
	$scope.ordina=null;

	$scope.impostaOrdine=function(){
		//window.alert("ImpostaOrdine in esecuzione");
		if ($scope.ordina=='a_z') {
			//window.alert("ImpostaOrdine restituisce FALSE");
			return false;
		} else if($scope.ordina=='z_a'){
			//window.alert("ImpostaOrdine restituisce TRUE");
			return true;
		}
	};
		
});

app.controller('contactCtrl', function($scope, $routeParams, utenti){ /*routeParams permette di poter prendere i parametri dall'URL (come quelli GET e gestirseli 
	all'interno del controller.*/
	//console.log($routeParams);
	$scope.utente=utenti.find($routeParams.id);
});

app.controller('addCtrl', function($scope, utenti){ /* questo è il controller che verrà usato dal nostro router per instradare alla pagina view/add.html quando
	l'utente cliccherà su un link che punta ad "/add" */
	/*Inserisco il controllo che mostra all'utente se sta scrivendo correttamente tutti i campi nel form*/
	$scope.controllaCampo=function(campo){
		switch(campo){
			case 'nome':
				if ($scope.utente.nome.length>2) {
					return "has-success";
				};
				break;

			case 'cognome':
				if ($scope.utente.cognome.length>2) {
					return "has-success";
				};
				break;

			case 'email':
				if ($scope.utente.email.length>2) {
					return "has-success";
				};
				break;

			case 'indirizzo':
				if ($scope.utente.indirizzo.length>10) {
					return "has-success";
				};
				break;

				
		}
		
	}

	$scope.submit=function(){ /* Qui non inviamo nessun parametro perhcè questo controller ha l'acesso alla $scope della pagina. */
		/* Prima contorllo se tutti i campi sono stati impostati, richiamando lka funzione .... */
		
		/* acquisisco il numero di utenti attualmente risiedenti nell'array: sarà l'ID del nuovo utente */
		$scope.id=utenti.get().length;
		$scope.utente.id=$scope.id;
		utenti.create($scope.utente); /* richiamo la funzione "create" dichiarata all'interno della Factory utenti e gli inserisco tutti i valori dell'utente
										 restituiti dalla <ng-submit> del <form>. */
		$scope.nomeUtente=utenti.find( utenti.get().length-1 );	/* Utile soltanto per l'acquisizione dell'ultimo utente inserito nella lista */
		$scope.utente=null;
		$scope.added=true;
	}
});

/*Le direttive permettono di poter inserire nelle pagine HTML dei codici o tag che creiamo noi con Angular.*/
app.directive('editable', function(){

				// A: la direttiva può essere associata solo utilizzando un attributo, <div editable> </div>.
				// E: la direttiva può essere utilizzata come elemento personalizzato, <editable> </editable>.
				// C: la direttiva può essere utilizzata aggiungendola come classe all’elemento, <div class="editable"></div>.
				// M: consente l’esecuzione della direttiva attraverso un commento HTML, <!-- directive: editable -->.
	return {
		restrict: 'AE', // Tale direttiva funziona come mostrato nell'elenco qui su. 
		templateUrl: 'view/editable.html', /*questo è il foglio che verrà richiamato per stampare la box di modifica degli elementi. il Template viene 
											richiamato quando la direttiva restituisce dei valori o viene evocato. Ovviamente, il template è una pagina che
											può sostituire per intero o solo parzialmente la pagina in cui ci si trova. Generalmente la sostituisce parzialmente
											così da poter permettere l'inserimento "a caldo" di alcuni elementi HTML, evitando ricaricamenti di pagina.*/
		
		scope:{		/*Tutte le variabili dichiarate all'interno dello "scope" dovranno essere impostate nell'HTML sottoforma di attributi HTML. Se nel 
					nome degli attributi vi è una lettera Uppercase (come ad esempio la T di "fieldType") allora nell'attributo HTML dovrà essere scritto con
					un trattino tra la lettera Uppercase e quella precedente (ad esempio "fieldType" diventa "field-type"). Invece, nel codice Angular che verrà 
					evocato, la variabile dovrà essere richiamata così come è stata scritta qui, ovvero in camel-case ("fieldType"). La spiegazione di questo tipo di 
					scope e delle sue altre varianti è spiegata più giù */
			value: '=editable', /*Il valore preceduto dall'uguale "=" deve essere identico al nome della direttiva. Inoltre, l'uguale "=" sta a significare 
									che questa variabile può inviare il suo valore allla direttiva e che può anche riceverla da esso.*/
			field: '@fieldType' /*la chiocchila "@" significa che questa variabile può SOLO prendere il valore da una variabile dichiarata nella direttiva.
									Quindi non può restituire indietro alcun valore (cosa che invece può fare l'uguale "=" e la "&"). */
		
					/*Questo scope, dichiarato nel return, rappresenta i campi che si possono impostare all'interno delle tag HTML
					Lo scope, nelle directive, può avere vari valori:
						- scope: true  =  significa che lo scope della direttiva è indipendente dallo scope del controller che lo utilizza. Al momento
										della creazione della direttiva (da parte del controller), il valore dello scope della direttiva sarà un derivato 
										dello scope del controller, quindi inizialmente avrà lo stesso valore che aveva lo scope padre. Quando lo scope della 
										direttiva cambierà valore, non andrà ad incidere sullo scope padre
						- scope: false  =  significa che la direttiva non ha uno $scope tutto suo ma userà quello del controller che lo richiamerà. Tutti i
										valori che lo scope del controller avrà potranno essere presi dalla direttiva.
						- scope: {...}  =  significa che viene creato un nuovo $scope isolato che, quindi, quando verrà creato non erediterà nessun valore
										dallo scope del controller che lo inizializzerà. In questo caso, ogni elemento dichiarato all'interno di questo "scope"
										DOVRA' essere presente nell'HTML come attributo di una TAG. Inoltre, gli attributo creato in questo scope dovranno usare
										i prefissi di Angular: "=", "@" e "&". Se uno degli attributi usa l'uguale, allora il suo nome dovrà essere uguale al
										nome della direttiva. COmnunque sia, se si vuole impostare uno di questi attributi come opzionali (solo per "=" forse) 
										è necessario usare il "?" dopo il prefisso (ad esempio value:'=?' ).
										P.S. omettere il nome dell'attributo dopo il prefisso significa dare all'attributo il nome che ha la sua relativa 
										variabile. Ad esempio, value:'=' significa che l'attributo HTML sarà "value" */
		},
			/*All'interno delle direttive si possono inserire pure controller in modo tale da importare servizi o altre API, come anche comunicare con altre 
			direttive. Usare un controller è comodo quando vogliamo che un certo tipo di codice venga eseguito prima che l'applicazione venga compilata. Il
			metodo "link", invece, viene eseguito dopo, precisamente quando viene eseguito il redirezionamento al Template*/
		controller: function($scope){
			$scope.editor={
				showing: false,
				value: $scope.value
			},

			$scope.toggleEditor=function(){
				$scope.editor.showing=!$scope.editor.showing;
				$scope.field=($scope.field) ? $scope.field : 'text';
			},
			$scope.save = function(){
				$scope.value = $scope.editor.value;
				$scope.toggleEditor();
			}
		}/*,

		link:function($scope){ 
			//$scope.editor.value="Il linker funziona dopo che la pagina template viene generata";
			$scope.field="ciao"; //questo comando, ovviamente, non avrà alcun risultato poichè field è impostato come @ all'interno dello scope
		}*/
	};
});