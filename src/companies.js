import { tracks as russianTracks } from './data.js';
import { choose } from './i18n.js';
const logos = {
  'Яндекс': 'yandex.webp', 'VK': 'vk.webp', 'Сбер': 'sber.png', 'Т-Банк': 'tbank.png',
  'Ozon': 'ozon.jpg', 'Ozon Tech': 'ozon.jpg', 'Avito': 'avito.webp', 'МТС': 'mts.webp',
  'MTS AI': 'mts.webp', 'Kaspersky': 'kaspersky.webp', 'Газпромбанк.Тех': 'Газпромбанк.тех.svg',
  'Ростелеком': 'rostelekom.png', 'Геоскан': 'geoscan.png', 'Cognitive Pilot': 'cognitive-pilot.jpg',
  'АО «Роббо»': 'roobo.jpg', 'Росатом': 'rosatom.png'
};
export function companyLogos(track) {
  const original = russianTracks.find(item => item.id === track.id);
  return `<ul class="company-logos" tabindex="0" aria-label="${choose('Партнёр проекта и примеры работодателей — прокрутите список', 'Project partner and example employers — scroll to explore')}"><li><a class="company-logo-frame gesti-wordmark" href="https://gesti.tech" target="_blank" rel="noopener noreferrer"><img src="${import.meta.env.BASE_URL}images/partners/gesti.tech.svg" alt="gesti.tech" loading="lazy" decoding="async"></a><span>${choose('Партнёр проекта', 'Project partner')}</span></li>${original.companies.map((company, i) => `<li><div class="company-logo-frame"><img src="${import.meta.env.BASE_URL}images/partners/${encodeURIComponent(logos[company])}" alt="${track.companies[i]}" loading="lazy" decoding="async"></div><span>${track.companies[i]}</span></li>`).join('')}</ul>`;
}
