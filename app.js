// ═══════════════════════════════════════════
//  APP — Forge Studio Portfolio
// ═══════════════════════════════════════════

(function () {
  "use strict";

  // ── Theme ──────────────────────────────────
  const html = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("forge-theme") || "dark";
  html.setAttribute("data-theme", savedTheme);

  themeBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("forge-theme", next);
  });

  // ── Nav scroll effect ──────────────────────
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-scrolled", window.scrollY > 40);
  });

  // ── Mobile nav ────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });
  document.querySelectorAll(".mob-link").forEach((l) => {
    l.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
    });
  });

  // ── Smooth scroll ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ── Intersection Observer (reveal) ────────
  const revealEls = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealEls.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // ── Render: Tech Stack ─────────────────────
  function renderTech() {
    const grid = document.getElementById("techGrid");
    grid.innerHTML = TECH_STACK.map(
      (t) => `
      <div class="tech-badge">
        <span class="tech-icon">${t.icon}</span>
        <span>${t.name}</span>
      </div>`
    ).join("");
  }

  // ── Render: Members ───────────────────────
  function getMemberById(id) {
    return TEAM_MEMBERS.find((m) => m.id === id);
  }

  function renderMembers() {
    const grid = document.getElementById("membersGrid");
    grid.innerHTML = TEAM_MEMBERS.map(
      (m, i) => `
      <article class="member-card reveal-item" style="--delay:${i * 80}ms">
        <div class="member-top">
          <div class="member-avatar" style="--av-color:${m.avatarColor}">${m.avatar}</div>
          <div class="member-id">
            <h3 class="member-name">${m.name}</h3>
            <span class="member-role">${m.role}</span>
          </div>
        </div>
        <p class="member-bio">${m.bio}</p>
        <div class="member-skills">
          ${m.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
        <div class="member-links">
          ${
            m.links.github
              ? `<a href="${m.links.github}" target="_blank" rel="noopener" class="social-link" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>`
              : ""
          }
          ${
            m.links.linkedin
              ? `<a href="${m.links.linkedin}" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>`
              : ""
          }
          ${
            m.links.website
              ? `<a href="${m.links.website}" target="_blank" rel="noopener" class="social-link" title="Website">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </a>`
              : ""
          }
        </div>
      </article>`
    ).join("");

    grid.querySelectorAll(".reveal-item").forEach((el) => revealEls.observe(el));
  }

  // ── Filter system ─────────────────────────
  let activeFilter = "all";

  function buildFilters() {
    const bar = document.getElementById("filterBar");
    const allTags = [...new Set(PROJECTS.flatMap((p) => p.tags))].sort();
    allTags.forEach((tag) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.filter = tag;
      btn.textContent = tag;
      bar.appendChild(btn);
    });
    bar.addEventListener("click", (e) => {
      if (!e.target.matches(".filter-btn")) return;
      activeFilter = e.target.dataset.filter;
      bar.querySelectorAll(".filter-btn").forEach((b) =>
        b.classList.toggle("active", b.dataset.filter === activeFilter)
      );
      renderProjects();
    });
  }

  // ── Render: Projects ──────────────────────
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    const filtered =
      activeFilter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.tags.includes(activeFilter));

    grid.innerHTML = filtered
      .map(
        (p, i) => `
      <article class="project-card reveal-item ${p.featured ? "featured" : ""}" style="--delay:${i * 80}ms">
        ${p.featured ? '<span class="featured-badge">Featured</span>' : ""}
        <div class="project-header">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-links">
            ${
              p.links.demo
                ? `<a href="${p.links.demo}" target="_blank" rel="noopener" class="project-link-btn" title="Live Demo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>`
                : ""
            }
            ${
              p.links.github
                ? `<a href="${p.links.github}" target="_blank" rel="noopener" class="project-link-btn" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>`
                : ""
            }
          </div>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-authors">
          ${p.authors
            .map((id) => {
              const m = getMemberById(id);
              return m
                ? `<span class="author-chip" style="--av-color:${m.avatarColor}" title="${m.name}">${m.avatar}</span>`
                : "";
            })
            .join("")}
          <span class="author-names">${p.authors.map((id) => getMemberById(id)?.name.split(" ")[0]).join(", ")}</span>
        </div>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </article>`
      )
      .join("");

    grid.querySelectorAll(".reveal-item").forEach((el) => revealEls.observe(el));
  }

  // ── Init ──────────────────────────────────
  renderTech();
  renderMembers();
  buildFilters();
  renderProjects();

  // Observe static reveal items
  document.querySelectorAll(".reveal-static").forEach((el) => revealEls.observe(el));
})();
