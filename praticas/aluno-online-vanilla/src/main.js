import './style.css'

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('button');

email.addEventListener('input', function() {
    const emailErro = document.querySelector('#emailErro');
    emailErro.textContent = '';
});

senha.addEventListener('input', function() {
    const senhaErro = document.querySelector('#senhaErro');
    senhaErro.textContent = '';
});

botao.addEventListener('click', function(e) {
    e.preventDefault();

    const emailErro = document.querySelector('#emailErro');
    const senhaErro = document.querySelector('#senhaErro');

    const emailValor = email.value.trim();

    emailErro.textContent = '';
    senhaErro.textContent = '';

    if (email.value == '') {
        emailErro.textContent = 'E-mail é obrigatório';
        return;
    }

    const temArroba = emailValor.includes('@');
    const temPonto = emailValor.includes('.');
    const temEspaco = emailValor.includes(' ');
    const posArroba = emailValor.indexOf('@');

    if (!temArroba || !temPonto || temEspaco || posArroba <= 0) {
        emailErro.textContent = 'Por favor, insira um e-mail válido';
        return; 
    }

    if (senha.value == '') {
        senhaErro.textContent = 'Senha é obrigatória';
        return;
    }

    if (senha.value.length < 8) {
        senhaErro.textContent = 'Senha deve ter no mínimo 8 caracteres';
        return;
    }

    window.location.href = 'index.html';
});