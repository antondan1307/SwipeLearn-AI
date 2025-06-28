# SwipeLearn-AI

SwipeLearn-AI is a small prototype for learning English vocabulary.
It is built with **Next.js** and **Tailwind CSS**. User interactions with
flashcards are stored in **Firebase Firestore**.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Provide your Firebase credentials in a `.env` file using these variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

3. Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Each flashcard flip is logged to Firestore.
