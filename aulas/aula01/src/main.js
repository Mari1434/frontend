import './style.css'

/* validar o formulário com as regras:
- matrícula > 0 e obrigatória
- senha tamanho > 6 caracteres e obrigatória
 */

const matricula = document.querySelector('#matricula');
const senha = document.querySelector('#senha');
const botao = document.querySelector('button');

botao.addEventListener('click', function(e) {
    const matriculaErro = document.querySelector('#matriculaErro');
    const senhaErro = document.querySelector('#senhaErro');

    matriculaErro.textContent = '';
    senhaErro.textContent = '';

    if (matricula.value == '') {
        matriculaErro.textContent = 'Matrícula é obrigatória';
        return;
    }

    if (parseInt(matricula.value) <= 0) {
        matriculaErro.textContent= 'Matrícula deve ser um número positivo';
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
});