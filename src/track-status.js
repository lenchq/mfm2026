import { choose } from './i18n.js';

export function trackStatus(track, compact = false) {
  const available = track.id === 'dizayn';
  const label = available
    ? choose('Первое видео доступно', 'First video available')
    : choose('Превью-версия', 'Preview version');
  if (compact) return `<span class="track-status-badge ${available ? 'is-available' : 'is-preview'}">${label}</span>`;
  const description = available
    ? choose('Смотри первый рилс о дизайне и закрепляй знания в квизе. Остальные видео готовятся.', 'Watch the first design reel and test your knowledge in the quiz. More videos are coming soon.')
    : choose('Это направление пока находится в превью-версии. Можно познакомиться с профессией и картой обучения; видео и полноценные материалы ещё готовятся.', 'This track is currently in preview. Explore the profession and learning roadmap; videos and full learning resources are still being prepared.');
  return `<aside class="track-status ${available ? 'is-available' : 'is-preview'}" aria-label="${choose('Статус направления', 'Track status')}"><strong>${label}</strong><p>${description}</p></aside>`;
}
