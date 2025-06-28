import { useState } from 'react';
import { collection, addDoc, Timestamp, doc, updateDoc, setDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Flashcard({ term, definition, videoId }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = async () => {
    const nextFlipped = !flipped;
    setFlipped(nextFlipped);

    if (nextFlipped) {
      try {
        await addDoc(collection(db, 'flips'), {
          term,
          videoId,
          viewedAt: Timestamp.now(),
        });
        const username =
          typeof window !== 'undefined'
            ? localStorage.getItem('username') || 'guest'
            : 'guest';
        const ref = doc(db, 'scores', username);
        try {
          await updateDoc(ref, { points: increment(1) });
        } catch (err) {
          await setDoc(ref, { name: username, points: 1 });
        }
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
