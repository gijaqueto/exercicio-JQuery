$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novoItemdaLista = $('#tarefa-nova').val();
        const novoItem = $('<li></li>');
        $(`<p>${novoItemdaLista}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefa-nova').val('');
    })

    $('ul').on('click', 'li', function () {

        $(this).css('text-decoration', 'line-through');

    });
});