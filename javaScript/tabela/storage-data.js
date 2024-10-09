const tabelaLucros = document.getElementById('tabelaLucros');
const tabelaDividas = document.getElementById('tabelaDividas');
const linhaTotalLucro = document.getElementById('linha-total-lucro');
const linhaTotalDivida = document.getElementById('linha-total-divida');

const botaoAdicionar = document.getElementById('botao-adicionar');
const botaoRemover = document.getElementById('remove_button');

const reqClasses = ["linha", "tabela_linha", "cell", "item", "tabela_item-lucro", "tabela_item-valor"]

let tabelasItens = []
let tabelaItensLucro = [];
let tabelaItensDivida = [];

let lucros = [];
let lucroTotal = 0;

let dividas = [];
let dividasTotal = 0;