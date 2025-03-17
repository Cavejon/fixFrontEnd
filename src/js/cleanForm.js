function cleanInputs() {
    const inputs = document.querySelectorAll('.card-estrutura input');
    const selects = document.querySelectorAll('.card-estrutura select');
    const textareas = document.querySelectorAll('.card-estrutura textarea');

    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else if (input.type === 'file') {
            input.value = '';
        } else {
            input.value = '';
        }
    });


    selects.forEach(select => {
        select.selectedIndex = 0;
    });


    textareas.forEach(textarea => {
        textarea.value = '';
    });

    Swal.fire({
        title: "Todos os Campos foram limpos!",
        icon: "success",
        draggable: true
    });
}

Inputmask({
    mask: "999.999.999-99",
    placeholder: "_"
}).mask("#cpf");

Inputmask({
    mask: "99.999.999-9",
    placeholder: "_"
}).mask("#rg");

Inputmask({
    alias: "email"
}).mask("#email");

Inputmask({
    mask: "(99) 9999-9999",
    placeholder: "_"
}).mask("#telefone");

Inputmask({
    mask: "(99) 9 9999-9999",
    placeholder: "_"
}).mask("#celular");

// Endereço não tem máscara fixa

Inputmask({
    mask: "99999-999",
    placeholder: "_"
}).mask("#cep");

Inputmask({
    mask: "99.999.999/9999-99",
    placeholder: "_"
}).mask("#cnpj");

Inputmask({
    alias: "currency",
    prefix: "R$ ",
    groupSeparator: ".",
    radixPoint: ",",
    digits: 2,
    autoUnmask: true,
    rightAlign: false
}).mask("#salario");

Inputmask({
    mask: "9999 9999 9999 9999",
    placeholder: "_"
}).mask("#cartao");

Inputmask({
    mask: "999999-9",
    placeholder: "_"
}).mask("#conta");
