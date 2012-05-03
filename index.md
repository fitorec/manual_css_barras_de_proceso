# Barras de proceso.

![Barra del table dance](img_table_dance)

Hoy quiero platicar de las barras pero no de las barras que estas penzando `':-0` mas bien de las **barras de proceso CSS**.



**Las barras de proceso, son una forma gráfica de la representación de datos**, los cuales su mayoría suelen ser representados en forma porcentual.

Por ejemplo si en un sistema tenemos: **10 usuarios** de los cuales **5 son administradores** entonces el **50% de usuarios son administradores**, los cuales los queremos representar con un código **HTML** simple y fácil de generar, por ejemplo:

<script src="https://gist.github.com/2587948.js?file=01.ejemplo_basico_css.html"></script>

###Resultado

<div class="marco_barra">
    <div class="barra_avance" style="width: 50%;">50%</div>
</div>


Bien pues este pequeño manual consiste en explicar una metodología que nos permita generar estas barras, al tiempo que intenta generar discusión al respecto.


## Haciendo las barras con CSS

Personalmente considero que la mejor forma de hacerlo en con puro **CSS**. La barra de proceso anterior esta hecha con puro código **CSS** y el **código HTML anterior**.

Podemos ver en **código HTML anterior** que **tenemos 2 divs**,los cuales intento explicar de forma gráfica en la siguiente imagen:

![Barra de procesos y sus partes](img/barra_explicacion.png)

### Como podemo ver las clases son:

 - **marco\_barra:** Define la parte gris clara(borde redondeado),el fondo gris obsculo, las sombras del contorno del marco, entre otras cosas.
 
 - **barra\_avance:** Define la barra de proceso es la parte del gradiente azul, al tiempo que define la tipografia que nos indica que va avanzado un 50%.

### Código CSS Base:

Bien ahora atienda al siguiente código **CSS**:

<script src="https://gist.github.com/2587948.js?file=02.codigo_barras_base.css"></script>


## Haciendo combinaciones(Combos).

![combitaciones](img/combitaciones.gif)


Este código **CSS anterior** intenta ser lo más **Cross-browser** y reutilizable posible, bien partiendo de este hecho ahora imaginemos que:

 - **1).-** Queremos poner las barras de en un espacio mas pequeño ó
 - **2).-** quizas necesitamos barras de distintos colores.

Intentare explicar como conseguir este comportamiento apartir del **1er Caso**, para esto vamos a definir dos clases nuevas, la clase **mini** para el marco y la clase **mini** contenida dentro de otra clase **mini**,este anidamiento lo podemos ver en el siguiente código **HTML**:

<script src="https://gist.github.com/2587948.js?file=03.ejemplo2_barra_mini.html"></script>

Ahora tenemos que agregar el siguiente código **CSS** el cual sólo consisten en las diferencias entre ambos estilos, como se muestra acontinuación:

<script src="https://gist.github.com/2587948.js?file=04.codigo_barras_mini.css"></script>


### Ressultado
<div class="marco_barra mini" style="width: 200px;">
    <div class="barra_avance mini" style="width: 50%;">50%</div>
</div>


## Barra animada

![Barra con movimiento](img/movimiento.gif)

Tomando esta lógica, ahora podemos agregar mas colores a nuestras barras e ir agregando tipos de barras como necesitemos.

Bien ahora quiero explicar como hacer una barra con un imagen animada. Vamos agregar una barra de color roja del tipo animada, a partir de una imagen **gif** que se va ir desplazando.

Para la barra animada lo primero que necesitamos es la imagen **gif** la puedes hacer con el [**inkscape**](http://inkscape.org/) y [**gimp**](http://www.gimp.org/), el hacer una animación en la barra es muy similar a un **sprite csss** solo que posteriormente tienes que generrar la imagen animada con el [**gimp**](http://www.gimp.org/)(adjunto los archivos).

Lo primero que tienes que hacer es una _distribucion uniforme_ sobre los elementos que necesitas como se puede ver en la siguiente imagen:

![distribucion horizontal uniforme](img/distribucion_uniforme.png)

Posteriormente se exportan las imagenes base y con estas se genera una animacion con el [**gimp**](http://www.gimp.org/) en este caso seran 3 capaz generando con esto una animación con 3 transiciones cada una sera cambiada en un intervalo de 333 _milisegundos_.

![distribucion horizontal uniforme](img/generando_gif.png)

##Código CSS

Partiendo que tenemos la imagen `barra_animada.gif` podemos generar nuestra barra animada:

<script src="https://gist.github.com/2587948.js?file=05.barras_animadas.css"></script>

##Código HTML
La llamada es similar a cuando mandamos a llamar la barra **mini**:

<script src="https://gist.github.com/2587948.js?file=06.ejemplo_barra_animada.html"></script>

### Ressultado

<div class="marco_barra animada">
    <div class="barra_avance animada" style="width: 50%;">50%</div>
</div>



## Agregando animación en JavaScript(nocaut)

![Barra con movimiento con Javascript](img/nocaut.gif)

Si queremos darle la animación de como se va incrementando una barra usted lo primero que tenemos que hacer es agregarle un identificador a la barra:

### Código HTML

<script src="https://gist.github.com/2587948.js?file=07.ejemplo_barra_animada_js.html"></script>

Posteriormente puede hacer una funcion que reciba 3 paramentros el:

 - **id** del elemento a animar
 - El **incremento** (ó decremento)
 - El **intervalo** de la transición(en milisegundos).

### Función `animarBarra` JavaScript:

Dejo aquí un ejemplo de la funcion la cual la puedes adaptar a tus necesidades:

<script src="https://gist.github.com/2587948.js?file=08.codigo_animacion_barras.js"></script>

### Llamada

En este caso vamos a llamar a la función para que nos anime el elemento con id **barra\_animada\_js**, donde deseamos un incremento de 10 cada 200milisegundos, como se muestra:

<script src="https://gist.github.com/2587948.js?file=09.ejemplo_llamada_animacion.html"></script>

### Resultado

<div class="marco_barra animada">
	<div id="barra_animada_js" class="barra_avance animada" style="width: 50%;">50%</div>
</div>


## Finalizando con un frameWork!.

Finalmente este principio **css** es tambien empleado en la interfaz de usuario del [**jQuery**](http://jqueryui.com/demos/progressbar/), la unica diferencia es que:

 - La clase **marco_barra** es nombrada como **ui-progressbar**.
 - La clase **barra_avance** es nombrada como **ui-progressbar-value**.

Bien pues con esto y siguiendo la documentación de [**jQuery ui**](http://jqueryui.com/demos/progressbar/) podemos animar una barra con el siguiente código.

<a href="https://github.com/fitorec/manual_css_barras_de_proceso/downloads" class="get-code">Descargar Código fuente</a><br><br>


## Conclusiones.

Siguiendo estos principios basicos de _css_ y _javascript_ podemos encontrar varios algunos proyectos como:

 - <http://jsullivan.github.com/CSS3-Progress-bars>
 - <http://jqueryui.com/demos/progressbar/>

Estos principios defienen buenas practicas sin embargo personalmente derrepente siento que nos genera código extra que muchas veces no lo necesitamos p.e. si en algun proyecto solo vamos a necesitar una unica clase de barra(con un unico comportamiento) entonces la mejor opción seria seguir estos principios y generar nuestro propio código _css_ y _javascript_(ó en su defecto quitar la '_paja extra_') lo cual hara más ligera la carga para nuestro navegador ademas que el tamaño de la descarga de nuestras librerias sera mucho menor.

##Comentarios.

>>Lo siento estoy buscando algun mecanismo de agregar comentarios en esta sección, pero me puedes comentar en [**@fitorec**](https://twitter.com/fitorec).


[img_table_dance]: img/table.jpg  "Barra - Table dance"
