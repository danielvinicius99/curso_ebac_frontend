var formulario = document.getElementById('form');

formulario.addEventListener('submit', function (e) {
    var campoA = document.getElementById('campo-a').value;
    var campoB = document.getElementById('campo-b').value;

    var ValorAConvertidoNum = parseInt(campoA);
    var ValorBConvertidoNum = parseInt(campoB);

    if (ValorBConvertidoNum > ValorAConvertidoNum) {
        alert("O formulário está válido.");
    } else {
        alert("O formulário não está válido.");
        e.preventDefault();
    }
});
