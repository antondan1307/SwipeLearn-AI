import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Flashcard({ term, definition }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = async () => {
    const nextFlipped = !flipped;
    setFlipped(nextFlipped);

    if (nextFlipped) {
      try {
        await addDoc(collection(db, 'flips'), {
          term,
          viewedAt: Timestamp.now(),
        });
      } catch (err) {
        console.error('Failed to record flip', err);
      }
    }
  };

  return (
    <div className="w-64 h-40 mx-auto perspective">
      <div className={`flashcard${flipped ? ' flip' : ''}`} onClick={handleFlip}>
        <div className="flashcard-face">{term}</div>
        <div className="flashcard-face flashcard-back">{definition}</div>
      </div>
    </div>
  );
}
