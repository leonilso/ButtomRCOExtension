# 📘 Extensão RCO - Importador de Notas via CSV

Desenvolvida por **Leonilso Fandres Wrublak** em **22/08/2025**, esta extensão permite importar notas diretamente para o sistema **RCO** usando arquivos CSV. Ideal para professores que desejam agilizar o lançamento de avaliações em massa.

---

## ⚙️ Funcionalidades

- Adiciona um botão "Importar CSV" na interface do RCO.
- Permite selecionar um arquivo `.csv` com as notas dos alunos.
- Preenche automaticamente os campos de nota com base no nome do aluno.
- Compatível com:
  - CSVs exportados do **Google Classroom**
  - CSVs personalizados no formato `Nome;Nota`

---

## 📦 Instalação

1. Acesse as extensões do seu navegador:
  - Google Chrome acesse chrome://extensions/
  - Microsoft Edge acesse edge://extensions/
2. Ative o modo desenvolvedor nas extensões
3. Faça o Upload da pasta **"buttomRCO"**

> **⚠️ Atenção:** Esta extensão depende da estrutura atual do site RCO. Mudanças no layout ou nos elementos podem tornar a extensão obsoleta.

---

## 📝 Formatos de CSV suportados

### 1. Google Classroom (6 colunas)
Sobrenome,Nome,Email,Nota,Status,Comentários

Silva,João,joao@email.com,85,Entregue,

### 2. Personalizado (2 colunas)
nome;nota

João Silva;8.5


> Notas do Google Classroom são convertidas para escala de 0 a 10 automaticamente.

---

## ✅ Requisitos

- Navegador com suporte a JavaScript moderno.
- Acesso ao site do RCO com permissões para lançar notas.

---

## 🧠 Observações

- Os nomes dos alunos são normalizados (acentos removidos) para evitar incompatibilidades.
- O botão e o seletor de arquivo são removidos após a inserção das notas.
- O script não armazena dados nem realiza conexões externas.

---

## 📌 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usar, modificar e compartilhar com as devidas citações da autoria.

---

## 🤝 Contribuições

Sugestões, melhorias ou correções são bem-vindas! Basta abrir uma issue ou enviar um pull request.

---

## 📫 Contato

Você pode me encontrar em [GitHub](https://github.com/leonilso) ou pelo e-mail: **wrublak.leonilso@escola.pr.gov.br**

