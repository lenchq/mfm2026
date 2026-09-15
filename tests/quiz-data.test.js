import test from 'node:test';
import assert from 'node:assert/strict';
import { designQuiz } from '../src/quiz-data.js';
import { tracks } from '../src/data.js';
import { tracksEn } from '../src/data.en.js';

test('reference quiz has five bilingual questions, answer cards and four choices', () => {
  assert.equal(designQuiz.length, 5);
  assert.deepEqual(designQuiz.map(card => card.theme), ['lime', 'pink', 'olive', 'purple', 'ink']);
  for (const card of designQuiz) {
    assert.equal(card.options.length, 4);
    assert.ok(Number.isInteger(card.correct) && card.correct >= 0 && card.correct < 4);
    for (const pair of [card.question, card.title, card.explanation, card.takeaway, ...card.options, ...(card.items || [])]) {
      assert.equal(pair.length, 2);
      assert.ok(pair.every(value => typeof value === 'string' && value.trim().length > 0));
      assert.ok(!/[а-яё]/i.test(pair[1]), `Untranslated English text: ${pair[1]}`);
    }
  }
});

test('the correct choices follow the supplied reference cards', () => {
  assert.deepEqual(designQuiz.map(card => card.correct), [1, 1, 1, 1, 1]);
});

test('localized company lists and topic ordering remain aligned', () => {
  for (const [index, track] of tracks.entries()) {
    const english = tracksEn[index];
    assert.equal(track.id, english.id);
    assert.equal(track.companies.length, english.companies.length);
    assert.ok(!track.companies.includes('Кронштадт'));
    assert.deepEqual(track.stages.map(stage => [stage[1].length, stage[2].length]), english.stages.map(stage => [stage[1].length, stage[2].length]));
  }
});
