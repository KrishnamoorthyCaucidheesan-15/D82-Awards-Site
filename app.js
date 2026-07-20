/* ==========================================================================
   District 82 Awards — App (router + views)
   Vanilla JS, hash-based routing so it runs directly on GitHub Pages.
   Data comes from data.js (CATEGORIES, AWARDS, PR_THEMES).
   ========================================================================== */

(function () {
  "use strict";

  const main = document.getElementById("main");
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  /* ------------------------------- helpers ------------------------------ */
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const byId = (id) => AWARDS.find((a) => a.id === id);
  const catById = (id) => CATEGORIES.find((c) => c.id === id);
  const awardsIn = (catId) => AWARDS.filter((a) => a.category === catId);

  function catLabel(id) {
    const c = catById(id);
    return c ? c.title : id;
  }
  // Short tag label for calendar chips/tags
  function catShort(id) {
    return ({ membership: "Membership", club: "Club", quality: "Quality", pr: "PR" })[id] || id;
  }

  function setActiveNav(name) {
    document.querySelectorAll(".site-nav a").forEach((a) => {
      a.classList.toggle("active", a.dataset.nav === name);
    });
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ------------------------------- Landing ------------------------------ */
  function renderHome() {
    setActiveNav("home");
    const totalAwards = AWARDS.length;

    const cards = CATEGORIES.map((c) => {
      const n = awardsIn(c.id).length;
      return `
        <a class="cat-card" data-cat="${esc(c.id)}" href="#/category/${esc(c.id)}">
          <span class="cat-icon" aria-hidden="true">${c.icon}</span>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.blurb)}</p>
          <span class="cat-meta">
            <span>${n} award${n === 1 ? "" : "s"}</span>
            <span class="arrow" aria-hidden="true">→</span>
          </span>
        </a>`;
    }).join("");

    main.innerHTML = `
      <div class="view">
        <section class="hero">
          <svg class="hero-waves" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
            <path class="w1" d="M-100 150 C 350 20, 700 260, 1080 120 S 1600 220 1700 90" />
            <path class="w2" d="M-100 230 C 380 90, 760 340, 1120 200 S 1620 300 1720 170" />
            <path class="w3" d="M-100 700 C 320 560, 780 860, 1140 700 S 1640 800 1740 640" />
            <path class="w-gold" d="M-100 400 C 400 260, 820 520, 1200 360 S 1660 460 1760 320" />
          </svg>
          <div class="hero-glow" aria-hidden="true"></div>
          <div class="hero-inner">
            <div class="hero-copy">
              <span class="eyebrow"><span class="dot"></span>Toastmasters · District 82 · Sri Lanka | British Indian Ocean</span>
              <h1>District Awards <span class="accent">2026–2027</span></h1>
              <p class="lead">
                Every recognition D82 offers its members, clubs and district officers,
                celebrating excellence across the Toastmasters year.
              </p>
              <div class="hero-cta">
                <a class="btn btn-gold" href="#/calendar">View the Awards Calendar</a>
                <a class="btn btn-ghost" href="#categories">Browse categories</a>
              </div>
              <div class="hero-stats">
                <div class="hero-stat"><span class="num">${totalAwards}</span><span class="lbl">Awards</span></div>
                <span class="stat-div" aria-hidden="true"></span>
                <div class="hero-stat"><span class="num">${CATEGORIES.length}</span><span class="lbl">Categories</span></div>
                <span class="stat-div" aria-hidden="true"></span>
                <div class="hero-stat"><span class="num">12</span><span class="lbl">Months of recognition</span></div>
              </div>
            </div>
            <div class="hero-visual" aria-hidden="true">
              <div class="emblem-wrap">
                <span class="emblem-ring r1"></span>
                <span class="emblem-ring r2"></span>
                <img class="emblem-logo" src="assets/toastmasters-logo-removebg-preview.png" alt="" width="220" height="220"
                     onerror="this.closest('.hero-visual').classList.add('no-logo')" />
                <span class="emblem-fallback">D82</span>
              </div>
              <span class="float-chip chip-a">⭐ Golden Club</span>
              <span class="float-chip chip-b">🏅 Platinum</span>
              <span class="float-chip chip-c">🚀 Star Director</span>
            </div>
          </div>
        </section>

        <section class="section" id="categories">
          <div class="wrap">
            <div class="section-head">
              <span class="kicker">Explore the awards</span>
              <h2>Four categories of recognition</h2>
              <p class="intro-sub">From coaching and club growth to quality and public relations, pick a category to see every award it holds.</p>
            </div>
            <div class="cat-grid">${cards}</div>

            <div class="cta-band">
              <div>
                <h3>Never miss a deadline</h3>
                <p>The awards calendar lays out every cut-off date on a single timeline, filterable by category and date range.</p>
              </div>
              <a class="btn btn-gold" href="#/calendar">Open the calendar</a>
            </div>
          </div>
        </section>
      </div>`;
    scrollTop();
  }

  /* ------------------------------ Category ------------------------------ */
  function renderCategory(catId) {
    setActiveNav("home");
    const cat = catById(catId);
    if (!cat) return renderNotFound();
    const list = awardsIn(catId);

    const items = list.map((a, i) => `
      <a class="award-item" href="#/award/${esc(a.id)}">
        <span class="idx" aria-hidden="true">${i + 1}</span>
        <span class="body">
          <h3>${esc(a.name)}</h3>
          ${a.subtitle ? `<div class="subtitle">${esc(a.subtitle)}</div>` : ""}
          <p>${esc(a.summary || a.description || "")}</p>
        </span>
        <span class="go" aria-hidden="true">→</span>
      </a>`).join("");

    main.innerHTML = `
      <div class="view">
        <section class="detail-hero">
          <div class="wrap">
            <nav class="crumbs" aria-label="Breadcrumb">
              <a href="#/">Home</a><span class="sep">/</span><span>${esc(cat.title)}</span>
            </nav>
            <span class="cat-tag">${cat.icon} Category</span>
            <h1>${esc(cat.title)}</h1>
            <p class="subtitle">${esc(cat.blurb)}</p>
          </div>
        </section>
        <section class="detail-body">
          <div class="wrap">
            <div class="award-list">${items || '<p>No awards in this category yet.</p>'}</div>
          </div>
        </section>
      </div>`;
    scrollTop();
    focusMain();
  }

  /* ------------------------------- Detail ------------------------------- */
  function renderAward(id) {
    setActiveNav("home");
    const a = byId(id);
    if (!a) return renderNotFound();
    const cat = catById(a.category);

    const criteria = (a.criteria && a.criteria.length)
      ? `<div class="block">
           <h2>Criteria</h2>
           <ul class="crit-list">${a.criteria.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
         </div>`
      : "";

    const dates = (a.keyDates && a.keyDates.length)
      ? a.keyDates.map((d) => `<div class="date-row"><span>${esc(d.label)}</span><span class="d">${esc(d.display)}</span></div>`).join("")
      : "";

    const facts = `
      <aside class="facts">
        <div class="facts-head">Key details</div>
        <dl>
          ${a.eligibility ? `<dt>Eligibility</dt><dd>${esc(a.eligibility)}</dd>` : ""}
          ${dates ? `<dt>Key dates</dt><dd>${dates}</dd>` : ""}
          ${a.submission ? `<dt>Submission</dt><dd>${esc(a.submission)}</dd>` : ""}
          ${a.presentation ? `<dt>Award presentation</dt><dd>${esc(a.presentation)}</dd>` : ""}
        </dl>
      </aside>`;

    // sibling navigation within the category
    const sibs = awardsIn(a.category);
    const idx = sibs.findIndex((x) => x.id === a.id);
    const prev = idx > 0 ? sibs[idx - 1] : null;
    const next = idx < sibs.length - 1 ? sibs[idx + 1] : null;

    main.innerHTML = `
      <div class="view">
        <section class="detail-hero">
          <div class="wrap">
            <nav class="crumbs" aria-label="Breadcrumb">
              <a href="#/">Home</a><span class="sep">/</span>
              <a href="#/category/${esc(a.category)}">${esc(cat ? cat.title : "")}</a><span class="sep">/</span>
              <span>${esc(a.name)}</span>
            </nav>
            <span class="cat-tag">${esc(catShort(a.category))} Award</span>
            <h1>${esc(a.name)}</h1>
            ${a.subtitle ? `<p class="subtitle">${esc(a.subtitle)}</p>` : ""}
          </div>
        </section>
        <section class="detail-body">
          <div class="wrap detail-grid">
            <div class="prose">
              <p class="lead-p">${esc(a.description || a.summary || "")}</p>
              ${criteria}
              <div class="detail-nav">
                ${prev ? `<a class="btn btn-solid" href="#/award/${esc(prev.id)}">← ${esc(prev.name)}</a>` : ""}
                ${next ? `<a class="btn btn-solid" href="#/award/${esc(next.id)}">${esc(next.name)} →</a>` : ""}
              </div>
            </div>
            ${facts}
          </div>
        </section>
      </div>`;
    scrollTop();
    focusMain();
  }

  /* ------------------------------ Calendar ------------------------------ */
  // Build a flat list of every {award, date, label} event.
  function buildEvents() {
    const events = [];
    AWARDS.forEach((a) => {
      (a.keyDates || []).forEach((d) => {
        if (!d.date) return;
        events.push({
          award: a,
          category: a.category,
          date: d.date,
          time: new Date(d.date + "T00:00:00").getTime(),
          label: d.label,
          display: d.display,
        });
      });
    });
    return events.sort((x, y) => x.time - y.time);
  }

  const calState = { cat: "all", range: "all" };

  function renderCalendar() {
    setActiveNav("calendar");
    const catChips = [`<button class="chip ${calState.cat === "all" ? "active" : ""}" data-cat="all">All</button>`]
      .concat(CATEGORIES.map((c) => `<button class="chip ${calState.cat === c.id ? "active" : ""}" data-cat="${esc(c.id)}">${esc(catShort(c.id))}</button>`))
      .join("");

    const ranges = [
      { id: "all", label: "All year" },
      { id: "upcoming", label: "Upcoming" },
      { id: "q1", label: "Jul–Sep 2026" },
      { id: "q2", label: "Oct–Dec 2026" },
      { id: "q3", label: "Jan–Mar 2027" },
      { id: "q4", label: "Apr–Jun 2027" },
    ];
    const rangeChips = ranges
      .map((r) => `<button class="chip ${calState.range === r.id ? "active" : ""}" data-range="${r.id}">${esc(r.label)}</button>`)
      .join("");

    const themeRows = PR_THEMES.map((t) => `
      <tr>
        <td class="month">${esc(t.month)}</td>
        <td class="theme">${esc(t.theme)}</td>
        <td>${esc(t.focus)}</td>
      </tr>`).join("");

    main.innerHTML = `
      <div class="view">
        <section class="cal-head">
          <div class="wrap">
            <nav class="crumbs" aria-label="Breadcrumb" style="color:rgba(255,255,255,.75)">
              <a href="#/" style="color:rgba(255,255,255,.75)">Home</a><span class="sep">/</span><span>Calendar</span>
            </nav>
            <h1>Awards Calendar</h1>
            <p>Every award deadline for the 2026–2027 program year on one timeline. Filter by category or date range to plan ahead.</p>
          </div>
        </section>

        <div class="filters">
          <div class="wrap">
            <div class="filter-group">
              <span id="lbl-cat">Category</span>
              <div class="chips" role="group" aria-labelledby="lbl-cat" id="cat-chips">${catChips}</div>
            </div>
            <div class="filter-group">
              <span id="lbl-range">Date range</span>
              <div class="chips" role="group" aria-labelledby="lbl-range" id="range-chips">${rangeChips}</div>
            </div>
            <div class="filter-count" id="cal-count" aria-live="polite"></div>
          </div>
        </div>

        <section class="section" style="padding-top:28px">
          <div class="wrap">
            <div class="timeline" id="timeline"></div>

            <div class="themes">
              <div class="section-head" style="margin-bottom:18px">
                <span class="kicker">PR reference</span>
                <h2>Monthly themes — Flyer &amp; Video awards</h2>
                <p>Submissions that don't align with the published monthly theme receive a 10% score deduction.</p>
              </div>
              <div class="table-scroll">
                <table class="themes-table">
                  <thead><tr><th scope="col">Month</th><th scope="col">Theme</th><th scope="col">Focus</th></tr></thead>
                  <tbody>${themeRows}</tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>`;

    // wire filters
    document.getElementById("cat-chips").addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]");
      if (!b) return;
      calState.cat = b.dataset.cat;
      document.querySelectorAll("#cat-chips .chip").forEach((c) => c.classList.toggle("active", c === b));
      drawTimeline();
    });
    document.getElementById("range-chips").addEventListener("click", (e) => {
      const b = e.target.closest("[data-range]");
      if (!b) return;
      calState.range = b.dataset.range;
      document.querySelectorAll("#range-chips .chip").forEach((c) => c.classList.toggle("active", c === b));
      drawTimeline();
    });

    drawTimeline();
    scrollTop();
    focusMain();
  }

  function inRange(ev) {
    if (calState.range === "all") return true;
    const t = ev.time;
    const T = (s) => new Date(s + "T00:00:00").getTime();
    switch (calState.range) {
      case "upcoming": return t >= todayTime();
      case "q1": return t >= T("2026-07-01") && t <= T("2026-09-30");
      case "q2": return t >= T("2026-10-01") && t <= T("2026-12-31");
      case "q3": return t >= T("2027-01-01") && t <= T("2027-03-31");
      case "q4": return t >= T("2027-04-01") && t <= T("2027-06-30");
      default: return true;
    }
  }

  function todayTime() {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
  }

  function drawTimeline() {
    const events = buildEvents().filter((ev) => {
      if (calState.cat !== "all" && ev.category !== calState.cat) return false;
      return inRange(ev);
    });

    const countEl = document.getElementById("cal-count");
    if (countEl) countEl.innerHTML = `<strong>${events.length}</strong> deadline${events.length === 1 ? "" : "s"}`;

    const tl = document.getElementById("timeline");
    if (!events.length) {
      tl.innerHTML = `<div class="empty">No deadlines match these filters. Try widening the date range or choosing “All”.</div>`;
      return;
    }

    // group by month-year
    const groups = [];
    let cur = null;
    events.forEach((ev) => {
      const d = new Date(ev.date + "T00:00:00");
      const key = d.getFullYear() + "-" + d.getMonth();
      if (!cur || cur.key !== key) {
        cur = { key, year: d.getFullYear(), month: d.getMonth(), items: [] };
        groups.push(cur);
      }
      cur.items.push(ev);
    });

    tl.innerHTML = groups.map((g) => {
      const rows = g.items.map((ev) => {
        const d = new Date(ev.date + "T00:00:00");
        return `
          <div class="tl-item">
            <div class="tl-date"><span class="dnum">${d.getDate()}</span>${MONTHS[d.getMonth()].slice(0,3)}</div>
            <div class="tl-card">
              <a class="tl-name" href="#/award/${esc(ev.award.id)}">${esc(ev.award.name)}</a>
              <span class="tag ${esc(ev.category)}">${esc(catShort(ev.category))}</span>
              <span class="tl-label">${esc(ev.label)}${ev.display && !/^\d/.test(ev.display) ? " · " + esc(ev.display) : ""}</span>
            </div>
          </div>`;
      }).join("");
      return `
        <div class="tl-month">
          <div class="tl-month-label">${MONTHS[g.month]} <span class="yr">${g.year}</span></div>
          ${rows}
        </div>`;
    }).join("");
  }

  /* ------------------------------ Not found ----------------------------- */
  function renderNotFound() {
    setActiveNav(null);
    main.innerHTML = `
      <div class="view">
        <section class="section"><div class="wrap">
          <div class="section-head">
            <span class="kicker">404</span>
            <h2>We couldn't find that page</h2>
            <p>The award or category you're looking for doesn't exist.</p>
          </div>
          <a class="btn btn-solid" href="#/">← Back to home</a>
        </div></section>
      </div>`;
    scrollTop();
  }

  function focusMain() {
    // move focus for keyboard/screen-reader users after navigation
    try { main.focus({ preventScroll: true }); } catch (e) { main.focus(); }
  }

  /* ------------------------------- Router ------------------------------- */
  function route() {
    const hash = window.location.hash.replace(/^#/, "") || "/";
    const parts = hash.split("/").filter(Boolean); // ["category","xyz"]

    if (parts.length === 0) return renderHome();
    if (parts[0] === "calendar") return renderCalendar();
    if (parts[0] === "category" && parts[1]) return renderCategory(decodeURIComponent(parts[1]));
    if (parts[0] === "award" && parts[1]) return renderAward(decodeURIComponent(parts[1]));
    return renderHome();
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
  // in case the script loads after DOMContentLoaded already fired
  if (document.readyState !== "loading") route();
})();
