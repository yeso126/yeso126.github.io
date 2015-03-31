var idioma = navigator.language;
var iniciales = idioma.substring(0,2);
var ancho=navigator.appVersion.length;

if(iniciales=="es")
{
     location.replace("http://yeso126.github.io/index_es.html"); //redirigimos a nuestro sitio en español
}
else
{
     location.replace("http://yeso126.github.io/index_en.html") //redigirimos a nuestro sitio en inglés
}