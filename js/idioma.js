var idioma = navigator.language;
var iniciales = idioma.substring(0,2);
var ancho=navigator.appVersion.length;

if(iniciales=="es")
{
	alert("español");
     location.replace("http://yeso126.github.io/indexes.html"); //redirigimos a nuestro sitio en español
}
else
{
     location.replace("http://yeso126.github.io/index.html") //redigirimos a nuestro sitio en inglés
}