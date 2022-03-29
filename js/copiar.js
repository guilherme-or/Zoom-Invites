// copia o convite para a área de transferência
function copiar() {
    let convite = document.getElementById('colaConvite');
    convite.select();
    convite.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(convite.value);

    // exibe um texto de confirmação
    let check = 'Convite copiado com sucesso!';
    document.getElementById('check').textContent = check;
}