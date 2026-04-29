# Eduardo Ricardo — Portfólio

Portfólio pessoal (one-page) para candidatura a estágio em Engenharia de Produção.

Status: refactor/mvc-onepage (arquitetura MVC: Model, View, Controller)

Arquivos principais
- `index.html` — View (HTML) com placeholders que são populados por `assets/js/controller.js`.
- `data/profile.json` — Model com todos os dados do perfil.
- `assets/js/controller.js` — Controller que faz `fetch` em `data/profile.json` e popula a View.
- `assets/css/styles.css` — Estilos extraídos de `index.html`.
- `projects.html` — Página de projetos detalhados.

Como testar localmente
1. Abra `index.html` no navegador (duplo clique) ou use uma extensão Live Server.
2. Verifique que o conteúdo é populado automaticamente (se o browser bloquear fetch local, use um servidor simples como `python -m http.server`).

Deploy
- Este repositório está preparado para GitHub Pages (conteúdo servido do root). Ao subir para `main` o site será publicado como `https://<username>.github.io`.

Checklist antes de publicar
- Verificar `data/profile.json` e confirmar campos: `email`, `phone`, `cv_file`, `location`, `footerYear`.
- Confirmar que `cv_file` existe no repositório com o mesmo nome.
- Testar `mailto:` e `tel:`.
- Testar em mobile (breakpoints) e desktop.

Como contribuir
- Faça uma branch e abra PR contra `main`.

Observações
- Se algum dado em `data/profile.json` estiver incerto, deixe-o vazio e documente no PR quais campos precisam confirmação.
