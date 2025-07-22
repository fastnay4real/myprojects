function gerarSenha() {
    const length = document.getElementById('length').value;
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    let chars = '';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%&*()-_=+[]{};:,.<>?/';

    if (chars === '') {
        document.getElementById('resultado').innerText = '⚠️ Selecione ao menos um tipo de caractere!';
        return;
    }

    let senha = '';
    for (let i = 0; i < length; i++) {
        senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('resultado').innerText = senha;
}

function copiarSenha() {
    const senha = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(senha).then(() => {
        alert('Senha copiada!');
    }).catch(() => {
        alert('Erro ao copiar!');
    });
}
