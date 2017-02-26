//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');
//mostrar la primer imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD(){
    slider.animate({
        marginLeft:'-'+200+'%'
    }   ,700, function(){
        
    });
}

siguiente.on('click', function(){
             moverD();
});

