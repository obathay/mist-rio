const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=15;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('.parametro-senha-botao');
botoes[0].onclick=diminuirTamanho;

function diminuirTamanho(){
    if (tamanhoSenha>7){
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}
}

botoes[1].onclick=aumentarTamanho;

function aumentarTamanho(){
    if (tamanhoSenha<15){
    tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;
}
}
