const body = document.querySelector('body')

meuBotao.addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    alert('clicou no botão!')
});

body.addEventListener('click', function(){
    alert('clicou no body!')
});