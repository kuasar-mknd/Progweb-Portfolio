/******************************************************************************
<?php
    function calculerSurface($rayon) {
       return pi() * $rayon * $rayon;
    }
    echo(calculerSurface(4));
?>
 *****************************************************************************/

function calculerSurface(rayon) {
    return Math.PI * rayon * rayon;
}
console.log(calculerSurface(4));