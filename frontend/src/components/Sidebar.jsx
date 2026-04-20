import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { icon: '⊞', label: 'Home',           path: '/home' },
  { icon: '🎙️', label: 'Text to Speech', path: '/text-to-speech' },
  { icon: '🎤', label: 'Voice Cloning',  path: '/voice-clone' },
  { icon: '🔊', label: 'Sound Effects',  path: '/sound-effects' },
  { icon: '🖼️', label: 'Image & Video',  path: '/image-video' },
  { icon: '🔀', label: 'Flows',          path: '/flows' },
  { icon: '🎵', label: 'Music',          path: '/music' },
  { icon: '📝', label: 'Speech to Text', path: '/speech-to-text' },
]

const PINNED = [
  { icon: '🎙️', label: 'Text to Speech', path: '/text-to-speech' },
  { icon: '🎤', label: 'Voice Cloning',  path: '/voice-clone' },
]

export default function Sidebar({ theme, onThemeToggle }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLight = theme === 'light'

  const go = (path) => { if (path !== '#') navigate(path) }

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">🎧</div>
        <span className="sidebar-brand-name">SoundStudio</span>
      </div>

      {/* Main Nav */}
      {NAV_ITEMS.map(({ icon, label, path }) => (
        <button
          key={label}
          className={`sidebar-link${pathname === path ? ' active' : ''}`}
          onClick={() => go(path)}
        >
          <span className="icon">{icon}</span>
          {label}
        </button>
      ))}

      <div className="sidebar-spacer" />

      <div className="sidebar-section-label">Pinned</div>
      {PINNED.map(({ icon, label, path }) => (
        <button
          key={label}
          className={`sidebar-link${pathname === path ? ' active' : ''}`}
          onClick={() => go(path)}
        >
          <span className="icon">{icon}</span>
          {label}
        </button>
      ))}

      {/* Bottom */}
      <div className="sidebar-bottom">
        <div className="divider" style={{ marginBottom: 8 }} />

        {/* Theme Toggle */}
        <button
          id="btn-theme-toggle"
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label="Toggle light/dark theme"
        >
          <span>{isLight ? '☀️' : '🌙'}</span>
          <span style={{ flex: 1 }}>{isLight ? 'Light' : 'Dark'} Mode</span>
          <div className={`theme-toggle-track${isLight ? ' on' : ''}`}>
            <div className="theme-toggle-thumb" />
          </div>
        </button>

        <button className="sidebar-link" onClick={() => go('/developers')}>
          <span className="icon">👨‍💻</span>Developers
        </button>
        <button className="sidebar-link" onClick={() => go('/upgrade')}>
          <span className="icon">⬆️</span>Upgrade
        </button>
      </div>
    </aside>
  )
}

