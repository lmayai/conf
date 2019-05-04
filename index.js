/**
 * Al terminar de cargar la pagina se toman
 * todos los elementos con data.toggle=tooltip y
 * luego se activan
*/
$(function (){
    $('[data-toggle="tooltip"]').tooltip()
})