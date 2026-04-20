import React from 'react'

export default function Upgrade() {
  return (
    <div className="upgrade-page">
      <div className="card">
        <h1>Upgrade to Pro</h1>
        <p>Unlock premium features and higher limits.</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">₹0<span>/mo</span></div>
            <ul>
              <li>60+ Neural Voices</li>
              <li>Standard TTS</li>
              <li>10 Generations/day</li>
            </ul>
            <button disabled>Current Plan</button>
          </div>
          <div className="pricing-card featured">
            <h3>Pro</h3>
            <div className="price">₹999<span>/mo</span></div>
            <ul>
              <li>Unlimited Generations</li>
              <li>Unlimited Voice Cloning</li>
              <li>Priority Processing</li>
              <li>API Access</li>
            </ul>
            <button className="primary-btn">Upgrade Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
