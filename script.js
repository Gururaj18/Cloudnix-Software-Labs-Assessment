const cards = document.querySelectorAll('.card');
const applyButtons = document.querySelectorAll('.apply-btn');
const nextBtn = document.querySelector('.next-btn');

applyButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Reset all cards
    cards.forEach(card => card.classList.remove('selected'));
    applyButtons.forEach(btn => {
      btn.classList.remove('applied');
      btn.textContent = 'Apply';
      btn.disabled = false;
    });

    // Select clicked theme
    cards[index].classList.add('selected');
    button.classList.add('applied');
    button.textContent = '✓';
    button.disabled = true;

    // Enable the Next button
    nextBtn.disabled = false;
  });
});

// When Next is clicked, go to category.html
nextBtn.addEventListener('click', () => {
  window.location.href = 'category.html';
});
