const $inputValores = document.querySelectorAll('.controle-contador')
const $estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    'bracos': {
        'forca': 29,
        'poder': 35,
        'energia': -21,
        'velocidade': -5
    },
    'blindagem': {
        'forca': 41,
        'poder': 20,
        'energia': 0,
        'velocidade': -20
    },
    'nucleos': {
        'forca': 0,
        'poder': 7,
        'energia': 48,
        'velocidade': -4
    },
    'pernas': {
        'forca': 27,
        'poder': 21,
        'energia': -32,
        'velocidade': 43
    },
    'foguetes': {
        'forca': 0,
        'poder': 28,
        'energia': 0,
        'velocidade': -2
    }
}

$inputValores.forEach( (e) => {
    e.nextElementSibling.onclick = () => {
        manipulaDados(e, 'somar')
        atualizaEstatisticas(e.nextElementSibling.dataset.peca)
    }
    e.previousElementSibling.onclick = () => {
        manipulaDados(e, 'subtrair')
        atualizaEstatisticas(e.previousElementSibling.dataset.peca, 'subtrair')
    }
} )

function manipulaDados(item, operacao){
    if(operacao === 'subtrair'){
        item.value = parseInt(item.value) - 1 
    }else{
        item.value = parseInt(item.value) + 1 
    }
}

function atualizaEstatisticas(peca, op = 'somar'){
    const valoresPeca = pecas[peca]

    $estatisticas.forEach( (elemento) => {
        if(op == 'somar'){
            elemento.innerText = parseInt(elemento.innerText) + valoresPeca[elemento.dataset.estatistica]
        }
        else{
            elemento.innerText = parseInt(elemento.innerText) - valoresPeca[elemento.dataset.estatistica]
        }
    } )
}