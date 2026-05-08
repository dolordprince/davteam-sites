'use client'
import { useState } from 'react'

export default function Home() {
  const [brief, setBrief] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')

  const generate = async () => {
    if (!brief.trim()) return
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief })
      })
      const data = await res.json()
      if (data.error) setError(data.error)
      else setResult(data)
    } catch (e) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '2rem'
    }}>
      <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
        DavTeam AI
      </h1>
      <p style={{fontSize: '1.2rem', color: '#888', marginBottom: '2rem', textAlign: 'center'}}>
        Generate full-stack websites from a single prompt
      </p>
      <div style={{
        background: '#111',
        border: '1px solid #333',
        borderRadius: '12px',
        padding: '2rem',
        width: '100%',
        maxWidth: '600px'
      }}>
        <textarea
          value={brief}
          onChange={e => setBrief(e.target.value)}
          placeholder="Describe your website... e.g. A landing page for a restaurant called DavKitchen"
          style={{
            width: '100%',
            height: '120px',
            background: '#1a1a1a',
            border: '1px solid #444',
            borderRadius: '8px',
            color: 'white',
            padding: '1rem',
            fontSize: '1rem',
            resize: 'none',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        <button
          onClick={generate}
          disabled={loading || !brief.trim()}
          style={{
            marginTop: '1rem',
            width: '100%',
            padding: '1rem',
            background: loading ? '#444' : '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}>
          {loading ? 'Generating your website...' : 'Generate My Website →'}
        </button>

        {error && (
          <p style={{marginTop: '1rem', color: '#ef4444', textAlign: 'center'}}>{error}</p>
        )}

        {result && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            background: '#1a1a1a',
            borderRadius: '8px',
            border: '1px solid #6366f1'
          }}>
            <p style={{color: '#6366f1', fontWeight: 'bold', fontSize: '1.2rem'}}>
              ✅ Website Generated Successfully
            </p>
            <p style={{color: '#ccc', marginTop: '0.5rem'}}>
              {result.spec?.project_name || result.project_name || 'Your project'}
            </p>
            {result.frontend && (
              <p style={{color: '#888', marginTop: '0.5rem', fontSize: '0.9rem'}}>
                Frontend, backend and deployment configs generated.
              </p>
            )}
            <div style={{marginTop: '1rem', padding: '1rem', background: '#0a0a0a', borderRadius: '6px'}}>
              <p style={{color: '#4ade80', fontSize: '0.9rem', wordBreak: 'break-all'}}>
                🚀 Your site is being deployed...
              </p>
              <p style={{color: '#555', fontSize: '0.8rem', marginTop: '0.5rem'}}>
                Brief: {result.brief || brief}
              </p>
            </div>
          </div>
        )}
      </div>
      <p style={{marginTop: '2rem', color: '#555', fontSize: '0.9rem'}}>
        Powered by DavTeam AI — Built by David Prince
      </p>
    </main>
  )
}
