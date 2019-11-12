# angularSpotify

## Description

El fin de este proyecto es emular la *home page*, el *reproductor* y la *biblioteca* de la página web de Spotify tanto para dispositivos grandes como para móvil. Para ello se ha usado la **versión 8 de Angular +2**.

### Features

* La versión actual del proyecto permite al usuario visualizar una *home page* parecida a la de Spotify en la cuál se muestran las *covers*, títulos y el nombre del álbum a los cuales pertenecen las canciones que hay importadas en el proyecto. Cada canción es un clicable que muestra el *reproductor* de dicha canción. En esta segunda vista se ejecuta el audio con los controles del reproductor. En la *biblioteca* podemos ver todas las canciones del proyecto.


### How does it work

El usuario accede al reproductor de una canción en particular haciendo click encima de cualquier elemento perteneciente a la canción (*cover*, título o autor). De este modo visualizamos el reproductor de dicha canción y se reproduce el audio a partir de los controles del reproductor o haciendo click en el botón *reproducir*. Des del mismo reproductor podemos acceder a las demás canciones a partir del menú de la izquierda. Este mismo menú de la izquierda nos permite acceder a las otras vistas del sitio web: *biblioteca*, *home*, *favoritos* y *buscador*. 

### Stack

Para desarrollar este proyecto se ha usado:
* HTML5
* CSS3
* Bootstrap 4.3.0
* ES6
* TypeScript 3
* Angular 8.3.17

## How to use

Para trabajar en este proyecto hay que hacer un clone del repositorio remoto que podéis encontrar en aquí. Para ello hay que crear una carpeta en local y hacerle un git init. A continuación crear el link git remote add origin "link de nuestro repositorio remoto" y hacer un pull git pull origin master. Una vez hecho el clone, deberéis crear una branch y empezar a trabajar en ella. Ahora ya lo tienes :thumbsup: .

## Future improvements

Es de nuestro interés incrementar las funcionalidades de nuestro emulador de Spotify, es por ello que vamos a incorporar algunas mejoras al proyecto:

* Añadir datos reales de la verdadera API de Spotify.
* Reproducir álbums enteros.
* Añadir controles al reproductor (seekbar, botones para cambiar de canción...)
* Crear la vista del buscador y su funcionalidad.
* Crear un botón para poder añadir las canciones a un listado de canciones favoritas y crear la vista de estas.
* Crear un botón para poder crear playlists y crear la vista de cada una de ellas.

## Licéncia

GNU GENERAL PUBLIC LICENSE - Version 3, 29 June 2007