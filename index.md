# Barras de proceso.

![Barra del table dance](img_table_dance)

Hoy quiero platicar de las barras pero no de las que estas penzando `':-0`. Más bien de las **barras de proceso CSS**.


**Las barras de proceso, son una forma gráfica de la representación de datos**, los cuales en la mayoría de las veces suelen ser representados en forma porcentual.

###Por ejemplo:

>Si en un sistema tenemos: **10 usuarios** de los cuales **5 son administradores** entonces el **50% de usuarios son administradores**.

Queremos representar este tanto porcentual(50%) con un código **HTML** simple y fácil de generar, por ejemplo:

<script src="https://gist.github.com/2587948.js?file=01.ejemplo_basico_css.html"></script>

###Resultado

<div class="marco_barra">
    <div class="barra_avance" style="width: 50%;">50%</div>
</div>

Este pequeño manual consiste en explicar una metodología que nos permita generar estas barras, al tiempo que intenta generar discusión al respecto.


## Haciendo las barras con CSS

Personalmente considero que la mejor forma de hacerlo en con puro **CSS**. La barra de proceso anterior esta hecha con solamente con el código **CSS** y el **código HTML anterior**.

En el **código HTML anterior** se puede notar que **tenemos 2 divs** que perteneces a **2 clases CSS**(`marco_barra`, `barra_avance`), las cuales intento explicar de forma gráfica en la siguiente imagen:

![Barra de procesos y sus partes](img/barra_explicacion.png)

### Las clases son:

 - **marco\_barra:** Define la parte gris clara(_borde redondeado_), el fondo gris obsculo, las sombras del contorno del marco, entre otras cosas.
 
 - **barra\_avance:** Define la barra de proceso es la parte del gradiente azul, al tiempo que define la tipografia que nos indica que el parcentaje. En este caso **50%**.

### Código CSS Base:

Explicado esto ahora sólo falta definir estas clases, el siguiente código **CSS** define estas clases:

<script src="https://gist.github.com/2587948.js?file=02.codigo_barras_base.css"></script>


## Haciendo combinaciones(Combos).

![combitaciones](img/combitaciones.gif)


El código **CSS anterior** intenta ser lo mas **Cross-browser** y **reutilizable** posible. Partiendo de este hecho imaginemos que:

 - **1).-** Queremos poner las barras en un espacio más pequeño ó
 - **2).-** Quizas necesitamos barras de distintos colores.

Intentare explicar como conseguir este comportamiento apartir del **1er Caso**, para esto vamos a definir dos clases nuevas, la clase **mini** para el marco y la clase **mini** contenida dentro de otra clase **mini**(la del marco),este anidamiento lo podemos ver en el siguiente código **HTML**:

<script src="https://gist.github.com/2587948.js?file=03.ejemplo2_barra_mini.html"></script>

Ahora tenemos que agregar el siguiente código **CSS** el cual sólo consisten en las diferencias entre ambos estilos, como se muestra acontinuación:

<script src="https://gist.github.com/2587948.js?file=04.codigo_barras_mini.css"></script>


### Ressultado
<div class="marco_barra mini" style="width: 200px;">
    <div class="barra_avance mini" style="width: 50%;">50%</div>
</div>


## Barra animada

![Barra con movimiento](img/movimiento.gif)

Tomando esta lógica, ahora podemos agregar mas colores a nuestras barras e ir agregando tipos de barras conforme necesitemos.

Ahora quiero explicar como hacer una barra con un imagen animada. Vamos agregar una barra de color roja del tipo animada, a partir de una imagen **gif** que se va ir desplazando.

Para la barra animada lo primero que necesitamos es la imagen **gif** la puedes hacer con el [**inkscape**](http://inkscape.org/) y [**gimp**](http://www.gimp.org/), el hacer una animación en la barra es muy similar a un **sprite csss** solo que posteriormente tienes que generrar la imagen animada con el [**gimp**](http://www.gimp.org/)(adjunto los archivos).

Lo primero que tienes que hacer es una _distribucion uniforme_ sobre los elementos que necesitas como se puede ver en la siguiente imagen:

![distribucion horizontal uniforme](img/distribucion_uniforme.png)

Posteriormente se exportan las imagenes base y con estas se genera una animacion con el [**gimp**](http://www.gimp.org/) en este caso seran 3 capaz generando con esto una animación con 3 transiciones cada una sera cambiada en un intervalo de 333 _milisegundos_.

![distribucion horizontal uniforme](img/generando_gif.png)

##Código CSS

Partiendo que tenemos la imagen [`barra_animada.gif`](./css/barra_animada.gif) podemos generar nuestra barra animada:

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

Si queremos darle la animación del como se va incrementando una barra, lo primero que tenemos que hacer es agregarle un identificador a la barra.

### Código HTML

<script src="https://gist.github.com/2587948.js?file=07.ejemplo_barra_animada_js.html"></script>

Posteriormente podemos hacer una función que reciba uno o mas de los siguientes 3 parametros:

 - **id** del elemento a animar
 - **incremento** porcentual de la barra(ó decremento)
 - **intervalo** de la transición(en milisegundos) entre incremento e incremento.

### Función `animarBarra` JavaScript:

Dejo aquí un ejemplo de la función haciendo uso de los 3 parametros, la cual puedes adaptar a tus necesidades:

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

Explicado esto y siguiendo la documentación de [**jQuery ui**](http://jqueryui.com/demos/progressbar/) podemos geneara las barras y con el mismo [código CSS base](https://gist.github.com/2587948#file_02.codigo_barras_base.css) podemos darle estilo (notar que se definen **ui-progressbar** y **ui-progressbar-value** en dicho código).


<br /><a href="https://github.com/fitorec/manual_css_barras_de_proceso/downloads" class="get-code">Descargar archivos fuente</a><br /><br />


## Conclusiones.

Siguiendo estos principios basicos de _css_ y _javascript_ podemos encontrar algunos proyectos:

 - <http://jsullivan.github.com/CSS3-Progress-bars>
 - <http://jqueryui.com/demos/progressbar/>

Estos principios defienen buenas practicas sin embargo personalmente siento que en ocasiones tenemos código extra que muchas veces no lo necesitamos p.e. si en algun proyecto solo vamos a necesitar una unica clase de barra(con un unico comportamiento) entonces la mejor opción seria seguir estos principios y generar nuestro propio código _css_ y _javascript_(ó en su defecto quitar la '_paja extra_') lo cual hara más ligera la carga para nuestro navegador ademas que el tamaño de la descarga de nuestras librerias sera mucho menor.

##Comentarios.

>>Lo siento estoy buscando algun mecanismo de agregar comentarios en esta sección, pero me puedes comentar en [**@fitorec**](https://twitter.com/fitorec).


[img_table_dance]: img/table.jpg  "Barra - Table dance"
