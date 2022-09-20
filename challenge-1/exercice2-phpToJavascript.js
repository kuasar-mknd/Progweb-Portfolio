/******************************************************************************
<?php
    function calculerSurface($rayon) {
       return pi() * $rayon * $rayon;
    }
    echo(calculerSurface(4));
?>
 *****************************************************************************/

function calculerSurface(rayon) {
    return Math.PI * Math.sqrt(rayon);
}
console.log(calculerSurface(1));