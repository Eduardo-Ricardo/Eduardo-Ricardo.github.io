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
        group.className = 'badge-group';

        const title = document.createElement('strong');
        title.className = 'badge-group-title';
        title.textContent = cat.category || '';

        const items = document.createElement('div');
        items.className = 'badge-row badge-group-items';

        (Array.isArray(cat.items) ? cat.items : []).forEach(it => {
          const span = document.createElement('span');
          span.className = 'badge';
          span.textContent = it.name || '';
          items.appendChild(span);
        });

        group.appendChild(title);
        group.appendChild(items);
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
      const list = document.createElement('div');
      list.className = 'project';
      projectsContainer.innerHTML = '';

      data.projects.forEach(proj => {
        const container = document.createElement('div');
        container.className = 'panel';
        container.innerHTML = `
          <strong>${escapeHtml(proj.title)}</strong>
          <p>${escapeHtml(proj.summary)}</p>
          <a href="${escapeHtml(proj.link)}">Ver projeto</a>
        `;
        list.appendChild(container);
      });

      projectsContainer.appendChild(list);
      const more = document.createElement('a');
      more.className = 'btn btn-secondary';
      more.href = 'projects.html';
      more.textContent = 'Ver todos os projetos';
      projectsContainer.appendChild(more);
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
