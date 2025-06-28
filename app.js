const flashcards = [
  { term: "apple", definition: "a fruit" },
  { term: "banana", definition: "yellow fruit" },
  { term: "cat", definition: "a small domesticated carnivorous mammal" },
  { term: "dog", definition: "man's best friend" },
  { term: "elephant", definition: "a large mammal with a trunk" }
];

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">SwipeLearn-AI</h1>
    </nav>
  );
}

function VideoSection() {
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

function FlashcardSection() {
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const current = flashcards[index];

  const nextCard = () => {
    setIndex((index + 1) % flashcards.length);
    setFlipped(false);
  };

  return (
    <section className="p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">Flashcards</h2>
      <div className="w-64 h-40 mx-auto perspective">
        <div
          className={"flashcard" + (flipped ? " flip" : "")}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="flashcard-face">{current.term}</div>
          <div className="flashcard-face flashcard-back">{current.definition}</div>
        </div>
      </div>
      <button
        onClick={nextCard}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <VideoSection />
      <FlashcardSection />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
