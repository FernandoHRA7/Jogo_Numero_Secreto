
let listaDeNumerosSdorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, "Brazilian Portuguese Female",
{rate:1.2});
}
function exibirMensagem(){
exibirTexto("h1" , "Jogo do número secreto");
exibirTexto("p" , "Escolha um número de 1 e 10");
}
function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirTexto("h1", "Acertou!");
        let palavraTentaviva = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentaviva}`;
        exibirTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if ( chute > numeroSecreto){
            exibirTexto("p", "O número secreto é menor");
        } else {
            exibirTexto("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista =  listaDeNumerosSdorteados.length;
    if(quantidadeDeElementosNaLista == numeroEscolhido) {
        listaDeNumerosSdorteados = []
    }
    if(listaDeNumerosSdorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSdorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSdorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirMensagem();