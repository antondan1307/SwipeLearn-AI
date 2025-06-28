import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import VideoPlayer from '../../components/VideoPlayer';
import Flashcard from '../../components/Flashcard';
import { videos } from '../../data/videos';
import { useEffect, useState } from 'react';

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;
  const video = videos.find((v) => v.id === id);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (!id) return;
    async function fetchCard() {
      try {
        const res = await fetch(`/api/flashcard/${id}`);
        if (res.ok) {
          const data = await res.json();
          setCard(data);
        }
      } catch (err) {
        console.error('Failed to load card', err);
      }
    }
    fetchCard();
  }, [id]);

  if (!video) {
    return (
      <div>
        <Navbar />
        <p className="p-4">Video not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <VideoPlayer src={video.src} />
      <section className="p-4 text-center">
        <Flashcard
          term={(card && card.term) || video.question}
          definition={(card && card.definition) || video.answer}
          videoId={id}
        />
      </section>
    </div>
  );
}
