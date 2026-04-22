import React from 'react'

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

export default function Upgrade() {
  return (
    <div className="upgrade-page">
      <div className="mesh-bg">
        <div className="mesh-1"></div>
        <div className="mesh-2"></div>
      </div>

      <div className="topbar">
        <span className="topbar-label">System / Subscription</span>
        <div className="topbar-actions">
          <div className="badge badge-orange">PLAN: FREE_TIER</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 80, marginTop: 40 }}>
        <h1 style={{ 
          fontFamily: 'Outfit', 
          fontSize: 'clamp(40px, 8vw, 64px)', 
          letterSpacing: '-2px',
          fontWeight: 800,
          marginBottom: 16
        }}>
          Upgrade System Capacity
        </h1>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: 18,
          maxWidth: 600,
          margin: '0 auto'
        }}>
          Select a protocol to increase your operational limits and unlock advanced neural processing.
        </p>
      </div>

      <div className="pricing-grid-modern">
        {/* Baseline Plan */}
        <div className="pricing-card-modern glass-card">
          <div>
            <h3 style={{ 
              fontFamily: 'Outfit', 
              textTransform: 'uppercase', 
              fontSize: 12, 
              color: 'var(--text-muted)',
              letterSpacing: 1.5,
              fontWeight: 700
            }}>
              Baseline Protocol
            </h3>
            <div className="price-display" style={{ marginTop: 12 }}>
              <span className="price-currency">₹</span>
              <span className="price-amount">0</span>
              <span className="price-period">/mo</span>
            </div>
          </div>
          
          <div className="divider" style={{ opacity: 0.1 }}></div>

          <ul className="feature-list">
            {[
              '60+ Neural Voices', 
              'Standard Synthesis Speed', 
              '10 Operations / Day',
              'Community Support'
            ].map(f => (
              <li key={f} className="feature-item">
                <div className="check"><CheckIcon /></div>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button className="btn btn-secondary btn-modern btn-full" disabled style={{ marginTop: 'auto', opacity: 0.5 }}>
            Active Protocol
          </button>
        </div>

        {/* Professional Plan */}
        <div className="pricing-card-modern featured glass-card">
          <div style={{ 
            position: 'absolute', 
            top: 20, 
            right: 20, 
            background: 'var(--accent)', 
            color: 'black', 
            padding: '4px 12px', 
            borderRadius: 99,
            fontSize: 11, 
            fontWeight: 800, 
            fontFamily: 'Outfit' 
          }}>
            RECOMMENDED
          </div>
          
          <div>
            <h3 style={{ 
              fontFamily: 'Outfit', 
              textTransform: 'uppercase', 
              fontSize: 12, 
              color: 'var(--accent)',
              letterSpacing: 1.5,
              fontWeight: 700
            }}>
              Professional Tier
            </h3>
            <div className="price-display" style={{ marginTop: 12 }}>
              <span className="price-currency">₹</span>
              <span className="price-amount">999</span>
              <span className="price-period">/mo</span>
            </div>
          </div>

          <div className="divider" style={{ opacity: 0.1, background: 'var(--accent)' }}></div>

          <ul className="feature-list">
            {[
              'Unlimited Synthesis', 
              'Unlimited Voice Cloning', 
              'Priority Buffer Access', 
              'API Access (v1 Stable)',
              '24/7 Priority Support',
              'Advanced Voice Controls'
            ].map(f => (
              <li key={f} className="feature-item" style={{ color: 'var(--text-primary)' }}>
                <div className="check"><CheckIcon /></div>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button className="btn btn-primary btn-modern btn-full" style={{ marginTop: 'auto', boxShadow: '0 10px 30px var(--accent-dim)' }}>
            Initiate Upgrade
          </button>
        </div>
      </div>

      <div style={{ marginTop: 64, textAlign: 'center', opacity: 0.5, fontSize: 12 }}>
        <p>Secure transactions powered by Neural Pay. Cancel anytime.</p>
      </div>
    </div>
  )
}
