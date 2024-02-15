 // Variável para armazenar o texto criptografado
 let textoEncriptado = "";


function criptografarTexto() {
    // Obtém o texto a ser criptografado
    let textoEncriptar = document.getElementById('textoCriptografar').value.toLowerCase();
    
    
    //Variável para armazenar o texto criptografado
    textoEncriptado = "";

    // Loop para percorrer cada letra do texto
    for (let i = 0; i < textoEncriptar.length; i++) {
        // Obtém a letra atual
        let letraAtual = textoEncriptar[i];

        if (letraAtual === 'a') {
            // Substitui a letra 'a' por 'ai'
            textoEncriptado += 'ai';
        } else if (letraAtual === 'e') {
            // Substitui a letra 'e' por 'enter'
            textoEncriptado += 'enter';
        } else if (letraAtual === 'i') {
            // Substitui a letra 'i' por 'imes'
            textoEncriptado += 'imes';
        } else if (letraAtual === 'o') {
            // Substitui a letra 'o' por 'ober'
            textoEncriptado += 'ober';
        } else if (letraAtual === 'u') {
            // Substitui a letra 'u' por 'ufer'
            textoEncriptado += 'ufer';
        } else {
            // Adiciona a letra original ao texto criptografado
            textoEncriptado += letraAtual;
        }
    }

    var botaoQuadro = document.getElementById('quadro-botao');
    var organizaQuadro = document.getElementsByClassName('principal__quadro')

    limpaQuadro();

    botaoQuadro.style.display = 'block';

    for (var i = 0; i < organizaQuadro.length; i++) {
        organizaQuadro[i].style.justifyContent = 'space-between';
    }


    document.getElementById('textoCriptografado').innerHTML = `<p class='principal__quadro-textoEncriptado id=textoDescriptado'>${textoEncriptado}<p>`;


}

function limpaQuadro() {
    var imagemQuadro = document.getElementById('quadro-imagem');
    var tituloQuadro = document.getElementById('quadro-titulo');
    var subtituloQuadro = document.getElementById('quadro-subtitulo');
    let textoEncriptar = document.getElementById('textoCriptografar');
    
    imagemQuadro.style.display = 'none';
    tituloQuadro.style.display = 'none';
    subtituloQuadro.style.display = 'none';

    textoEncriptar.value = '';
     
}

function descriptografarTexto() {
    // Obtém o texto a ser Descriptografado
    let textoDesencriptar = document.getElementById('textoCriptografar').value.toLowerCase();

    // Define um objeto de mapeamento para as substituições
    const substituicoes = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufer': 'u'
    };

    // Usa expressões regulares para encontrar e substituir as sequências correspondentes
    let textoDescriptografado = textoDesencriptar.replace(/ai|enter|imes|ober|ufer/g, match => substituicoes[match]);

    var botaoQuadro = document.getElementById('quadro-botao');
    var organizaQuadro = document.getElementsByClassName('principal__quadro')

    limpaQuadro();

    botaoQuadro.style.display = 'block';

    for (var i = 0; i < organizaQuadro.length; i++) {
        organizaQuadro[i].style.justifyContent = 'space-between';
    }
    

    document.getElementById('textoCriptografado').innerHTML = `<p class='principal__quadro-textoEncriptado id="copiaTexto"'>${textoDescriptografado}<p>`;
    
}

function copiarTexto() {
    areaTransferencia(textoEncriptado);
}

function areaTransferencia(texto) {
    navigator.clipboard.writeText(texto);
}

