import { Configuration, OpenAIApi } from 'openai';
import { videos } from '../../../data/videos';

export default async function handler(req, res) {
  const { id } = req.query;
  const video = videos.find((v) => v.id === id);
  if (!video) {
    res.status(404).json({ error: 'Video not found' });
    return;
  }

  const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const openai = new OpenAIApi(configuration);

  const prompt = `Create a JSON object with \"term\" and \"definition\" fields summarising a flashcard for this transcript:\n${video.transcript}`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    const message = completion.data.choices[0].message.content.trim();
    let data;
    try {
      data = JSON.parse(message);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to parse OpenAI response' });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error('OpenAI error', err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
}
