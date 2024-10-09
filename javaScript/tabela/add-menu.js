const add_button = document.getElementById('add_button');
const fechar = document.getElementById('fechar');

const inserir_valores = document.getElementById('inserir-valors');
const background = document.getElementById('background');

function fecharTela(){
    background.style.filter = 'none';
    inserir_valores.style.display = 'none';
}

add_button.addEventListener('click', function(){
    inserir_valores.style.display = 'flex'
    background.style.filter = 'blur(10px)'
})

fechar.addEventListener('click', function() {
    fecharTela()
})