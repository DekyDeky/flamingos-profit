let ehDivida = false //false = lucro, true = divida

function addItemTabela(){
    const inputNome = document.getElementById('input-nome').value;
    const inputValor = document.getElementById('input-valor').value;

    const classNome = inputNome.replace(/\s+/g, "-");

    //Criação da Estrutura
    const novaLinha = document.createElement("tr");
    novaLinha.classList.add("linha", "tabela_linha", classNome);
    novaLinha.setAttribute('id', classNome);

    //Criação de
    const novaCelulaItem = document.createElement("td")
    novaCelulaItem.classList.add("cell", "item", "tabela_item-lucro", classNome);
    novaLinha.appendChild(novaCelulaItem);

    const novaCelulaValor = document.createElement("td");
    novaCelulaValor.classList.add("cell", "item", "tabela_item-valor", classNome);
    novaLinha.appendChild(novaCelulaValor);

    //Adicione os valores para suas células
    novaCelulaItem.innerHTML = inputNome;
    novaCelulaValor.innerHTML = "R$ " + inputValor;

    tabelasItens.push(classNome);

    //Checa se é lucro ou dívida.
    if(!ehDivida){
        tabelaLucros.lastElementChild.insertBefore(novaLinha, linhaTotalLucro);
        tabelaItensLucro.push(classNome);
    }else if(ehDivida){
        tabelaDividas.lastElementChild.insertBefore(novaLinha, linhaTotalDivida);
        tabelaItensDivida.push(classNome);
    }    

}

function addTo(array, variavel, valor){
    array.push(valor);
    variavel += valor
}

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    addItemTabela();
    fecharTela()
})