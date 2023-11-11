$('document').ready(function () {
    
    
    
    $('form').on("submit", function (e) {
    e.preventDefault();
    
    var tarefaInput = $('#inputdousuario').val();
    var novaTarefa = $('<li></li>')

    novaTarefa.text(tarefaInput);
    $(novaTarefa).appendTo('ul');
    $('#inputdousuario').val(' ');
    
})

})
$('ul').on("click", "li", function () {
    $(this).css('text-decoration', 'line-through');


})