import { translate, localize, choose } from './i18n.js';
import { hasQuiz, startQuiz } from './quiz.js';
import { renderArrows } from './icons.js';

export function videoCards(track, image) {
  return `<div class="row-heading"><h2 class="small-title" id="videos-heading">КОРОТКО О ГЛАВНОМ</h2><span class="muted">${track.id === 'dizayn' ? choose('01 видео доступно · ещё 03 скоро', '01 video available · 03 coming soon') : choose('04 видео · скоро', '04 videos · coming soon')}</span></div>
    <div class="reels" role="region" aria-labelledby="videos-heading" tabindex="0">${track.videos.map((title, i) => `
      <button class="reel" data-video-track="${track.id}" data-video-index="${i}" aria-label="Открыть видео: ${title}">
        <img loading="lazy" src="${image(`VIDEO / 0${i + 1}`, '450x700', 'd5dce6')}" alt="">
        <span class="play-icon" aria-hidden="true">▶</span>
        <span class="reel-content"><span class="badge">${track.id === 'dizayn' && i === 0 ? 'СМОТРЕТЬ ВИДЕО' : 'ВИДЕО ГОТОВИТСЯ'}</span><span class="reel-title">${title}</span><span class="reel-hint">Нажми, чтобы открыть на весь экран ↗</span></span>
      </button>`).join('')}</div>
    <div class="reel-navigation"><button class="reel-prev" aria-label="Предыдущее видео">←</button><span class="muted">Листай видео или используй стрелки</span><button class="reel-next" aria-label="Следующее видео">→</button></div>`;
}

let closeCurrent = () => {};
export function cleanupVideo() { closeCurrent(); }

export function bindVideos(tracks, onRoadmap) {
  const rail = document.querySelector('.reels');
  const move = direction => rail?.scrollBy({ left: direction * (rail.clientWidth + 12), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  document.querySelector('.reel-prev')?.addEventListener('click', () => move(-1));
  document.querySelector('.reel-next')?.addEventListener('click', () => move(1));
  rail?.addEventListener('keydown', event => {
    if (event.target !== rail || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  document.querySelectorAll('[data-video-track]').forEach(button => button.addEventListener('click', () => {
    const track = tracks.find(t => t.id === button.dataset.videoTrack);
    const index = Number(button.dataset.videoIndex);
    const playable = track.id === 'dizayn' && index === 0;
    const modal = document.createElement('dialog');
    modal.className = 'video-dialog';
    modal.setAttribute('aria-labelledby', 'video-title');
    modal.innerHTML = `<div class="video-toolbar"><h2 id="video-title">${track.videos[index]}</h2><button class="video-close" aria-label="Закрыть видео">✕</button></div><div class="video-stage">${playable ? '<video controls playsinline preload="none" aria-label="Первое видео о дизайне"></video><p class="video-status" role="status">Загрузка видео…</p>' : '<div class="video-placeholder"><span aria-hidden="true">▷</span><h3>Видео готовится</h3><p>Здесь появится обучающий ролик.<br>Пока можно изучить карту направления.</p></div>'}</div>`;
    localize(modal);
    renderArrows(modal);
    document.body.append(modal);
    const player = modal.querySelector('video');
    const stage = modal.querySelector('.video-stage');
    let active = true;
    let quizStarted = false;
    const openQuiz = async () => {
      if (!active || quizStarted) return;
      quizStarted = true;
      player?.pause();
      // Leave native video fullscreen before replacing the player with the cards.
      try {
        if (document.fullscreenElement && modal.contains(document.fullscreenElement)) await document.exitFullscreen();
        if (player?.webkitDisplayingFullscreen) player.webkitExitFullscreen();
      } catch { /* The dialog still provides an inline fallback. */ }
      if (!active) return;
      modal.querySelector('#video-title').textContent = choose('Квиз · Дизайн в бизнесе', 'Quiz · Design in business');
      modal.querySelector('.quiz-preview')?.remove();
      modal.querySelector('.quiz-preview-note')?.remove();
      startQuiz(stage, track, selectedTrack => {
        cleanupVideo();
        onRoadmap(selectedTrack);
      });
    };
    if (hasQuiz(track.id, index)) {
      const preview = document.createElement('button');
      preview.className = 'button quiz-preview';
      preview.textContent = choose('Предпросмотр квиза →', 'Preview the quiz →');
      renderArrows(preview);
      preview.addEventListener('click', openQuiz);
      const note = document.createElement('p');
      note.className = 'quiz-preview-note';
      note.textContent = choose('После видео квиз откроется автоматически. Предпросмотр доступен и без видеофайла.', 'The quiz opens automatically after the video. Preview is available even without the video file.');
      modal.append(preview, note);
      player?.addEventListener('ended', openQuiz, { once: true });
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeCurrent = () => {
      active = false;
      if (player) { player.pause(); player.removeAttribute('src'); player.load(); }
      modal.remove(); document.body.style.overflow = originalOverflow;
      if (button.isConnected) button.focus({ preventScroll: true });
      closeCurrent = () => {};
    };
    modal.addEventListener('close', cleanupVideo, { once: true });
    modal.querySelector('.video-close').addEventListener('click', () => modal.close());
    modal.showModal();
    if (player) {
      const status = modal.querySelector('.video-status');
      player.addEventListener('loadeddata', () => { status.hidden = true; });
      player.addEventListener('error', () => {
        if (!active || quizStarted) return;
        status.hidden = false;
        status.textContent = translate('Не удалось загрузить видео. Проверьте подключение или наличие файла public/videos/design.mp4.');
      });
      // Assign the source only after a deliberate click, never while rendering the feed.
      player.src = `${import.meta.env.BASE_URL}videos/design.mp4`;
      player.load();
      player.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
    }
  }));
}
