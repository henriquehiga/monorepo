import { ApiResponseModel, usernameValidator } from '@monorepo/common';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Frontend</h1>
  <p id="p-loading-message">Carregando dados da API...</p>
  <input id="username" />
`;

fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then((data: ApiResponseModel) => {
        const p = document.createElement('p');
        p.style.color = 'green';
        p.innerText = `Resposta da API: ${data.data.message} (Timestamp: ${data.data.timestamp})`;
        app.appendChild(p);
        document.getElementById('p-loading-message')?.remove();
    })
    .catch(err => {
        console.error(err);
        app.innerHTML += `<p style="color:red">Erro ao conectar na API.</p>`;
    });

const inputUsername = document.getElementById('username') as HTMLInputElement;
const pErrorMessageElement = document.createElement('p');
app.appendChild(pErrorMessageElement);

inputUsername.addEventListener('input', () => {
    const isValid = usernameValidator(inputUsername.value);

    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: inputUsername.value })
    })
        .then(res => res.json())
        .catch(err => {
            console.error(err);
        });

    if (isValid) {
        pErrorMessageElement.style.color = 'green';
        pErrorMessageElement.innerText = `Nome de usuário válido!`;
    } else {
        pErrorMessageElement.style.color = 'red';
        pErrorMessageElement.innerText = `Nome de usuário inválido!`;
    }
});