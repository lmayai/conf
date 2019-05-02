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
```
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
```
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