# 🎙️ Text to Speech with Subtitle Generation

A multilingual text-to-speech web application built with Streamlit and Microsoft Edge TTS. Convert text to natural-sounding speech in 20+ languages and automatically generate synchronized subtitles (VTT/SRT) for video editing.

---

## ✨ Features

- **20+ Languages** — English, Hindi, Tamil, Telugu, Bengali, Spanish, French, German, Japanese, Chinese, Korean, Arabic, and more
- **60+ Neural Voices** — Multiple accents, genders, and voice personalities per language
- **Audio Controls** — Adjust speed (-50% to +100%), pitch (-50Hz to +50Hz), and volume (-50% to +50%)
- **Subtitle Generation** — Automatic VTT and SRT caption files with word-level timestamps
- **Instant Playback** — Listen to generated audio directly in the browser
- **One-Click Download** — Export MP3, VTT, and SRT files

---

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- Internet connection (for edge-tts API)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siddhesh3940/TTS.git
   cd TTS
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

### Running the App

```bash
streamlit run app.py
```

The app will open automatically in your browser at `http://localhost:8501`

---

## 📖 How to Use

1. **Select Voice Settings**
   - Choose Language (e.g., English, Hindi, Spanish)
   - Select Region (e.g., United States, India, Spain)
   - Pick Gender (Male/Female)
   - Choose Voice personality

2. **Adjust Audio Controls** (optional)
   - Speed: -50% (slower) to +100% (faster)
   - Pitch: -50Hz (lower) to +50Hz (higher)
   - Volume: -50% (quieter) to +50% (louder)

3. **Enter Your Text**
   - Type or paste text in the script area
   - Character count is displayed below

4. **Generate Speech**
   - Click "🎤 Generate Speech"
   - Wait for processing (usually 2-5 seconds)

5. **Download Outputs**
   - **⬇ MP3** — Audio file
   - **⬇ VTT** — WebVTT subtitle file (for HTML5 video)
   - **⬇ SRT** — SubRip subtitle file (for video editors)

6. **Preview Captions**
   - Expand "Preview captions" to see subtitle timing

---

## 🎯 Use Cases

- **Content Creators** — Generate voiceovers for YouTube videos with synced captions
- **Video Editors** — Create subtitle files for multilingual content
- **Accessibility** — Add captions to videos for hearing-impaired audiences
- **E-Learning** — Convert course materials to audio with timestamps
- **Podcasters** — Generate transcripts with precise timing
- **Language Learners** — Listen to text in different accents with word-level timing

---

## 🗂️ Project Structure

```
TTS/
├── app.py                  # Main Streamlit application
├── requirements.txt        # Python dependencies
├── voices.txt              # Full list of available voices (400+)
├── .gitignore              # Git ignore rules
├── README.md               # This file
└── outputs/                # Generated audio files (auto-created, not tracked)
    └── output.mp3
```

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Streamlit |
| TTS Engine | edge-tts (Microsoft Azure Neural Voices) |
| Language | Python 3.x |
| Audio Format | MP3 |
| Subtitle Formats | VTT, SRT |
| Async Runtime | asyncio |

---

## 📋 Supported Languages

- **English** — US, UK, Australia, India, Canada
- **Indian Languages** — Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Urdu
- **European** — Spanish, French, German, Italian, Portuguese, Russian
- **Asian** — Japanese, Chinese (Mandarin, Cantonese), Korean
- **Middle Eastern** — Arabic (Saudi, Egyptian), Urdu

---

## 🔧 How It Works

1. **Text Input** → User enters text and selects voice settings
2. **edge-tts API** → Sends request to Microsoft's neural TTS endpoint
3. **Stream Processing** → Captures audio chunks + word boundary events
4. **Subtitle Building** → Groups words into 5-word caption blocks with timestamps
5. **Output** → Saves MP3 + generates VTT/SRT files

### Subtitle Format Example

**SRT Output:**
```
1
00:00:00,000 --> 00:00:02,340
Hello this is a test

2
00:00:02,340 --> 00:00:04,820
of the subtitle generation feature
```

**VTT Output:**
```
WEBVTT

00:00:00.000 --> 00:00:02.340
Hello this is a test

00:00:02.340 --> 00:00:04.820
of the subtitle generation feature
```

---

## 🎨 Customization

### Change Caption Group Size

Edit `app.py` line where `build_subtitles` is called:

```python
# Default: 5 words per caption
vtt, srt = asyncio.run(generate_speech(...))

# Custom: 3 words per caption (faster captions)
# Modify the build_subtitles function call with group_size parameter
```

### Add More Voices

Expand the `VOICE_DB` dictionary in `app.py` with additional voices from `voices.txt`

---

## ⚠️ Limitations

- **Internet Required** — edge-tts calls Microsoft's live API
- **No History** — Each generation overwrites `outputs/output.mp3`
- **Single Input** — One text at a time (no batch processing yet)
- **Rate Limits** — Very long texts may timeout

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more languages/voices
- Improve subtitle grouping logic
- Add batch processing
- Implement generation history

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **edge-tts** — Free Python library for Microsoft Edge TTS
- **Streamlit** — Rapid web app framework
- **Microsoft Azure** — Neural voice models

---

## 📞 Support

For issues or questions, open an issue on [GitHub](https://github.com/siddhesh3940/TTS/issues)

---

**Made with ❤️ using Python and Streamlit**
