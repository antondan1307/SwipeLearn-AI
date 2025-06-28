import Link from 'next/link';
import Navbar from '../components/Navbar';
import Leaderboard from '../components/Leaderboard';
import { videos } from '../data/videos';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex">
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold mb-2">Short Videos</h2>
          <ul className="space-y-2">
            {videos.map((v) => (
              <li key={v.id}>
                <Link href={`/video/${v.id}`} className="text-blue-600 underline">
                  {v.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Leaderboard />
      </main>
    </div>
  );
}
