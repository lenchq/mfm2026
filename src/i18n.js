const key = 'techno5-language';
let saved;
try { saved = localStorage.getItem(key); } catch { /* Storage may be unavailable. */ }
export let language = ['ru', 'en'].includes(saved) ? saved : 'ru';
export const needsLanguageChoice = !['ru', 'en'].includes(saved);
export const choose = (ru, en) => language === 'en' ? en : ru;
export function setLanguage(value) {
  if (!['ru', 'en'].includes(value)) return;
  language = value;
  try { localStorage.setItem(key, value); } catch { /* Keep the choice for this session. */ }
}
const translations = {
  'ТЕХНО': 'TECHNO', 'ТЕХНО5 — главная': 'TECHNO5 — home',
  'Главная': 'Home', 'Карта обучения': 'Learning roadmap', 'Форум': 'Forum',
  'Главная навигация': 'Main navigation', 'Направления': 'Learning tracks',
  'ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА / ТЕХНО5': 'LEARNING PLATFORM / TECHNO5',
  'ТВОЙ ПУТЬ': 'YOUR WAY', 'В МИР': 'INTO', 'ТЕХНОЛОГИЙ': 'TECHNOLOGY',
  'Будущее не где-то далеко. Оно начинается с тебя.': 'The future is not far away. It starts with you.',
  'Выбирай направление, учись и создавай то, чего ещё нет.': 'Choose your path, learn and create something new.',
  'Выбрать направление': 'Choose a track', 'направления': 'learning tracks', 'первый шаг к будущему': 'first step towards the future',
  'ТЕХНО5 — твой путь в мир технологий': 'TECHNO5 — your way into technology',
  'УЧИСЬ. ПРОБУЙ. СОЗДАВАЙ.': 'LEARN. EXPLORE. CREATE.', 'ТВОЁ': 'YOUR', 'БУДУЩЕЕ': 'FUTURE',
  'ТЕХНО5 / НОВОЕ ПОКОЛЕНИЕ': 'TECHNO5 / NEXT GENERATION',
  '01 / НАПРАВЛЕНИЯ': '01 / LEARNING TRACKS', 'НАПРАВЛЕНИЕ': 'YOUR PATH.', 'ВЫБИРАЕШЬ': 'YOUR', 'ТЫ': 'CHOICE.',
  'Три разных пути.': 'Three different paths.', 'Безграничные возможности.': 'Endless possibilities.', 'ПОДРОБНЕЕ →': 'EXPLORE →',
  '02 / КАК ЭТО РАБОТАЕТ': '02 / HOW IT WORKS', 'ОТ ИНТЕРЕСА': 'FROM CURIOSITY', 'К ПЕРВОМУ ПРОЕКТУ': 'TO YOUR FIRST PROJECT',
  'Выбери направление': 'Choose a track', 'Узнай, чем занимается специалист.': 'Discover what professionals do.',
  'Изучай теорию': 'Learn the theory', 'Проходи материалы в удобном темпе.': 'Explore resources at your own pace.',
  'Выполняй практику': 'Put it into practice', 'Закрепляй знания на реальных заданиях.': 'Build your skills with hands-on tasks.',
  'Развивайся': 'Keep growing', 'Смотри короткие видео и общайся с сообществом.': 'Watch short videos and connect with the community.',
  'Посмотреть карту обучения': 'Explore the roadmap', 'ТВОЙ СЛЕДУЮЩИЙ ШАГ': 'YOUR NEXT STEP',
  'ГОТОВ НАЧАТЬ': 'READY TO START', 'СВОЙ ПУТЬ?': 'YOUR JOURNEY?',
  'Выбери направление и сделай первый шаг в профессию.': 'Choose a track and take your first step towards a career.',
  '← Все направления': '← All tracks', 'ЗНАКОМСТВО С ПРОФЕССИЕЙ': 'DISCOVER YOUR FUTURE CAREER',
  'О НАПРАВЛЕНИИ': 'ABOUT THIS TRACK', 'ТВОИ ВОЗМОЖНОСТИ': 'YOUR OPPORTUNITIES',
  'Открыть карту обучения': 'Open learning roadmap', 'Компании': 'Companies',
  'Примеры работодателей, не партнёры платформы. Наличие вакансий не проверено.': 'Examples of employers, not platform partners. Current vacancies have not been verified.',
  'Практика и развитие': 'Practice and growth',
  'Учебные проекты, конкурсы, стажировки и мероприятия — следующие шаги после изучения основ.': 'Student projects, competitions, internships and events are your next steps after learning the basics.',
  'Найти единомышленников →': 'Meet like-minded people →',
  'КОРОТКО О ГЛАВНОМ': 'THE ESSENTIALS, IN SHORT', '04 видео · листай →': '04 videos · swipe →',
  'СМОТРЕТЬ ВИДЕО': 'WATCH VIDEO', 'ВИДЕО ГОТОВИТСЯ': 'COMING SOON',
  'Нажми, чтобы открыть на весь экран ↗': 'Tap to open full screen ↗',
  'Предыдущее видео': 'Previous video', 'Следующее видео': 'Next video', 'Листай видео или используй стрелки': 'Swipe or use the arrows',
  'Закрыть видео': 'Close video', 'Первое видео о дизайне': 'First design video', 'Загрузка видео…': 'Loading video…',
  'Видео готовится': 'Video coming soon', 'Здесь появится обучающий ролик.': 'A learning video will appear here.',
  'Пока можно изучить карту направления.': 'Explore the learning roadmap in the meantime.',
  'Не удалось загрузить видео. Проверьте подключение или наличие файла public/videos/design.mp4.': 'Could not load the video. Check your connection or the public/videos/design.mp4 file.',
  'ОТ ПЕРВОГО ШАГА ДО ПРОЕКТА': 'FROM YOUR FIRST STEP TO YOUR FIRST PROJECT', 'КАРТА': 'LEARNING', 'ОБУЧЕНИЯ': 'ROADMAP',
  'Большая цель — понятные шаги. Двигайся в своём темпе.': 'Big ambitions, clear steps. Learn at your own pace.',
  'О направлении и короткие видео ↗': 'About this track and short videos ↗',
  'Прогресс хранится только в этом браузере.': 'Progress is saved only in this browser.',
  'Следуй по центральной линии и изучай боковые ветки: теорию и практику. В каждой теме — примерные материалы. Ссылки-заглушки никуда не ведут.': 'Follow the main path and explore the theory and practice branches. Each topic includes sample resources. Placeholder links do not lead anywhere.',
  'РЕЗУЛЬТАТ / ПРОЕКТ': 'OUTCOME / PROJECT', 'ПРАКТИКА': 'PRACTICE', 'ТЕОРИЯ': 'THEORY',
  'Начни с видео, затем изучи статью и запиши основные выводы.': 'Start with the video, then read the article and write down your key takeaways.',
  'Отметить как выполненное': 'Mark as completed', '✓ ПЕРВЫЙ ПРОЕКТ В ПОРТФОЛИО': '✓ YOUR FIRST PORTFOLIO PROJECT',
  'СООБЩЕСТВО / ТЕХНО5': 'COMMUNITY / TECHNO5', 'ВМЕСТЕ': 'BETTER', 'ПРОЩЕ': 'TOGETHER',
  'Задавай вопросы, делись идеями и находи единомышленников.': 'Ask questions, share ideas and meet like-minded people.',
  'Создать обсуждение': 'Start a discussion',
  'Форум ТЕХНО5 · Демонстрационная версия. Все обсуждения и счётчики — примеры, публикация пока недоступна.': 'TECHNO5 Forum · Demo. All discussions and counts are examples. Posting is not available yet.',
  'КАТЕГОРИИ': 'CATEGORIES', 'Все темы': 'All topics', 'Все обсуждения': 'All discussions', 'ПОПУЛЯРНОЕ': 'POPULAR',
  'Здесь каждый': 'Everyone here', 'когда-то начинал.': 'was once a beginner.',
  'Уважай собеседников, помогай другим и не бойся спрашивать.': 'Be respectful, help others and never be afraid to ask.',
  'Такой страницы пока нет.': 'This page does not exist.', 'На главную': 'Back to home',
  'Твой путь в мир технологий': 'Your way into technology', 'Страница не найдена': 'Page not found',
  'БУДУЩЕЕ НАЧИНАЕТСЯ ЗДЕСЬ': 'THE FUTURE STARTS HERE',
  'Твой интерес. Твои идеи. Твоё будущее.': 'Your curiosity. Your ideas. Your future.',
  'Образовательная платформа · Прототип': 'Learning platform · Prototype',
  'Закрыть': 'Close', 'ФОРУМ ТЕХНО5': 'TECHNO5 FORUM', 'СКОРО ЗДЕСЬ': 'CONVERSATIONS', 'БУДЕТ ОБЩЕНИЕ': 'COMING SOON',
  'Сейчас это демонстрация форума. Создание обсуждений и ответы появятся после подключения серверной части.': 'This is a forum demo. Discussions and replies will become available once the backend is connected.',
  'Понятно': 'Got it', 'Перейти к содержимому': 'Skip to content',
  'Хранилище недоступно: прогресс сохранится только до обновления страницы.': 'Storage is unavailable: progress will be kept only until the page is refreshed.'
};
export function translate(value) {
  if (language !== 'en') return value;
  const trimmed = value.trim();
  let result = translations[trimmed];
  if (!result && /^\d+ из \d+ тем отмечено$/.test(trimmed)) result = trimmed.replace(/(\d+) из (\d+) тем отмечено/, '$1 of $2 topics completed');
  if (!result && /^\d+ тем$/.test(trimmed)) result = trimmed.replace('тем', 'topics');
  if (!result && /^(↳ )?\d+ ответов( →)?$/.test(trimmed)) result = trimmed.replace('ответов', 'replies');
  if (!result && trimmed.startsWith('СТАРТ / ')) result = trimmed.replace('СТАРТ / ', 'START / ');
  if (!result && trimmed.startsWith('Направление: ')) result = trimmed.replace('Направление: ', 'Learning track: ');
  if (!result && trimmed.startsWith('Открыть видео: ')) result = trimmed.replace('Открыть видео: ', 'Open video: ');
  return result ? value.replace(trimmed, result) : value;
}
// Translate template text nodes and accessible labels, never URLs or HTML markup.
export function localize(root) {
  if (language !== 'en') return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) walker.currentNode.nodeValue = translate(walker.currentNode.nodeValue);
  for (const element of [root, ...root.querySelectorAll('*')]) {
    for (const attribute of ['aria-label', 'alt', 'title']) {
      if (element.hasAttribute?.(attribute)) element.setAttribute(attribute, translate(element.getAttribute(attribute)));
    }
  }
}
export function languagePicker(onChange) {
  const dialog = document.createElement('dialog');
  dialog.className = 'language-dialog';
  dialog.setAttribute('aria-labelledby', 'language-title');
  dialog.innerHTML = `<p class="eyebrow">ТЕХНО5 / TECHNO5</p><h2 id="language-title">Выберите язык<br><span lang="en">Choose your language</span></h2><p>Язык можно изменить в шапке сайта.<br><span lang="en">You can change it anytime in the header.</span></p><div class="language-options"><button class="button blue" data-language="ru" lang="ru">Русский <span>RU</span></button><button class="button orange" data-language="en" lang="en">English <span>EN</span></button></div>`;
  document.body.append(dialog);
  dialog.addEventListener('cancel', event => event.preventDefault());
  dialog.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.language); dialog.close(); dialog.remove(); onChange();
    document.querySelector('#language-select')?.focus({ preventScroll: true });
  }));
  dialog.showModal();
}
