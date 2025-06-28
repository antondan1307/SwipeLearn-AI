# SwipeLearn-AI

SwipeLearn-AI is a prototype web app for learning English vocabulary.
It is built with **Next.js** and **Tailwind CSS**. The home page lists short
videos (each under 30 seconds). Selecting a video shows it with a related
flashcard that you can flip to see the answer. If a card isn't already
defined, the app calls the **OpenAI API** to generate one from the video
transcript. Each flip is logged to **Firebase Firestore** so your progress is
saved.

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
OPENAI_API_KEY=...
```

3. Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Each flashcard flip is logged to Firestore. When a video page loads the server
uses OpenAI to build a flashcard from the transcript if one has not been
predefined.

## Deployment

When deploying to Vercel, make sure the project is detected as **Next.js**. If you see an error about a missing `public` folder, Vercel may have selected the wrong framework. Including the provided `vercel.json` file ensures the build output uses the `.next` directory so the preview works correctly.
