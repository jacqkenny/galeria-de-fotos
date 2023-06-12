$ (document).ready(function() {
    $('header button').click(function() {
        $('form').slidedown();
    })

$('#botao-cancelar').click(function() {
    $('form').slideup();
})

$('form').on('subimit',function(e) {
    e.preventDefault();
const enderecoDaNovaImagem = $('#endereco-imagem-novo').val();
const novoItem = $('<li style="display: none"></li>');
$(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
$(`
    <div class="overlay-imagem-link">
        <a href="${endereçoDaNovaImagem}"target="_blank"litle = "Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
    </div>
    `).appendto(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereco-imagem-nova').val('')
    })
})