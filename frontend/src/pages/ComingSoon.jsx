import React from 'react'

export default function ComingSoon({ title }) {
  return (
    <div className="coming-soon">
      <div className="card">
        <h1>{title}</h1>
        <p>This feature is currently under development. Stay tuned!</p>
        <div className="animation-placeholder">
          <div className="pulse-circle"></div>
        </div>
      </div>
    </div>
  )
}
