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
          <figure className="arch-illustration" aria-label="Ilustracion del tiburon ballena">
            <svg viewBox="0 0 260 140" role="img" aria-hidden="true">
              {/* Cuerpo del tiburón ballena */}
              <ellipse cx="130" cy="70" rx="80" ry="40" fill="#00695c" stroke="#004d40" strokeWidth="2"/>
              {/* Aleta dorsal */}
              <polygon points="130,30 140,10 150,30" fill="#004d40"/>
              {/* Aletas pectorales */}
              <polygon points="70,60 50,50 70,70" fill="#004d40"/>
              <polygon points="190,60 210,50 190,70" fill="#004d40"/>
              {/* Cola */}
              <polygon points="210,70 240,60 240,80" fill="#004d40"/>
              {/* Boca */}
              <path d="M 90 80 Q 130 100 170 80" fill="none" stroke="#004d40" strokeWidth="3"/>
              {/* Ojos */}
              <circle cx="110" cy="60" r="3" fill="#ffffff"/>
              <circle cx="150" cy="60" r="3" fill="#ffffff"/>
              {/* Puntos en el cuerpo */}
              <circle cx="100" cy="70" r="2" fill="#00838f"/>
              <circle cx="140" cy="75" r="2" fill="#00838f"/>
              <circle cx="160" cy="65" r="2" fill="#00838f"/>
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