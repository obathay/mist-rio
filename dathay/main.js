const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=15;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('.parametro-senha-botao');
const campoSenha=document.querySelector("#campo-senha");
const letrasMaiusculas="ABCDEFGHIJKLMNOPQRSTUVWXYZÇ";

botoes[0].onclick=diminuirTamanho;

function diminuirTamanho(){
    if (tamanhoSenha>7){
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}
}

botoes[1].onclick=aumentarTamanho;
geraSenha();

function aumentarTamanho(){
    if (tamanhoSenha<15){
    tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;
}
}

function geraSenha(){
    let senha=" ";
    for (let i=0; i<tamanhoSenha;i++){
    let numeroAlaetorio=Math.random()*letrasMaiusculas.length;
    numeroAlaetorio=Math.floor(numeroAlaetorio);
    senha=senha+letrasMaiusculas[numeroAlaetorio];
}
 campoSenha.value=senha;
}
