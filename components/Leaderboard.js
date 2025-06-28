import { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const q = query(collection(db, 'scores'), orderBy('points', 'desc'), limit(5));
        const snap = await getDocs(q);
        const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setScores(items);
      } catch (err) {
        console.error('Failed to load leaderboard', err);
      }
    }
    load();
  }, []);

  return (
    <aside className="p-4 bg-gray-100 rounded w-64">
      <h2 className="text-lg font-semibold mb-2">Leaderboard</h2>
      <ol className="space-y-1">
        {scores.map((s, i) => (
          <li key={s.id} className="flex justify-between">
            <span>{i + 1}. {s.name}</span>
            <span>{s.points}</span>
          </li>
        ))}
        {scores.length === 0 && <li>No data</li>}
      </ol>
    </aside>
  );
}
