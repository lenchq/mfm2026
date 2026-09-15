import { language } from './i18n.js';

const examples = {
  'Кто такой digital-дизайнер': ['Кто такой дизайнер', 'Как стать digital-дизайнером'],
  'Основы композиции и визуальной иерархии': ['Композиция: как управлять вниманием', '7 правил визуальной иерархии'],
  'Цвет в интерфейсах': ['Как подобрать цвета для интерфейса', 'Контраст и доступность цветовой палитры'],
  'Типографика': ['Как выбрать шрифт для сайта', 'Размеры, интервалы и типографическая шкала'],
  'Знакомство с Figma': ['Первый макет в Figma за 15 минут', 'Figma для начинающих: инструменты и панели'],
  'Auto Layout': ['Адаптивная карточка с Auto Layout', 'Отступы, вложенность и режимы размеров в Figma'],
  'Кто такой Data Analyst и AI-специалист': ['Чем занимается аналитик данных', 'Как начать карьеру в Data Science'],
  'Основы Python': ['Первая программа на Python', 'Python с нуля: синтаксис и типы данных'],
  'Pandas и NumPy': ['Как прочитать CSV и обработать таблицу', 'Шпаргалка по Pandas и NumPy'],
  'Машинное обучение': ['Как модель учится на данных', 'Классификация и регрессия на простых примерах'],
  'Роботы и БПЛА': ['Какие бывают роботы и дроны', 'Профессии в робототехнике: с чего начать'],
  'Основы электроники': ['Как работает электрическая цепь', 'Электроника для начинающих: основные компоненты'],
  'Знакомство с Arduino': ['Первый запуск Arduino в симуляторе', 'Arduino IDE: установка и первый скетч'],
  'Правила безопасной эксплуатации': ['Безопасность до первого полёта', 'Чек-лист эксплуатации БПЛА и местные ограничения']
};

export function materialLinks(topic, practice) {
  if (language === 'en') {
    const designer = topic.toLowerCase().includes('digital designer');
    const video = designer ? 'Who is a designer?' : `${topic}: ${practice ? 'a guided walkthrough' : 'explained with examples'}`;
    const article = designer ? 'How to become a digital designer' : `${topic}: ${practice ? 'a step-by-step guide' : 'a beginner’s guide'}`;
    return `<div class="material-links"><p class="material-caption">SAMPLE RESOURCES · PLACEHOLDER LINKS</p>
      <a href="#" data-material aria-disabled="true"><span aria-hidden="true">▷</span><span>Video “${video}”</span></a>
      <a href="#" data-material aria-disabled="true"><span aria-hidden="true">▤</span><span>Article “${article}”</span></a>
      ${practice ? `<a href="#" data-material aria-disabled="true"><span aria-hidden="true">↳</span><span>Checklist “${topic}: review your results”</span></a>` : ''}</div>`;
  }
  const titles = examples[topic] || (practice
    ? [`Разбор задания «${topic}»`, `Пошаговое руководство: ${topic.toLocaleLowerCase('ru')}`]
    : [`${topic}: объяснение на примерах`, `${topic}: основы и памятка начинающему`]);
  return `<div class="material-links"><p class="material-caption">ПРИМЕРЫ МАТЕРИАЛОВ · ССЫЛКИ-ЗАГЛУШКИ</p>
    <a href="#" data-material aria-disabled="true"><span aria-hidden="true">▷</span><span>Видео «${titles[0]}»</span></a>
    <a href="#" data-material aria-disabled="true"><span aria-hidden="true">▤</span><span>Статья «${titles[1]}»</span></a>
    ${practice ? `<a href="#" data-material aria-disabled="true"><span aria-hidden="true">↳</span><span>Чек-лист «${topic}: проверка результата»</span></a>` : ''}</div>`;
}
