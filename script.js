// Função para verificar se o CPF é válido
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
  
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
  
    // Valida 1o digito
    var add = 0;
    for (var i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
  
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
  
    return true;
  }
  
  // Função para formatar o CPF
  function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  
  // Função para verificar CPF ao clicar no botão
  document.getElementById('verifyBtn').addEventListener('click', function() {
    var cpfInput = document.getElementById('cpfInput').value;
    var resultElement = document.getElementById('result');
  
    if (validarCPF(cpfInput)) {
      resultElement.textContent = 'CPF válido: ' + formatarCPF(cpfInput);
      resultElement.className = 'text-success';
    } else {
      resultElement.textContent = 'CPF inválido';
      resultElement.className = 'text-danger';
    }
  });
  