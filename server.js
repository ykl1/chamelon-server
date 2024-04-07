import express from "express";
import { YoutubeTranscript } from "./index.cjs";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors('chrome-extension://akfpaknmiiacecdbdfophehkkibnckce'));

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/captions/:videoId', async (req, res) => {
  console.log(req.params.videoId)
  try {
    let captions = await YoutubeTranscript.fetchTranscript(req.params.videoId);
    console.log(captions)
    res.json(captions);
  } catch (e) {
    res.json([])
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
