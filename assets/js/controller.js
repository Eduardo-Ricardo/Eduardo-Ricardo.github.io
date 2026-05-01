// Controller: popula as seções dinâmicas com dados de data/profile.json
document.addEventListener('DOMContentLoaded', () => {
  const dataPath = 'data/profile.json';

  fetch(dataPath)
    .then(res => {
      if (!res.ok) throw new Error('Falha ao carregar ' + dataPath);
      return res.json();
    })
    .then(data => populateView(data))
    .catch(err => console.error('Controller error:', err));

  function populateView(data) {
    // Skills
    const skillsContainer = document.querySelector('#skills-container');
    if (skillsContainer && Array.isArray(data.skills)) {
      skillsContainer.innerHTML = '';
      data.skills.forEach(cat => {
        const group = document.createElement('div');
        group.className = 'skill-group';

        const title = document.createElement('h3');
        title.textContent = cat.category || '';

        const row = document.createElement('div');
        row.className = 'badge-row';

        cat.items.forEach(it => {
          const span = document.createElement('span');
          span.className = 'badge';
          span.textContent = `${it.name}`;
          row.appendChild(span);
        });

        group.appendChild(title);
        group.appendChild(row);
        skillsContainer.appendChild(group);
      });
    }

    // Experiences
    const expContainer = document.querySelector('#experience-container');
    if (expContainer && Array.isArray(data.experiences)) {
      expContainer.innerHTML = '';
      data.experiences.forEach(e => {
        const li = document.createElement('li');
        const meta = document.createElement('div');
        meta.className = 'meta';
        meta.innerHTML = `<span>${escapeHtml(formatPeriod(e.start, e.end))}</span><span>${escapeHtml(e.company)}</span>`;
        const strong = document.createElement('strong');
        strong.textContent = e.role || '';
        const p = document.createElement('p');
        p.textContent = [
          ...(Array.isArray(e.responsibilities) ? e.responsibilities : []),
          e.impact ? `Impacto: ${e.impact}` : ''
        ].filter(Boolean).join(' | ');
        li.appendChild(meta);
        li.appendChild(strong);
        li.appendChild(p);
        expContainer.appendChild(li);
      });
    }

    // Education
    const eduContainer = document.querySelector('#education-container');
    if (eduContainer && data.education) {
      eduContainer.querySelector('strong') && (eduContainer.querySelector('strong').textContent = data.education.course || '');
      const p = eduContainer.querySelector('p');
      if (p) p.textContent = `${data.education.school || ''}${data.education.period ? ', ' + data.education.period : ''}`;
    }

    // Projects preview (basic)
    const projectsContainer = document.querySelector('#projects-container');
    if (projectsContainer && Array.isArray(data.projects)) {
      projectsContainer.innerHTML = '';

      data.projects.forEach(proj => {
        const article = document.createElement('article');
        article.className = 'project-card';

        const title = document.createElement('h3');
        title.textContent = proj.title || '';

        const summary = document.createElement('p');
        summary.textContent = proj.summary || '';

        const techs = document.createElement('div');
        techs.className = 'project-techs';

        (Array.isArray(proj.techs) ? proj.techs : []).forEach(tech => {
          const tag = document.createElement('span');
          tag.className = 'badge';
          tag.textContent = tech;
          techs.appendChild(tag);
        });

        article.appendChild(title);
        article.appendChild(summary);
        article.appendChild(techs);

        if (proj.link) {
          const link = document.createElement('a');
          link.className = 'btn btn-secondary';
          link.href = proj.link;
          link.textContent = 'Ver projeto';
          article.appendChild(link);
        }

        projectsContainer.appendChild(article);
      });
    }

    const aboutContainer = document.querySelector('#about-container p');
    if (aboutContainer && data.about) {
      aboutContainer.textContent = data.about;
    }
  }

  // helpers
  function formatPeriod(start, end) {
    if (!start && !end) return '';
    return `${start || ''} - ${end || ''}`;
  }
  function escapeHtml(str) {
    if (!str && str !== 0) return '';
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[s]));
  }
});
