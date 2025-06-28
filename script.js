const flashcards = [
  { term: "apple", definition: "a fruit" },
  { term: "banana", definition: "yellow fruit" },
  { term: "cat", definition: "a small domesticated carnivorous mammal" },
  { term: "dog", definition: "man's best friend" },
  { term: "elephant", definition: "a large mammal with a trunk" }
];

let current = 0;
const cardElement = document.getElementById('flashcard');
const front = cardElement.querySelector('.front');
const back = cardElement.querySelector('.back');
const nextBtn = document.getElementById('next-btn');

function showCard(index) {
  const card = flashcards[index];
  front.textContent = card.term;
  back.textContent = card.definition;
  cardElement.classList.remove('flipped');
}

cardElement.addEventListener('click', () => {
  cardElement.classList.toggle('flipped');
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % flashcards.length;
  showCard(current);
});

// initialize
showCard(current);
