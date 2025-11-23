import { ApiResponseModel } from '@monorepo/common/src/models';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Frontend</h1>
  <p id="p-loading-message">Carregando dados da API...</p>
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