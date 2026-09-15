import { choose } from './i18n.js';
import { designQuiz } from './quiz-data.js';
import './quiz.css';

const text = pair => choose(...pair);
export const hasQuiz = (trackId, videoIndex) => trackId === 'dizayn' && videoIndex === 0;

// One local state per viewing session: an answer cannot be submitted twice.
export function startQuiz(container, track, onRoadmap) {
  let current = 0;
  const answers = [];
  function focusHeading() {
    container.scrollTop = 0;
    container.querySelector('[tabindex="-1"]')?.focus({ preventScroll: true });
  }
  function frame(content, answer = false) {
    const card = designQuiz[current];
    return `<div class="quiz-shell"><div class="quiz-card quiz-${card.theme} ${answer ? 'quiz-answer' : ''}">
      <div class="quiz-top"><span class="quiz-brand">IN<br>DESIGN<br>WE TRUST</span><span class="quiz-doodle" aria-hidden="true">${card.icon}</span><span class="quiz-counter" aria-label="${choose('Карточка', 'Card')} ${current + 1} / ${designQuiz.length}">${current + 1}/${designQuiz.length}</span></div>
      ${content}<span class="quiz-heart" aria-hidden="true">♡</span>
    </div><p class="quiz-footnote">${choose('Закрепляем идеи из видео · Дизайн', 'Recap the video · Design')}</p></div>`;
  }
  function question() {
    const card = designQuiz[current];
    container.innerHTML = frame(`<h3 class="quiz-heading" tabindex="-1"><span>${text(card.question)}</span></h3>
      <p class="quiz-instruction">${choose('Выбери один ответ', 'Choose one answer')}</p>
      <div class="quiz-options">${card.options.map((option, index) => `<button class="quiz-option" data-answer="${index}"><b aria-hidden="true">${'ABCD'[index]}</b><span>${text(option)}</span></button>`).join('')}</div>
      <span class="quiz-sticker">${choose('ПОДУМАЙ!', 'THINK ABOUT IT!')} ↗</span>`);
    container.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
      if (answers.length !== current) return;
      answers.push(Number(button.dataset.answer));
      answer();
    }));
    focusHeading();
  }
  function answer() {
    const card = designQuiz[current];
    const correct = answers[current] === card.correct;
    container.innerHTML = frame(`<p class="quiz-verdict" role="status">${correct ? choose('✓ Верно! Запомни главное', '✓ Correct! Remember the key idea') : choose('↳ Не совсем. Давай разберёмся', '↳ Not quite. Let’s explore why')}</p>
      <h3 class="quiz-heading" tabindex="-1"><span>${text(card.title)}</span></h3>
      <p class="quiz-explanation">${text(card.explanation)}</p>
      ${card.theme === 'olive' ? '<div class="quiz-swatches" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' : ''}
      ${card.items ? `<ul class="quiz-facts ${card.items.length === 4 ? 'quiz-journey' : ''}">${card.items.map((item, i) => `<li><b aria-hidden="true">${card.items.length === 4 ? ['↗', '☕', '☺', '☆'][i] : ['Aa', 'Aa', '◉'][i]}</b><span>${text(item)}</span></li>`).join('')}</ul>` : ''}
      <div class="quiz-takeaway">${text(card.takeaway)}</div>
      <div class="quiz-answer-detail"><p>${choose('Твой ответ:', 'Your answer:')} ${'ABCD'[answers[current]]} — ${text(card.options[answers[current]])}</p>${correct ? '' : `<p><b>${choose('Правильный ответ:', 'Correct answer:')} ${'ABCD'[card.correct]}</b> — ${text(card.options[card.correct])}</p>`}</div>
      <button class="quiz-next">${current === designQuiz.length - 1 ? choose('К результату', 'See results') : choose('Следующая карточка', 'Next card')} <span aria-hidden="true">→</span></button>`, true);
    container.querySelector('.quiz-next').addEventListener('click', () => {
      if (current === designQuiz.length - 1) finish();
      else { current++; question(); }
    });
    focusHeading();
  }
  function finish() {
    const score = answers.filter((answer, i) => answer === designQuiz[i].correct).length;
    container.innerHTML = `<div class="quiz-shell"><div class="quiz-card quiz-lime quiz-complete"><span class="quiz-brand">IN<br>DESIGN<br>WE TRUST</span><span class="quiz-finish-star" aria-hidden="true">☆</span><p class="quiz-verdict">${choose('ВСЕ КАРТОЧКИ ПРОЙДЕНЫ', 'ALL CARDS COMPLETED')}</p><h3 class="quiz-heading" tabindex="-1"><span>${choose('Теперь — к практике!', 'Now put it into practice!')}</span></h3><p class="quiz-score">${score}<span> / ${designQuiz.length}</span></p><p class="quiz-explanation">${choose('правильных ответов. Продолжи знакомство с профессией по понятной карте обучения.', 'correct answers. Keep exploring your future profession with a clear learning roadmap.')}</p><button class="quiz-next" data-quiz-roadmap>${choose('Перейти к карте обучения', 'Open learning roadmap')} ↗</button><button class="quiz-retry">${choose('Пройти ещё раз', 'Try again')}</button></div></div>`;
    container.querySelector('[data-quiz-roadmap]').addEventListener('click', () => onRoadmap(track));
    container.querySelector('.quiz-retry').addEventListener('click', () => { current = 0; answers.length = 0; question(); });
    focusHeading();
  }
  container.classList.add('quiz-stage');
  question();
}
