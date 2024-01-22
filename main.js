$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novoItemdaLista = $('#tarefa-nova').val();
        const novoItem = $('<li></li>');
        $(`<p>${novoItemdaLista}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefa-nova').val('');
    })

    $("ul").on("click", "li", function () {
        const item = $('#itens').val();
        const itemRiscado = $('<li></li>');
        $(`<p style = text-decoration: line-through>${item}</p>`).appendTo(itemRiscado);
    })
})
