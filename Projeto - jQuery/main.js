$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(nomeDaTarefa);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
});