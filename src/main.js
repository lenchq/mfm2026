import './style.css';
import './features.css';
import './localization.css';
import { tracks as tracksRu, discussions as discussionsRu } from './data.js';
import { tracksEn, discussionsEn } from './data.en.js';
import { language, choose, translate, localize, needsLanguageChoice, languagePicker } from './i18n.js';
import { companyLogos } from './companies.js';
let tracks = tracksRu;
let discussions = discussionsRu;
import { videoCards, bindVideos, cleanupVideo } from './videos.js';
import { materialLinks } from './materials.js';
import { renderArrows } from './icons.js';
import { trackStatus } from './track-status.js';
import './track-status.css';

const app = document.querySelector('#app');
const image = (text, size = '600x400', bg = 'e0e7f0') => `https://placehold.co/${size}/${bg}/253b59?text=${encodeURIComponent(text)}`;
const link = (url, text, kind = 'blue') => `<a class="button ${kind}" href="${url}">${text}<span aria-hidden="true">↗</span></a>`;
const trackUrl = t => `/napravleniya/${t.id}`;
const mapUrl = t => `/karta-obucheniya?track=${t.id}`;
let completed;
try { completed = new Set(JSON.parse(localStorage.getItem('techno5-progress') || '[]')); } catch { completed = new Set(); }
const tabs = (active, base, all = false) => `<div class="tabs" aria-label="Направления">${all ? `<a class="${!active ? 'selected' : ''}" href="${base}">Все темы</a>` : ''}${tracks.map(t => `<a class="${active === t.id ? 'selected' : ''}" ${active === t.id ? 'aria-current="true"' : ''} href="${base}?track=${t.id}">${t.name}</a>`).join('')}</div>`;
function home() {
  return `<section class="hero wrap"><div class="hero-copy"><p class="eyebrow">ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА / ТЕХНО5</p><h1>ТВОЙ ПУТЬ<br>В МИР<br><span>ТЕХНОЛОГИЙ</span><i>↗</i></h1><p class="intro">Будущее не где-то далеко. Оно начинается с тебя.<br>Выбирай направление, учись и создавай то, чего ещё нет.</p><div class="actions">${link('/#directions', 'Выбрать направление')}${link('/karta-obucheniya', 'Карта обучения', 'orange')}</div><div class="hero-facts"><span><b>03</b> направления</span><span><b>01</b> первый шаг к будущему</span></div></div><div class="hero-art"><img src="${import.meta.env.BASE_URL}images/main.jpeg" alt="ТЕХНО5 — твой путь в мир технологий" fetchpriority="high"><span class="art-label">УЧИСЬ. ПРОБУЙ. СОЗДАВАЙ.</span><div class="art-sticker">ТВОЁ<br>БУДУЩЕЕ<span>↗</span></div><span class="art-foot">ТЕХНО5 / НОВОЕ ПОКОЛЕНИЕ</span></div></section>
  <section class="wrap section" id="directions"><div class="section-heading"><p class="eyebrow">01 / НАПРАВЛЕНИЯ</p><h2>НАПРАВЛЕНИЕ<br>ВЫБИРАЕШЬ <span>ТЫ</span></h2><p>Три разных пути.<br>Безграничные возможности.</p></div><div class="track-grid">${tracks.map((t, i) => `<a class="track-card" href="${trackUrl(t)}"><div class="track-image"><img loading="lazy" src="${import.meta.env.BASE_URL}${t.image}" alt="Направление: ${t.name}"><span class="number">0${i + 1}</span><span class="round-arrow ${t.color}">↗</span></div><div class="track-body">${trackStatus(t, true)}<h3>${t.name}</h3><p>${t.description}</p><span class="text-link">ПОДРОБНЕЕ →</span></div></a>`).join('')}</div></section>
  <section class="learning section"><div class="wrap"><div class="section-heading"><p class="eyebrow">02 / КАК ЭТО РАБОТАЕТ</p><h2>ОТ ИНТЕРЕСА<br>К ПЕРВОМУ ПРОЕКТУ</h2></div><div class="steps">${[['Выбери направление', 'Узнай, чем занимается специалист.'], ['Изучай теорию', 'Проходи материалы в удобном темпе.'], ['Выполняй практику', 'Закрепляй знания на реальных заданиях.'], ['Развивайся', 'Смотри короткие видео и общайся с сообществом.']].map((s, i) => `<article><span class="step-num">0${i + 1} /</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div>${link('/karta-obucheniya', 'Посмотреть карту обучения', 'light')}</div></section><section class="wrap section"><div class="final-cta"><div><p class="eyebrow">ТВОЙ СЛЕДУЮЩИЙ ШАГ</p><h2>ГОТОВ НАЧАТЬ<br>СВОЙ ПУТЬ?</h2><p>Выбери направление и сделай первый шаг в профессию.</p></div>${link('/#directions', 'Выбрать направление', 'light')}</div></section>`;
}
function direction(t) {
 return `<section class="wrap section"><a class="text-link" href="/#directions">← Все направления</a><div class="page-heading"><p class="eyebrow">ЗНАКОМСТВО С ПРОФЕССИЕЙ</p><h1>${t.name}</h1><p class="intro">${t.description}</p></div>${trackStatus(t)}<div class="direction-layout"><aside class="info-card"><p class="eyebrow">О НАПРАВЛЕНИИ</p><h2 class="small-title">ТВОИ ВОЗМОЖНОСТИ</h2><p>${t.description} ${choose('Начни с основ и собери собственный проект.', 'Start with the basics and build your own project.')}</p>${link(mapUrl(t), 'Открыть карту обучения')}<hr><h3>Компании</h3><p class="muted">Примеры работодателей</p>${companyLogos(t)}<hr><h3>Практика и развитие</h3><p>Учебные проекты, конкурсы, стажировки и мероприятия — следующие шаги после изучения основ.</p><a class="text-link" href="/forum?track=${t.id}">Найти единомышленников →</a></aside><div class="video-feed">${videoCards(t, image)}</div></div></section>`;
}
function roadmap(t) {
 const total = t.stages.reduce((n, s) => n + s[1].length + s[2].length, 0);
 const done = t.stages.reduce((n, s, si) => n + [s[1], s[2]].reduce((m, topics, type) => m + topics.filter((_, i) => completed.has(`${t.id}-${si}-${type}-${i}`)).length, 0), 0);
 return `<section class="wrap section"><div class="page-heading"><p class="eyebrow">ОТ ПЕРВОГО ШАГА ДО ПРОЕКТА</p><h1>КАРТА <span>ОБУЧЕНИЯ</span></h1><p class="intro">Большая цель — понятные шаги. Двигайся в своём темпе.</p></div>${tabs(t.id, '/karta-obucheniya')}${trackStatus(t)}<div class="map-summary"><div><h2 class="small-title">${t.name}</h2><a class="text-link" href="${trackUrl(t)}">О направлении и короткие видео ↗</a></div><div><span id="progress-label">${done} из ${total} тем отмечено</span><progress id="progress" value="${done}" max="${total}">${done} / ${total}</progress><small>Прогресс хранится только в этом браузере.</small></div></div><p class="notice">Следуй по центральной линии и изучай боковые ветки: теорию и практику. В каждой теме — примерные материалы. Ссылки-заглушки никуда не ведут.</p><div class="roadmap"><div class="route-terminal">СТАРТ / ${t.short}</div>${t.stages.map((s, si) => `<section class="stage"><div class="stage-heading"><span>0${si + 1}</span><h2>${s[0]}</h2></div><div class="stage-columns ${s[1].length ? '' : 'single-branch'}">${[s[1], s[2]].map((topics, type) => topics.length ? `<div class="topic-group"><span class="badge ${si === 3 ? 'green' : type ? 'orange' : 'blue'}">${si === 3 ? 'РЕЗУЛЬТАТ / ПРОЕКТ' : type ? 'ПРАКТИКА' : 'ТЕОРИЯ'}</span>${topics.map((topic, i) => { const key = `${t.id}-${si}-${type}-${i}`; return `<details class="topic"><summary><span>${completed.has(key) ? '✓ ' : ''}${topic}</span><span aria-hidden="true">+</span></summary><div><p>${type ? choose('Практическое задание: ', 'Practice task: ') + topic + choose('. Сохрани результат работы и коротко опиши, чему научился.', '. Save your work and briefly describe what you learned.') : 'Начни с видео, затем изучи статью и запиши основные выводы.'}</p>${materialLinks(topic, type)}<label><input type="checkbox" data-progress="${key}" ${completed.has(key) ? 'checked' : ''}> Отметить как выполненное</label></div></details>`; }).join('')}</div>` : '').join('')}</div></section>`).join('')}<div class="route-terminal route-finish">✓ ПЕРВЫЙ ПРОЕКТ В ПОРТФОЛИО</div></div><section class="roadmap-companies" aria-labelledby="roadmap-companies-title"><p class="eyebrow">${choose('СЛЕДУЮЩИЙ ШАГ / КАРЬЕРА', 'NEXT STEP / YOUR CAREER')}</p><h2 class="small-title" id="roadmap-companies-title">${choose('Компании направления', 'Companies in this field')} · ${t.name}</h2><p class="muted">Примеры работодателей, не партнёры платформы. Наличие вакансий не проверено.</p>${companyLogos(t)}</section></section>`;
}
function forum(active) {
 const posts = discussions.filter(p => !active || p.track === active);
 return `<section class="wrap section"><div class="page-heading forum-heading"><div><p class="eyebrow">СООБЩЕСТВО / ТЕХНО5</p><h1>ВМЕСТЕ <span>ПРОЩЕ</span></h1><p class="intro">Задавай вопросы, делись идеями и находи единомышленников.</p></div><button class="button orange" data-create>Создать обсуждение <span>+</span></button></div><p class="notice">Форум ТЕХНО5 · Демонстрационная версия. Все обсуждения и счётчики — примеры, публикация пока недоступна.</p><div class="forum-layout"><aside><p class="eyebrow">КАТЕГОРИИ</p>${tabs(active, '/forum', true)}</aside><div class="posts"><div class="row-heading"><h2 class="small-title">${active ? tracks.find(t => t.id === active).name : 'Все обсуждения'}</h2><span class="muted">${posts.length} тем</span></div>${posts.map(p => `<article class="post"><span class="post-category">${tracks.find(t => t.id === p.track).name}</span><h3>${p.title}</h3><p>${p.text}</p><div class="post-meta"><span>↳ ${p.replies} ответов</span><span>${p.date}</span></div></article>`).join('')}</div><aside class="popular"><p class="eyebrow">ПОПУЛЯРНОЕ</p>${[...discussions].sort((a,b) => b.replies - a.replies).slice(0,3).map(p => `<a href="/forum?track=${p.track}"><h3>${p.title}</h3><span>${p.replies} ответов →</span></a>`).join('')}<div class="community-note"><b>Здесь каждый<br>когда-то начинал.</b><p>Уважай собеседников, помогай другим и не бойся спрашивать.</p></div></aside></div></section>`;
}
function render() {
 cleanupVideo();
 tracks = language === 'en' ? tracksEn : tracksRu;
 discussions = language === 'en' ? discussionsEn : discussionsRu;
 document.documentElement.lang = language;
 const path = location.pathname.replace(/\/$/, '') || '/';
 const active = new URLSearchParams(location.search).get('track');
 const t = tracks.find(t => t.id === active) || tracks[0];
 let content, title;
 if (path === '/') { content = home(); title = 'Твой путь в мир технологий'; }
 else if (path === '/karta-obucheniya') { content = roadmap(t); title = 'Карта обучения'; }
 else if (path === '/forum') { content = forum(tracks.some(t => t.id === active) ? active : null); title = 'Форум'; }
 else { const directionTrack = tracks.find(t => trackUrl(t) === path); content = directionTrack ? direction(directionTrack) : `<section class="wrap section"><h1>404</h1><p>Такой страницы пока нет.</p>${link('/', 'На главную')}</section>`; title = directionTrack?.name || 'Страница не найдена'; }
 document.title = `${translate(title)} — ${choose('ТЕХНО5', 'TECHNO5')}`;
 document.querySelector('meta[name="description"]').content = choose('ТЕХНО5 — образовательная платформа: дизайн, искусственный интеллект, робототехника и БПЛА. Выбери направление и свой путь обучения.', 'TECHNO5 — learn design, artificial intelligence, robotics and drones. Choose your track and explore your learning roadmap.');
 document.querySelector('.skip-link').textContent = choose('Перейти к содержимому', 'Skip to content');
 app.innerHTML = `<header><div class="wrap header-inner"><a class="logo" href="/" aria-label="ТЕХНО5 — главная">ТЕХНО<span>5</span><i>↗</i></a><nav aria-label="Главная навигация">${[['/', 'Главная'], ['/karta-obucheniya', 'Карта обучения'], ['/forum', 'Форум']].map(([url, label]) => `<a href="${url}" ${path === url ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav><div class="header-tools"><span class="header-note">БУДУЩЕЕ НАЧИНАЕТСЯ ЗДЕСЬ <span>↗</span></span><button type="button" id="language-select" class="language-switch" aria-haspopup="dialog" aria-label="${choose('Выбрать язык сайта', 'Choose site language')}"><span aria-hidden="true">◎</span><span>${language.toUpperCase()}</span></button></div></div></header><main id="main">${content}</main><footer><div class="wrap footer-inner"><a class="logo" href="/">ТЕХНО<span>5</span></a><p>Твой интерес. Твои идеи. Твоё будущее.</p><span>Образовательная платформа · Прототип</span></div></footer><dialog><button class="dialog-close" aria-label="Закрыть">×</button><p class="eyebrow">ФОРУМ ТЕХНО5</p><h2>СКОРО ЗДЕСЬ<br>БУДЕТ ОБЩЕНИЕ</h2><p>Сейчас это демонстрация форума. Создание обсуждений и ответы появятся после подключения серверной части.</p><button class="button blue" data-close>Понятно</button></dialog>`;
 localize(app);
 renderArrows(app);
 document.querySelector('#language-select').addEventListener('click', () => {
   const scroll = window.scrollY;
   const openTopics = [...document.querySelectorAll('.topic')].map(topic => topic.open);
   languagePicker(() => {
     render();
     document.querySelectorAll('.topic').forEach((topic, i) => { topic.open = openTopics[i] || false; });
     window.scrollTo(0, scroll);
   });
 });
 bindVideos(tracks, track => {
   history.pushState({}, '', mapUrl(track));
   render();
   window.scrollTo(0, 0);
   const main = document.querySelector('main');
   main.tabIndex = -1;
   main.focus({ preventScroll: true });
 });
 document.querySelectorAll('[data-material]').forEach(a => {
   a.removeAttribute('aria-disabled');
   a.addEventListener('click', event => {
     event.preventDefault();
     const wasOpen = a.nextElementSibling?.classList.contains('material-hint');
     document.querySelectorAll('.material-hint').forEach(hint => hint.remove());
     if (wasOpen) return;
     const hint = document.createElement('div');
     hint.className = 'material-hint';
     hint.setAttribute('role', 'status');
     hint.textContent = choose('Это пример материала. Материал готовится.', 'This is a sample resource. The material is being prepared.');
     a.after(hint);
   });
 });
 document.querySelector('[data-create]')?.addEventListener('click', () => document.querySelector('dialog').showModal());
 document.querySelectorAll('[data-close], .dialog-close').forEach(el => el.addEventListener('click', () => document.querySelector('dialog').close()));
 document.querySelectorAll('[data-progress]').forEach(input => input.addEventListener('change', () => {
   input.checked ? completed.add(input.dataset.progress) : completed.delete(input.dataset.progress);
   try { localStorage.setItem('techno5-progress', JSON.stringify([...completed])); } catch { document.querySelector('.map-summary small').textContent = translate('Хранилище недоступно: прогресс сохранится только до обновления страницы.'); }
   const count = [...document.querySelectorAll('[data-progress]')].filter(el => el.checked).length;
   document.querySelector('#progress').value = count;
   document.querySelector('#progress-label').textContent = translate(`${count} из ${document.querySelectorAll('[data-progress]').length} тем отмечено`);
   const text = input.closest('details').querySelector('summary span');
   text.textContent = (input.checked ? '✓ ' : '') + text.textContent.replace(/^✓ /, '');
 }));
}
document.addEventListener('keydown', event => {
 if (event.key === 'Escape') document.querySelectorAll('.material-hint').forEach(hint => hint.remove());
});
document.addEventListener('click', event => {
 if (!event.target.closest('[data-material], .material-hint')) {
   document.querySelectorAll('.material-hint').forEach(hint => hint.remove());
 }
 const anchor = event.target.closest('a');
 if (!anchor || anchor.hasAttribute('data-material') || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target || anchor.hasAttribute('download')) return;
 const url = new URL(anchor.href);
 if (url.origin !== location.origin) return;
 event.preventDefault(); history.pushState({}, '', url); render();
 if (url.hash) document.getElementById(url.hash.slice(1))?.scrollIntoView();
 else { window.scrollTo(0, 0); const main = document.querySelector('main'); main.tabIndex = -1; main.focus({ preventScroll: true }); }
});
window.addEventListener('popstate', () => { render(); if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView(); });
render();
if (needsLanguageChoice) languagePicker(render);
if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
