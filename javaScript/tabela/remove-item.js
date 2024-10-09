botaoRemover.addEventListener('click', function(){
    
})

function selectionRemove(){
    tabelasItens.forEach(element => {
        const DOMElement = document.getElementById(element);

        DOMElement.addEventListener("mouseenter", (event) => {
            DOMElement.style.backgroundColor = '#FFD0D0';
        })
    });
}

function removeItem(tr, item){
    const classes = document.getElementById(tr)

    for(i = 0; i <= reqClasses.length; i++){
        if(reqClasses != item){

        }
    }
}