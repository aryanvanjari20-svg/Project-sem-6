import React, { useState, useEffect } from 'react'

export default function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [recognition, setRecognition] = useState(null)

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const rec = new SpeechRecognition()
      rec.continuous = true
      rec.interimResults = true
      rec.lang = 'en-US'

      rec.onresult = (event) => {
        let currentTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript
        }
        setTranscript(currentTranscript)
      }

      rec.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        setIsRecording(false)
      }

      rec.onend = () => {
        setIsRecording(false)
      }

      setRecognition(rec)
    }
  }, [])

  const toggleRecording = () => {
    if (isRecording) {
      recognition.stop()
    } else {
      setTranscript('')
      recognition.start()
      setIsRecording(true)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript)
    alert('Transcript copied to clipboard!')
  }

  if (!recognition && recognition !== null) {
    return (
      <div className="stt-page">
        <div className="card">
          <h1>Speech to Text</h1>
          <div className="alert alert-error">
            Your browser does not support Speech Recognition. Please use Chrome or Edge.
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="stt-page">
      <div className="card">
        <h1>Speech to Text</h1>
        <p>Convert your voice into text in real-time.</p>

        <div className="stt-container">
          <div className={`record-btn-container ${isRecording ? 'active' : ''}`}>
            <button 
              className={`record-btn ${isRecording ? 'recording' : ''}`} 
              onClick={toggleRecording}
            >
              {isRecording ? '⏹' : '🎤'}
            </button>
            <div className="pulse-ring"></div>
          </div>
          
          <div className="status-text">
            {isRecording ? 'Listening...' : 'Click the microphone to start'}
          </div>

          <div className="transcript-box">
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Your transcript will appear here..."
              readOnly={isRecording}
            />
            {transcript && (
              <div className="transcript-actions">
                <button className="btn btn-secondary btn-sm" onClick={copyToClipboard}>
                  📋 Copy
                </button>
                <button className="btn btn-secondary btn-sm" onClick={() => setTranscript('')}>
                  🗑️ Clear
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
