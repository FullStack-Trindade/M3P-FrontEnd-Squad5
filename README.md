
# LifeCare
## Aplicativo de Gestão Médica 

![Logo](https://a.imagem.app/oxMYst.png)

## Introdução:
 
A LABMedicine LTDA, empresa líder no segmento tecnológico de gestão hospitalar, foi
selecionada em edital e recebeu um aporte financeiro para aprimorar seu principal produto, o LABMedical. A expectativa é desenvolver um novo sistema no formato white-label, capaz de ser personalizado e comercializado para postos de saúde e clínicas particulares em todo o país.

O modelo white-label consiste em um software padrão que pode ser personalizado com as cores, tipografias, logotipos e demais elementos visuais da identidade do cliente, proporcionando um resultado personalizado.

O perfil de sua squad chamou a atenção dos gestores da empresa, e vocês foram designados para criar o novo produto, utilizando as tecnologias HTML, CSS, JavaScript, React, Node, PostgreSQL e Express. Para a elaboração do projeto, será necessário selecionar uma estrutura padrão de layout e um nome e identidade visual fictícios para a clínica, a fim de ilustrar o uso do software durante a apresentação aos gestores.



## Autores (SQUAD-5 "Fora de Script"):

- ***César Sant'anna Nahra*** (https://github.com/CesarNahra)
- ***Emanuel de Abreu Barbosa*** (https://github.com/emanuel-abreu)
- ***Glauton Osório*** (https://github.com/glautonOsorio)
- ***Ícaro Ferreira de Araújo Filho*** (https://github.com/icarofilho)
- ***Laércio Luiz Barbosa*** (https://www.github.com/LLBarbosa)


## Descrição:

**LifeCare** é um projeto avaliativo do curso de Desenvolvimento Fullstack do LAB365/SENAI-SC. É uma aplicação web completa, desenvolvida para operações gerenciais comuns aos ambientes de serviços da área da Saúde, permitindo todos os processos de cadastro de consultas, exames e outras informações atreladas ao escopo de um paciente. O software foi construído com uma interface que possui campos de formulários validados, registros de logs, customizações de temas e permissões de acessos bem definidas, em conformidade com os tipos de usuários (ADMINISTRADOR - MÉDICO - ENFERMEIRO). O presente repositório é destinado ao **front-end** da aplicação.

### Back-end do projeto:
https://github.com/FullStack-Trindade/M3P-BackEnd-Squad5
## Tecnologias Utilizadas:

- Javascript
- Node.js + NPM
- React.js
- Vite.js

## Instalação:


Clone o projeto no seu editor de preferência:

```bash
 $ git clone https://github.com/FullStack-Trindade/M3P-FrontEnd-Squad5.git
```
Entre na pasta do projeto:

```
$ cd LifeCare
```

Instale as dependências:

```bash
 $ npm install
```

Inicie o servidor:

```bash
 $ npm run dev
```

Acesse a porta localmente:
```
http://localhost:5173/
```

## Variáveis de Ambiente:

Para rodar o projeto, você vai precisar adicionar a seguinte variável de ambiente no seu arquivo ```.env```, informando a porta utilizada no back-end:
```
VITE_API_URL="http://localhost:3000/api"
```





## Melhorias:
- A responsividade da interface pode ser aprimorada;
- "Componentizar" ainda mais a aplicação para facilitar a manutenbilidade;
- Otimizar o uso dos recursos disponiveis na biblioteca React.