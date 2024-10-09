document.getElementById('toggle').addEventListener('change', function() {
    if (this.checked) {
      console.log('Dívida ativada');
      ehDivida = true;
    } else {
      console.log('Lucro ativado');
      ehDivida = false;
    }
  });