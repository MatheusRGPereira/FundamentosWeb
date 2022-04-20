


let nome= document.getElementById('nome')
let email=document.getElementById('email')
let assunto=document.getElementById('assunto')

function enviar(){
    if(nome.value == "" || email.value == "" ||assunto.value == ""){
         alert ("Todos os campos devem ser prenchidos")
        return true;
    }else{
        alert ("olá " +nome.value+" Muito obrigada pelo feedback")
        return false
    }
}