import React, { useState, useEffect } from 'react'

const API = 'http://localhost:8000'

export default function TextToSpeech() {
  const [voiceDB, setVoiceDB]       = useState({})
  const [language, setLanguage]     = useState('')
  const [region, setRegion]         = useState('')
  const [gender, setGender]         = useState('')
  const [voiceName, setVoiceName]   = useState('')
  const [voiceCode, setVoiceCode]   = useState('')

  const [rate, setRate]     = useState(0)
  const [pitch, setPitch]   = useState(0)
  const [volume, setVolume] = useState(0)

  const [text, setText]     = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')
  const [result, setResult] = useState(null)   // { audio_url, vtt, srt }
  const [showCaptions, setShowCaptions] = useState(false)

  /* Fetch voice DB on mount */
  useEffect(() => {
    fetch(`${API}/api/voices`)
      .then(r => r.json())
      .then(db => {
        setVoiceDB(db)
        const lang = Object.keys(db).sort()[0]
        setLanguage(lang)
      })
      .catch(() => setError('Cannot reach backend. Is uvicorn running on port 8000?'))
  }, [])

  /* Cascade selects */
  useEffect(() => {
    if (!voiceDB[language]) return
    const reg = Object.keys(voiceDB[language]).sort()[0]
    setRegion(reg)
  }, [language, voiceDB])

  useEffect(() => {
    if (!voiceDB[language]?.[region]) return
    const gen = Object.keys(voiceDB[language][region]).sort()[0]
    setGender(gen)
  }, [language, region, voiceDB])

  useEffect(() => {
    if (!voiceDB[language]?.[region]?.[gender]) return
    const voices = voiceDB[language][region][gender]
    const name = Object.keys(voices)[0]
    setVoiceName(name)
    setVoiceCode(voices[name])
  }, [language, region, gender, voiceDB])

  const handleVoiceName = (name) => {
    setVoiceName(name)
    setVoiceCode(voiceDB[language][region][gender][name])
  }

  const generate = async () => {
    if (!text.trim()) { setError('Please enter some text.'); return }
    setError('')
    setResult(null)
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice_code: voiceCode, rate, pitch, volume }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Unknown error')
      setResult({ ...data, audio_url: `${API}${data.audio_url}?t=${Date.now()}` })
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const downloadFile = async (url, filename, type) => {
    const res = await fetch(url)
    const blob = await res.blob()
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = filename
    a.click()
  }

  const downloadText = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = filename
    a.click()
  }

  const languages = Object.keys(voiceDB).sort()
  const regions   = voiceDB[language] ? Object.keys(voiceDB[language]).sort() : []
  const genders   = voiceDB[language]?.[region] ? Object.keys(voiceDB[language][region]).sort() : []
  const voices    = voiceDB[language]?.[region]?.[gender] ? Object.keys(voiceDB[language][region][gender]) : []

  return (
    <>
      <div className="topbar">
        <span className="topbar-label">Module / Text to Speech</span>
        <div className="topbar-actions">
          <span className="badge badge-orange">ENGINE: NEURAL_EDGE_V4</span>
        </div>
      </div>

      <div className="tts-layout" style={{ gap: 1 }}>
        {/* ── Left panel: Voice settings ─────────────────────────────────── */}
        <aside className="tts-panel" style={{ background: 'var(--bg-sidebar)', border: '1px solid var(--border)', borderRadius: 0, padding: 24 }}>
          <span className="panel-title" style={{ fontFamily: 'Outfit', textTransform: 'uppercase', fontSize: 12, letterSpacing: 1, marginBottom: 24, display: 'block' }}>
            Configuration
          </span>

          <div className="form-group">
            <label className="form-label" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--text-faint)', fontWeight: 700 }}>Language</label>
            <select id="sel-language" className="form-select" value={language} onChange={e => setLanguage(e.target.value)}
                    style={{ borderRadius: 0, border: '1px solid var(--border)', background: 'var(--bg-input)' }}>
              {languages.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--text-faint)', fontWeight: 700 }}>Region</label>
            <select id="sel-region" className="form-select" value={region} onChange={e => setRegion(e.target.value)}
                    style={{ borderRadius: 0, border: '1px solid var(--border)', background: 'var(--bg-input)' }}>
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--text-faint)', fontWeight: 700 }}>Gender</label>
            <select id="sel-gender" className="form-select" value={gender} onChange={e => setGender(e.target.value)}
                    style={{ borderRadius: 0, border: '1px solid var(--border)', background: 'var(--bg-input)' }}>
              {genders.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--text-faint)', fontWeight: 700 }}>Voice Model</label>
            <select id="sel-voice" className="form-select" value={voiceName} onChange={e => handleVoiceName(e.target.value)}
                    style={{ borderRadius: 0, border: '1px solid var(--border)', background: 'var(--bg-input)' }}>
              {voices.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>

          <div className="divider" style={{ margin: '24px 0', borderColor: 'var(--border)' }} />
          
          <span className="panel-title" style={{ fontFamily: 'Outfit', textTransform: 'uppercase', fontSize: 12, letterSpacing: 1, marginBottom: 24, display: 'block' }}>
            Signal Processing
          </span>

          {[
            { label: 'Speed',  value: rate,   set: setRate,   min: -50, max: 100, unit: '%' },
            { label: 'Pitch',  value: pitch,  set: setPitch,  min: -50, max: 50,  unit: 'Hz' },
            { label: 'Volume', value: volume, set: setVolume, min: -50, max: 50,  unit: '%' },
          ].map(({ label, value, set, min, max, unit }) => (
            <div key={label} className="slider-row" style={{ marginBottom: 16 }}>
              <span className="slider-label" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>{label}</span>
              <input
                id={`slider-${label.toLowerCase()}`}
                type="range"
                min={min} max={max} step={5}
                value={value}
                onChange={e => set(Number(e.target.value))}
                style={{ height: 4, background: 'var(--border)' }}
              />
              <span className="slider-value" style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--accent)', width: 40, textAlign: 'right' }}>
                {value > 0 ? '+' : ''}{value}
              </span>
            </div>
          ))}
        </aside>

        {/* ── Right panel: Script + output ───────────────────────────────── */}
        <div className="tts-main" style={{ padding: 32, background: 'var(--bg-app)', border: '1px solid var(--border)', borderLeft: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span className="panel-title" style={{ fontFamily: 'Outfit', textTransform: 'uppercase', fontSize: 12, letterSpacing: 1 }}>
              Input Script
            </span>
            <div className="tts-char-count" style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--text-faint)' }}>
              LEN: {text.length.toLocaleString()} CHR
            </div>
          </div>

          <textarea
            id="tts-textarea"
            className="tts-textarea"
            placeholder="INPUT_DATA_STREAM..."
            value={text}
            onChange={e => setText(e.target.value)}
            style={{ borderRadius: 0, border: '1px solid var(--border)', background: 'var(--bg-panel)', padding: 20, minHeight: 300, fontFamily: 'Plus Jakarta Sans' }}
          />

          {error && <div className="alert alert-error" style={{ borderRadius: 0, border: '1px solid #ef4444', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontSize: 12, padding: 12, marginTop: 16 }}>
            ERROR_LOG: {error}
          </div>}

          <div style={{ marginTop: 24 }}>
            <button
              id="btn-generate"
              className="btn btn-primary btn-full"
              onClick={generate}
              disabled={loading || !voiceCode}
              style={{ height: 56, fontSize: 14 }}
            >
              {loading ? 'STATUS: PROCESSING...' : 'EXECUTE_SYNTHESIS'}
            </button>
          </div>

          {result && (
            <div className="audio-section" style={{ marginTop: 48, padding: 24, border: '1px solid var(--accent)', background: 'var(--accent-dim)' }}>
              <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
                <span className="audio-label" style={{ fontFamily: 'Outfit', textTransform: 'uppercase', fontSize: 11, color: 'var(--accent)' }}>
                  Output Stream · {voiceName}
                </span>
                <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--accent)' }}>READY_FOR_PLAYBACK</span>
              </div>

              <audio id="audio-player" controls src={result.audio_url} style={{ width: '100%', filter: 'invert(1) hue-rotate(180deg)' }} />

              <div className="download-row" style={{ marginTop: 20, gap: 8 }}>
                <button
                  id="btn-dl-mp3"
                  className="btn btn-secondary btn-sm"
                  onClick={() => downloadFile(result.audio_url, 'speech.mp3', 'audio/mpeg')}
                  style={{ flex: 1 }}
                >
                  DL_MP3
                </button>
                {result.vtt && (
                  <button
                    id="btn-dl-vtt"
                    className="btn btn-secondary btn-sm"
                    onClick={() => downloadText(result.vtt, 'subtitles.vtt')}
                    style={{ flex: 1 }}
                  >
                    DL_VTT
                  </button>
                )}
                <button
                  id="btn-dl-srt"
                  className="btn btn-secondary btn-sm"
                  onClick={() => downloadFile(`${API}/api/srt`, 'subtitles.srt', 'text/plain')}
                  style={{ flex: 1 }}
                >
                  DL_SRT
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
