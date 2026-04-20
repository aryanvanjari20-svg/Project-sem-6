import React from 'react'

export default function Developers() {
  return (
    <div className="developers-page">
      <div className="card">
        <h1>Developers</h1>
        <p>Meet the team behind SoundStudio.</p>
        <div className="team-grid">
          <div className="team-member">
            <div className="avatar">👨‍💻</div>
            <h3>Aryan</h3>
            <p>Lead Developer</p>
          </div>
          {/* Add more members if needed */}
        </div>
      </div>
    </div>
  )
}
