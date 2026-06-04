document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('open'));
    card.addEventListener('keypress', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.classList.toggle('open');
      }
    });
  });

  document.querySelectorAll('.quiz-question').forEach(question => {
    const answer = Number(question.dataset.answer);
    const feedback = question.querySelector('.quiz-feedback');
    question.querySelectorAll('.quiz-option').forEach(button => {
      button.addEventListener('click', () => {
        question.querySelectorAll('.quiz-option').forEach(b => {
          b.classList.remove('correct', 'wrong');
          if (Number(b.dataset.index) === answer) b.classList.add('correct');
        });

        if (Number(button.dataset.index) === answer) {
          feedback.textContent = 'Correct!';
          feedback.style.color = '#34d399';
        } else {
          button.classList.add('wrong');
          feedback.textContent = 'Niet juist. Kijk naar het groene antwoord en herhaal de redenering.';
          feedback.style.color = '#fb7185';
        }
      });
    });
  });
});
