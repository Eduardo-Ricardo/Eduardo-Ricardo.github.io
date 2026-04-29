// Controller: popula a View com dados de data/profile.json
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
    safeSet('#name', data.name);
    safeSet('#headline', data.headline);
    safeSet('#location', data.location);
    safeSet('#contact-phone', `Tel: ${data.phone}`);
    const emailAnchor = document.querySelector('#contact-email-anchor');
    if (emailAnchor) {
      emailAnchor.href = `mailto:${data.email}`;
      emailAnchor.textContent = data.email;
    }
    const contactEmailBtn = document.querySelector('#contact-email');
    if (contactEmailBtn) contactEmailBtn.href = `mailto:${data.email}`;

    const cvLink = document.querySelector('#cv-link');
    if (cvLink && data.cv_file) cvLink.href = data.cv_file;

    // Stats
    const statsContainer = document.querySelector('#stats-container');
    if (statsContainer && Array.isArray(data.stats)) {
      statsContainer.innerHTML = ''; // clear fallback
      data.stats.forEach(s => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `<strong>${escapeHtml(s.value)}</strong><p>${escapeHtml(s.label)}</p>`;
        statsContainer.appendChild(card);
      });
    }

    // Skills
    const skillsContainer = document.querySelector('#skills-container');
    if (skillsContainer && Array.isArray(data.skills)) {
      skillsContainer.innerHTML = '';
      data.skills.forEach(cat => {
        cat.items.forEach(it => {
          const span = document.createElement('span');
          span.className = 'badge';
          span.textContent = `${it.name}` + (it.level ? ` — ${it.level}` : '');
          skillsContainer.appendChild(span);
        });
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
        p.textContent = e.responsibilities ? e.responsibilities.join('; ') : '';
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
    const projectsPreview = document.querySelector('#projects-preview');
    if (projectsPreview && Array.isArray(data.projects)) {
      const list = document.createElement('div');
      list.className = 'project';
      list.innerHTML = '';
      data.projects.slice(0,3).forEach(proj => {
        const container = document.createElement('div');
        container.innerHTML = `<strong>${escapeHtml(proj.title)}</strong><p>${escapeHtml(proj.summary)}</p><a href="${escapeHtml(proj.link)}">Ver projeto</a>`;
        list.appendChild(container);
      });
      projectsPreview.innerHTML = '';
      projectsPreview.appendChild(list);
      const more = document.createElement('a');
      more.className = 'btn btn-secondary';
      more.href = 'projects.html';
      more.textContent = 'Ver todos os projetos';
      projectsPreview.appendChild(more);
    }

    // Footer year
    const footerSpan = document.querySelector('footer span');
    if (footerSpan && data.footerYear) {
      // update first footer span if it contains © or name
      // find any node with © and replace year
      document.querySelectorAll('footer span').forEach(span => {
        if (span.textContent.includes('©')) {
          span.textContent = `© ${data.footerYear} ${data.name.split(' ')[0]}`;
        }
      });
    }
  }

  // helpers
  function safeSet(selector, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
  }
  function formatPeriod(start, end) {
    if (!start && !end) return '';
    return `${start || ''} - ${end || ''}`;
  }
  function escapeHtml(str) {
    if (!str && str !== 0) return '';
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[s]));
  }
});
