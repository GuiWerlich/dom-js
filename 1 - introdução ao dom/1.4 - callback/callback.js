function imprimeMensagem(mensagem, callback) {
    console.log(mensagem);
    callback();
}
  
imprimeMensagem("Olá, mundo!", function() {
console.log("Callback executado!");
});
