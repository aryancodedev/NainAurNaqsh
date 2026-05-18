import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

const videosDir = path.join(process.cwd(), 'src', 'assets', 'videos');
fs.mkdirSync(videosDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, videosDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

app.use(cors());
app.use(express.json());

// Serve static assets so uploaded videos are accessible at /assets/
app.use('/assets', express.static(path.join(process.cwd(), 'src', 'assets')));

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const relativePath = path.join('assets', 'videos', req.file.filename).replace(/\\/g, '/');
  res.json({ ok: true, filename: req.file.filename, url: `/${relativePath}` });
});

app.listen(PORT, () => {
  console.log(`Upload server running on http://localhost:${PORT}`);
  console.log(`Serving /assets from ${path.join(process.cwd(), 'src', 'assets')}`);
});
