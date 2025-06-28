import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import VideoPlayer from '../../components/VideoPlayer';
import Flashcard from '../../components/Flashcard';
import { videos } from '../../data/videos';

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;
  const video = videos.find((v) => v.id === id);

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
        <Flashcard term={video.question} definition={video.answer} videoId={id} />
      </section>
    </div>
  );
}
