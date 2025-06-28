import { useState } from 'react';
import Flashcard from './Flashcard';

const flashcards = [
  { term: 'apple', definition: 'a fruit' },
  { term: 'banana', definition: 'yellow fruit' },
  { term: 'cat', definition: 'a small domesticated carnivorous mammal' },
  { term: 'dog', definition: "man's best friend" },
  { term: 'elephant', definition: 'a large mammal with a trunk' },
];

export default function FlashcardSection() {
  const [index, setIndex] = useState(0);
  const current = flashcards[index];

  const nextCard = () => {
    setIndex((index + 1) % flashcards.length);
  };

  return (
    <section className="p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">Flashcards</h2>
      <Flashcard term={current.term} definition={current.definition} />
      <button
        onClick={nextCard}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </section>
  );
}
