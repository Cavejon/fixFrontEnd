document.addEventListener("DOMContentLoaded", function () {
    Inputmask("999.999.999-99").mask("#cpf"); // CPF
    Inputmask("99.999.999-9").mask("#rg"); // RG
    Inputmask("email").mask("#email"); // Email (validação)
    Inputmask("(99) 9999-9999").mask("#telefone"); // Telefone fixo
    Inputmask("(99) 9 9999-9999").mask("#celular"); // Celular
    Inputmask("99999-999").mask("#cep"); // CEP
    Inputmask("99.999.999/9999-99").mask("#cnpj"); // CNPJ
    Inputmask("9999 9999 9999 9999").mask("#cartao"); // Cartão de crédito
    Inputmask("999999-9").mask("#conta"); // Conta corrente

    // Máscara para salário com moeda brasileira
    Inputmask({
        alias: "currency",
        prefix: "R$ ",
        groupSeparator: ".",
        radixPoint: ",",
        digits: 2,
        autoUnmask: true,
        rightAlign: false
    }).mask("#salario");
});