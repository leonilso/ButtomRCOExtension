// Extensão desenvolvida por Leonilso Fandres Wrublak em 22/08/2025 versão 1.0
// Esta extensão modifica o site do RCO e possibilita adcionar notas via CSV
// Ela depende dos elementos do site do RCO, ou seja, pode ficar obsoleta quando os desenvolvedores modificarem a estrutura do site 


function criarBotaoInserirCSV(){
  // Seleciona a div dos botões
  const divBotoes = document.getElementsByClassName("d-flex flex-column flex-sm-row justify-content-center")[0];

  // Cria o botão/seletor de arquivo CSV
  const botaoEnviarCSV = document.createElement('button');
  botaoEnviarCSV.className = 'btn mb-1 mx-1 btn-primary';
  botaoEnviarCSV.innerHTML = '<i class="fas fa-file-import"></i> Importar CSV';

  const inputArquivoCSV = document.createElement('input');
  inputArquivoCSV.type = 'file';
  inputArquivoCSV.accept = '.csv';
  inputArquivoCSV.style.display = 'none';

  botaoEnviarCSV.addEventListener('click', () => {
    inputArquivoCSV.click();
  });

  // Lê o arquivo CSV e converte em objeto NOME: NOTA
  const objetoNotas = {};

  inputArquivoCSV.addEventListener('change', (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
      botaoEnviarCSV.innerText = arquivo.name;
      const leitor = new FileReader();

      leitor.onload = function(e) {
          const texto = e.target.result; 
          const linhas = texto.trim().split("\n");

          // Nessa versão tem dois casos, o primeiro é usando CSV gerado pelo Google Classroom (a verificação é feita pela quantidade de colunas), o segundo é por CSV próprio com o nome dos alunos e nota
          if(linhas[0].split(",").length == 6){
            for (let i = 1; i < linhas.length; i++) {
              const [sobrenome, nome, email, nota, status, comentarios] = linhas[i].split(",");
              objetoNotas[nome.trim() + " " + sobrenome.trim()] = parseFloat(nota.trim())/10;
            }
          } else {
            for (let i = 1; i < linhas.length; i++) {
              const [nome, nota] = linhas[i].split(";");
              objetoNotas[nome.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")] = parseFloat(nota.trim());
            }
          }


      };
      leitor.readAsText(arquivo); 
    }
  });
  // Adiciona o botão e o formulário no RCO
  divBotoes.appendChild(botaoEnviarCSV);
  divBotoes.appendChild(inputArquivoCSV);

  // Adiciona o evento de input no botão avançar
  const botaoAvancar = divBotoes.children[0];
  botaoAvancar.addEventListener('click', (event) => {
      setTimeout(()=>{
          if(objetoNotas){
              const roleGroupNotas = document.getElementsByTagName("tbody")[0];
              const listaAlunos = roleGroupNotas.children;
              for (let i = 0; i < listaAlunos.length; i++){
                  if(listaAlunos[i].style.display != 'none'){
                      let nomeAluno = listaAlunos[i].children[1].innerText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                      let inputAluno = listaAlunos[i].children[2].children[0].children[0];
                      if (objetoNotas.hasOwnProperty(nomeAluno)) {
                        inputAluno.value = objetoNotas[nomeAluno];
                        inputAluno.dispatchEvent(new Event("input"));
                      }
                  }
              } 
            botaoEnviarCSV.remove();
            inputArquivoCSV.remove();
          }
      }, 500)
  })
}
criarBotaoInserirCSV()




