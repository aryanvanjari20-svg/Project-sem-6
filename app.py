import streamlit as st
import asyncio
from pathlib import Path
import warnings

warnings.filterwarnings("ignore")

st.set_page_config(page_title="Text to Speech", page_icon="🎙️", layout="wide")

OUTPUT_DIR = Path("outputs")
OUTPUT_DIR.mkdir(exist_ok=True)

VOICE_DB = {
    "English": {
        "United States": {
            "Female": {
                "Aria — Natural, Conversational": "en-US-AriaNeural",
                "Jenny — Friendly": "en-US-JennyNeural",
                "Michelle — Warm": "en-US-MichelleNeural",
            },
            "Male": {
                "Guy — Casual": "en-US-GuyNeural",
                "Steffan — Deep": "en-US-SteffanNeural",
                "Christopher — Confident": "en-US-ChristopherNeural",
                "Eric — Clear": "en-US-EricNeural",
                "Roger — Bold": "en-US-RogerNeural",
            },
        },
        "United Kingdom": {
            "Female": {
                "Sonia — British": "en-GB-SoniaNeural",
                "Libby — Bright": "en-GB-LibbyNeural",
                "Maisie — Soft": "en-GB-MaisieNeural",
            },
            "Male": {
                "Ryan — Natural": "en-GB-RyanNeural",
                "Thomas — Formal": "en-GB-ThomasNeural",
            },
        },
        "Australia": {
            "Female": {"Natasha": "en-AU-NatashaNeural"},
            "Male": {"William": "en-AU-WilliamNeural"},
        },
        "India": {
            "Female": {"Neerja": "en-IN-NeerjaNeural"},
            "Male": {"Prabhat": "en-IN-PrabhatNeural"},
        },
    },
    "Hindi": {
        "India": {
            "Female": {"Swara": "hi-IN-SwaraNeural"},
            "Male": {"Madhur": "hi-IN-MadhurNeural"},
        }
    },
    "Tamil": {
        "India": {"Female": {"Pallavi": "ta-IN-PallaviNeural"}, "Male": {"Valluvar": "ta-IN-ValluvarNeural"}},
        "Malaysia": {"Female": {"Kani": "ta-MY-KaniNeural"}, "Male": {"Surya": "ta-MY-SuryaNeural"}},
    },
    "Telugu": {"India": {"Female": {"Shruti": "te-IN-ShrutiNeural"}, "Male": {"Mohan": "te-IN-MohanNeural"}}},
    "Bengali": {
        "India": {"Female": {"Tanishaa": "bn-IN-TanishaaNeural"}, "Male": {"Bashkar": "bn-IN-BashkarNeural"}},
        "Bangladesh": {"Female": {"Nabanita": "bn-BD-NabanitaNeural"}, "Male": {"Pradeep": "bn-BD-PradeepNeural"}},
    },
    "Marathi": {"India": {"Female": {"Aarohi": "mr-IN-AarohiNeural"}, "Male": {"Manohar": "mr-IN-ManoharNeural"}}},
    "Gujarati": {"India": {"Female": {"Dhwani": "gu-IN-DhwaniNeural"}, "Male": {"Niranjan": "gu-IN-NiranjanNeural"}}},
    "Kannada": {"India": {"Female": {"Sapna": "kn-IN-SapnaNeural"}, "Male": {"Gagan": "kn-IN-GaganNeural"}}},
    "Malayalam": {"India": {"Female": {"Sobhana": "ml-IN-SobhanaNeural"}, "Male": {"Midhun": "ml-IN-MidhunNeural"}}},
    "Urdu": {
        "India": {"Female": {"Gul": "ur-IN-GulNeural"}, "Male": {"Salman": "ur-IN-SalmanNeural"}},
        "Pakistan": {"Female": {"Uzma": "ur-PK-UzmaNeural"}, "Male": {"Asad": "ur-PK-AsadNeural"}},
    },
    "Spanish": {
        "Spain": {"Female": {"Elvira": "es-ES-ElviraNeural"}, "Male": {"Alvaro": "es-ES-AlvaroNeural"}},
        "Mexico": {"Female": {"Dalia": "es-MX-DaliaNeural"}, "Male": {"Jorge": "es-MX-JorgeNeural"}},
    },
    "French": {
        "France": {"Female": {"Denise": "fr-FR-DeniseNeural"}, "Male": {"Henri": "fr-FR-HenriNeural"}},
        "Canada": {"Female": {"Sylvie": "fr-CA-SylvieNeural"}, "Male": {"Jean": "fr-CA-JeanNeural"}},
    },
    "German": {
        "Germany": {"Female": {"Katja": "de-DE-KatjaNeural"}, "Male": {"Conrad": "de-DE-ConradNeural"}},
    },
    "Italian": {"Italy": {"Female": {"Elsa": "it-IT-ElsaNeural"}, "Male": {"Diego": "it-IT-DiegoNeural"}}},
    "Portuguese": {
        "Brazil": {"Female": {"Francisca": "pt-BR-FranciscaNeural"}, "Male": {"Antonio": "pt-BR-AntonioNeural"}},
        "Portugal": {"Female": {"Raquel": "pt-PT-RaquelNeural"}, "Male": {"Duarte": "pt-PT-DuarteNeural"}},
    },
    "Japanese": {"Japan": {"Female": {"Nanami": "ja-JP-NanamiNeural"}, "Male": {"Keita": "ja-JP-KeitaNeural"}}},
    "Chinese": {
        "Mainland China": {"Female": {"Xiaoxiao": "zh-CN-XiaoxiaoNeural"}, "Male": {"Yunxi": "zh-CN-YunxiNeural"}},
        "Taiwan": {"Female": {"HsiaoChen": "zh-TW-HsiaoChenNeural"}, "Male": {"YunJhe": "zh-TW-YunJheNeural"}},
    },
    "Korean": {"South Korea": {"Female": {"Sun-Hi": "ko-KR-SunHiNeural"}, "Male": {"InJoon": "ko-KR-InJoonNeural"}}},
    "Arabic": {
        "Saudi Arabia": {"Female": {"Aisha": "ar-SA-AishaNeural"}, "Male": {"Hamed": "ar-SA-HamedNeural"}},
        "Egypt": {"Female": {"Salma": "ar-EG-SalmaNeural"}, "Male": {"Shakir": "ar-EG-ShakirNeural"}},
    },
    "Russian": {"Russia": {"Female": {"Svetlana": "ru-RU-SvetlanaNeural"}, "Male": {"Dmitry": "ru-RU-DmitryNeural"}}},
}


# ── Subtitle helpers ──────────────────────────────────────────────────────────

def _ms_to_vtt(ms: int) -> str:
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1_000)
    return f"{h:02d}:{m:02d}:{s:02d}.{ms:03d}"


def _ms_to_srt(ms: int) -> str:
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1_000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def build_subtitles(words: list, group_size: int = 5) -> tuple:
    """Group word-boundary events into caption blocks. Returns (vtt_str, srt_str)."""
    if not words:
        return "", ""

    groups = [words[i:i + group_size] for i in range(0, len(words), group_size)]
    vtt_lines = ["WEBVTT", ""]
    srt_lines = []

    for idx, group in enumerate(groups, start=1):
        # edge-tts offset/duration are in 100-nanosecond units → convert to ms
        start_ms = int(group[0]["offset"] / 10_000)
        end_ms   = int((group[-1]["offset"] + group[-1]["duration"]) / 10_000)
        caption  = " ".join(w["text"] for w in group)

        vtt_lines += [f"{_ms_to_vtt(start_ms)} --> {_ms_to_vtt(end_ms)}", caption, ""]
        srt_lines += [str(idx), f"{_ms_to_srt(start_ms)} --> {_ms_to_srt(end_ms)}", caption, ""]

    return "\n".join(vtt_lines), "\n".join(srt_lines)


# ── TTS core ──────────────────────────────────────────────────────────────────

async def generate_speech(text, voice_code, output_file, rate, pitch, volume):
    import edge_tts
    rate_str   = f"+{rate}%"   if rate   >= 0 else f"{rate}%"
    pitch_str  = f"+{pitch}Hz" if pitch  >= 0 else f"{pitch}Hz"
    volume_str = f"+{volume}%" if volume >= 0 else f"{volume}%"

    communicate  = edge_tts.Communicate(text, voice_code,
                                         rate=rate_str, pitch=pitch_str, volume=volume_str)
    audio_chunks = []
    word_events  = []

    async for event in communicate.stream():
        if event["type"] == "audio":
            audio_chunks.append(event["data"])
        elif event["type"] == "WordBoundary":
            word_events.append({
                "text":     event["text"],
                "offset":   event["offset"],
                "duration": event["duration"],
            })

    with open(output_file, "wb") as f:
        f.write(b"".join(audio_chunks))

    return build_subtitles(word_events)


# ── UI ────────────────────────────────────────────────────────────────────────

st.title("🎙️ Text to Speech")

col1, col2 = st.columns([1, 1.8], gap="large")

with col1:
    st.subheader("Voice Settings")
    language   = st.selectbox("Language", sorted(VOICE_DB.keys()))
    region     = st.selectbox("Region", sorted(VOICE_DB[language].keys()))
    gender     = st.selectbox("Gender", sorted(VOICE_DB[language][region].keys()))
    voices     = VOICE_DB[language][region][gender]
    voice_name = st.selectbox("Voice", list(voices.keys()))
    voice_code = voices[voice_name]

    st.divider()
    st.subheader("Audio Controls")
    rate   = st.slider("Speed",  -50, 100, 0, 5, format="%d%%")
    pitch  = st.slider("Pitch",  -50,  50, 0, 5, format="%dHz")
    volume = st.slider("Volume", -50,  50, 0, 5, format="%d%%")

with col2:
    st.subheader("Script")
    text = st.text_area("Enter text", height=250,
                        placeholder="Type your text here...",
                        label_visibility="collapsed")
    st.caption(f"{len(text)} characters")

    if st.button("🎤 Generate Speech", use_container_width=True):
        if not text.strip():
            st.warning("Please enter some text.")
        else:
            with st.spinner("Generating..."):
                output_path = str(OUTPUT_DIR / "output.mp3")
                try:
                    vtt, srt = asyncio.run(
                        generate_speech(text, voice_code, output_path, rate, pitch, volume)
                    )
                    st.session_state["audio_path"]  = output_path
                    st.session_state["voice_label"] = f"{voice_name} · {language} ({region}) · {gender}"
                    st.session_state["vtt"]         = vtt
                    st.session_state["srt"]         = srt
                    st.success("Done!")
                except Exception as e:
                    st.error(f"Error: {e}")

    if "audio_path" in st.session_state:
        st.subheader("Output")
        with open(st.session_state["audio_path"], "rb") as f:
            audio_bytes = f.read()
        st.audio(audio_bytes, format="audio/mp3")
        st.caption(st.session_state.get("voice_label", ""))

        dl1, dl2, dl3 = st.columns(3)
        with dl1:
            st.download_button("⬇ MP3", audio_bytes, "speech.mp3", "audio/mpeg",
                               use_container_width=True)
        with dl2:
            st.download_button("⬇ VTT", st.session_state["vtt"], "subtitles.vtt", "text/vtt",
                               use_container_width=True, disabled=not st.session_state["vtt"])
        with dl3:
            st.download_button("⬇ SRT", st.session_state["srt"], "subtitles.srt", "text/plain",
                               use_container_width=True, disabled=not st.session_state["srt"])

        if st.session_state["vtt"]:
            with st.expander("Preview captions"):
                st.code(st.session_state["srt"], language=None)
