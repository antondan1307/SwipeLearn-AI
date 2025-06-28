import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const flashcards = [
  { term: 'apple', definition: 'a fruit' },
  { term: 'banana', definition: 'yellow fruit' },
  { term: 'cat', definition: 'a small domesticated carnivorous mammal' },
  { term: 'dog', definition: "man's best friend" },
  { term: 'elephant', definition: 'a large mammal with a trunk' },
];

export default function FlashcardSection() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const current = flashcards[index];

  const recordView = async () => {
    try {
      await addDoc(collection(db, 'views'), {
        term: current.term,
        at: Timestamp.now(),
      });
    } catch (e) {
      console.error('Failed to record view', e);
    }
  };

  const handleFlip = async () => {
    setFlipped(!flipped);
    if (!flipped) {
      await recordView();
    }
  };

  const nextCard = () => {
    setIndex((index + 1) % flashcards.length);
    setFlipped(false);
  };

  return (
    <section className="p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">Flashcards</h2>
      <div className="w-64 h-40 mx-auto perspective">
        <div className={`flashcard${flipped ? ' flip' : ''}`} onClick={handleFlip}>
          <div className="flashcard-face">{current.term}</div>
          <div className="flashcard-face flashcard-back">{current.definition}</div>
        </div>
      </div>
      <button onClick={nextCard} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Next
      </button>
    </section>
  );
}
