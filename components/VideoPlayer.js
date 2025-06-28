export default function VideoPlayer() {
  return (
    <section className="p-4">
      <h2 className="text-lg font-semibold mb-2">Watch</h2>
      <video className="mx-auto" width="320" controls>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
