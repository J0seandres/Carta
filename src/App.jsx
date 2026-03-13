import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleLetter = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="backdrop">
        <div className="shape shape-a"></div>
        <div className="shape shape-b"></div>
        <div className="shape shape-c"></div>
      </div>

      <main className="page">
        <section className={`card intro ${isOpen ? 'unlocked' : ''}`} aria-live="polite">
          <p className="kicker">13 de marzo de 2026</p>
          <h1>Un detalle del mar</h1>
          <figure className="arch-illustration" aria-label="Ilustracion del mar">
            <svg viewBox="0 0 260 140" role="img" aria-hidden="true">
              <path d="M0,70 Q65,20 130,70 T260,70 V140 H0 Z" fill="#0f172a" opacity="0.3"/>
              <path d="M0,80 Q65,30 130,80 T260,80 V140 H0 Z" fill="#1e3a8a" opacity="0.4"/>
              <path d="M0,90 Q65,40 130,90 T260,90 V140 H0 Z" fill="#1e40af" opacity="0.5"/>
              {/* Peces simples */}
              <circle cx="50" cy="50" r="3" fill="#ffffff"/>
              <circle cx="55" cy="50" r="2" fill="#ffffff"/>
              <circle cx="150" cy="60" r="3" fill="#ffffff"/>
              <circle cx="155" cy="60" r="2" fill="#ffffff"/>
            </svg>
            <figcaption>Para mi amor del océano.</figcaption>
          </figure>
          <p className="muted">Abre la carta del mar para leer el mensaje, mi amor.</p>
          <div className="letter-shell">
            <div className="actions">
              <button id="openLetterBtn" className="primary" type="button" aria-expanded={isOpen} aria-controls="letterContent" onClick={toggleLetter}>
                {isOpen ? 'Carta abierta' : 'Abrir carta'}
              </button>
            </div>
            <div id="letterContent" className={`letter-content ${isOpen ? '' : 'hidden'}`} hidden={!isOpen}>
              <p></p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App