## Conferences website using Bootstrap

### Que es un framework frontend
Conocidos tambien como framework CSS:
- Organizan la estructura de los estilos
- Lo prinicipal que trae es la grilla, ya que organiza el contenido. 
- Estios de tipografia
- Componentes armados

Por que usarlos
- Permite ahorrar tiempo
- Es responsive-design
- No muestra incompatibilidad con browsers+++

### Sitio de bootstrap
https://getbootstrap.com/docs/4.1/getting-started/introduction/

### GRILLA (Layout)
Los containers son los componentes básicos para usar grillas
Se crea un div con la clase container
```html
<div class="container">
  <!-- Content here -->
</div>
```
EL contenedor tiene un ancho ficho, que se adpata a los tamaños de la pantalla.
Con .conteiner-fluid siempre ocupa el ancho de la pantalla

#### GRID - FIlas y columnas
Cada div con filas .row tiene como máxima 12 columnas, excepto si se modifica.
Cada col tiene su espacio, donde se divide el espacio equitativamente.

Se puede observar a continuación que es posible dividir las grillas entre filas y columnas de cada fila. Inicialmente la división se hace en 12 columnas. 
```html
<div class="row">
    <div class="col">
        1-1
    </div>
    <div class="col">
        1-2
    </div>
</div>
<div class="row">
    <div class="col">
        2-1
    </div>
    <div class="col">
        2-2
    </div>
    <div class="col">
        2-2
    </div>
</div>
```

SI se asignan un espacio de columna de 3 y otro de 10, la de 10 la pone de bajo, y no en la misma fila
```html
<div class="col-3">
    3 espacios
</div>
<div class="col-10">
    10 espacios
</div>
```

Ella hace una ubicación inteligente entre 12 espacios, si se sobrepasa, se baja de la fila.

* Se puede decir que ocupe cierto tamaño, para ciertos tamaños de pantallas:
Aqui se está diciendo que ocupe 12 para cualquier tamaño, y que para grandes ocupe 3 y 9.
```html
<div class="col-12 col-lg-3" style="background:green">
    3 
</div>
<div class="col-12 col-lg-9"  style="background:blue">
    5
</div>
```

Los breakpoint de tamaños son:  
- .col-sm :  >= 576px
- .col-md :  >= 768px
- .col-lg :  >= 992px
- .col-xl :  >= 1200px

#### PADDING 
Clases que se le ponen a los elementos para darles padding
.pb-4: padding bottom
.pt-4 padding top
``` html
<footer id="footer" class="pb-4 pt-4">
```

#### NAVBAR
Barra de navegación

#### MARGIN
.mr-auto

#### DISPLAYS
.d-none: para no mostrarla
.d-md-block: Block para tamaños medianos
Sirve para cualquier tamaño

#### Alineación
.text-center
.text-left
-text-md-left (Se puede definir para tamaños)

#### Buttons
.btn btn-success

#### Cards
COntenedores con múltiples variables

#### Badges
Estos son pequeños textos mostrados.
Los cuales son un span con texto al que se le aplica un estilo.
.badge .badge-secondary

#### Contenedor fluidos
Contenedores con ancho completo
.container-fluid

