<!DOCTYPE html>
<html lang="fr"> 

	<head>
		
		<meta charset="UTF-8">
		<title></title> 
		<meta name="description" content=""> 
		<meta name="author" content="Matthieu Durand"> 
		
		<link type="text/css" rel="stylesheet" href="style.css">
			
		
		
		<script type="text/javascript">

		var bi , bs , proposition , reponse , r;

		do {
			bi = parseInt(prompt("Borne Inférieur?"));
		} while (Number.isNaN(bi)||!Number.isFinite(bi));

		do {
			bs = parseInt(prompt("Borne Supérieure?"));
		} while (Number.isNaN(bs)||!Number.isFinite(bs)||bs<+bi);

		alert('Choisissez un nombre entre ' + bi + ' et ' + bs + '.');

		

		do{
			proposition = Math.floor(( bi + bs )/2);

			reponse = confirm("Votre nombre est-il inférieur strictement à " + proposition + " ?");

			if(reponse === false){
					reponse = confirm("Votre nombre est-il égal à " + proposition + " ?");
					if(reponse)
						r = "=";
					else r = ">";
				}else r = "<";

				switch (r){
					case '<': bs = proposition - 1 ; break;	//on refait une proposition
					case '>': bi = proposition + 1 ; break;	//on refait une proposition
					// pas de: 'case '=': ???;'	car while (r !== "=");
				}
			} while (r !== "=" && bi !== bs);
			alert('Votre nombre est : ' + (Math.ceil(( bi + bs )/2)));



		</script>


	</head>

	<body>

		



	</body>

</html>


