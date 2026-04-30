# Eduardo Ricardo — Portfólio

Portfólio pessoal (one-page) para candidatura a estágio em Engenharia de Produção.

Status: refactor/mvc-onepage (arquitetura MVC: Model, View, Controller)

Arquivos principais
- `index.html` — View principal, com hero estático e seções estruturadas para conteúdo fixo.
- `data/profile.json` — Model com todos os dados do perfil.
- `assets/js/controller.js` — Controller que faz `fetch` em `data/profile.json` e popula skills, experiências, formação e projetos.
- `assets/css/styles.css` — Estilos extraídos de `index.html`.
- `projects.html` — Página de projetos detalhados.
- `ROADMAP.md` — guia de trabalho, objetivos e checklist do repositório.

Como testar localmente
1. Abra `index.html` no navegador (duplo clique) ou use uma extensão Live Server.
2. Verifique que o conteúdo é populado automaticamente (se o browser bloquear fetch local, use um servidor simples como `python -m http.server`).

Deploy
- Este repositório está preparado para GitHub Pages (conteúdo servido do root). Ao subir para `main` o site será publicado como `https://<username>.github.io`.


