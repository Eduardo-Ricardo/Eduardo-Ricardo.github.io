# Roadmap do Repositório

Este arquivo é o ponto de partida para organizar o trabalho no portfólio.

## Objetivo Principal

Transformar o site em um portfólio claro, moderno e objetivo para candidatura a estágio em Engenharia de Produção, mantendo a arquitetura MVC e o layout one-page como base.

## O que este repositório precisa cumprir

- Apresentar meu perfil de forma profissional e rápida de ler.
- Destacar que estou buscando estágio em Engenharia de Produção.
- Manter o conteúdo sempre atualizado com meus dados reais.
- Separar responsabilidades entre Model, View e Controller.
- Manter o site responsivo e fácil de navegar em celular e desktop.
- Ter uma página separada para projetos quando eu começar a adicionar mais conteúdo.

## Como trabalhar neste repositório

1. Comece sempre pelo conteúdo, não pelo visual.
2. Atualize primeiro os dados reais no Model (`data/profile.json`).
3. Depois ajuste a View (`index.html`) para receber esses dados com placeholders.
4. Em seguida, altere o Controller (`assets/js/controller.js`) para popular os elementos da página.
5. Só depois faça ajustes de estilo ou refinamento visual.
6. Sempre confira se o texto continua coerente com a vaga que eu quero.
7. Se houver dúvida sobre um dado, deixe em branco e marque para validação.

## Padrão de organização

- `index.html`: página principal em formato one-page.
- `data/profile.json`: dados pessoais, formação, experiência, competências e projetos.
- `assets/css/styles.css`: estilos da interface.
- `assets/js/controller.js`: script que preenche a página com os dados.
- `projects.html`: página complementar com projetos detalhados.
- `README.md`: explicação do projeto e instruções de uso.

## Plano de execução

### Etapa 1: Base do projeto

- [x] Conferir nome do currículo em PDF.
- [x]Confirmar nome, idade e localização corretos.
- [x]Garantir que o conteúdo da home esteja alinhado com a vaga de estágio.

### Etapa 2: Conteúdo principal

- [ ] Revisar headline do topo.
- [ ] Ajustar a seção "Sobre mim" para ser curta e objetiva.
- [ ] Manter apenas competências reais e relevantes.
- Atualizar experiências com resultados ou impactos concretos.

### Etapa 3: Estrutura MVC

- [ ] Manter o `index.html` como View.
- [ ] Usar `data/profile.json` como fonte única de dados.
- [ ] Manter `assets/js/controller.js` como responsável por preencher a View.

### Etapa 4: Expansão do portfólio

- [ ] Adicionar projetos breves com links para detalhes.
- [ ] Criar ou ampliar `projects.html` quando houver novos cases.
- [ ] Melhorar o conteúdo com foco em estágio e área industrial/administrativa.

### Etapa 5: Qualidade final

- [ ] Testar responsividade.
- [ ] Testar links de email, telefone e download do currículo.
- [ ] Revisar ortografia e consistência dos dados.
- [ ] Conferir se o site continua leve e rápido.

## Checklist antes de concluir uma alteração

- [ ] O conteúdo está alinhado ao estágio em Engenharia de Produção.
- [ ] O nome, idade e localização estão corretos.
- [ ] O currículo em PDF abre e faz download.
- [ ] O site funciona bem em celular.
- [ ] Não há textos genéricos ou antigos sobrando.
- [ ] O projeto continua consistente com a arquitetura MVC.

## Próximos objetivos

- Criar uma versão da página mais forte para vagas específicas.
- Adicionar projetos reais com descrição curta e resultado.
- Melhorar a apresentação dos resultados das experiências.
- Deixar o README e a documentação sempre atualizados.

## Observação

Se eu mudar meu foco de vaga, este roadmap deve ser atualizado antes de qualquer refatoração maior.
