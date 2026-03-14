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
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <main className="page">
        <div className="frame">
          <div className="frame-edge left" aria-hidden="true">
            <svg viewBox="0 0 120 520" preserveAspectRatio="xMidYMid meet" role="img">
              <path d="M0 0 L120 0 L120 520 L0 520 Z" fill="rgba(255,255,255,0.85)" />
              <g className="frame-decor" opacity="0.95">
                <path d="M20 80 C 45 90 45 110 20 115 C -5 120 -5 100 20 80 Z" fill="#3b82f6" />
                <circle cx="35" cy="140" r="18" fill="#60a5fa" opacity="0.8" />
                <path d="M10 220 C 30 210 50 240 30 250 C 10 260 0 230 10 220 Z" fill="#0ea5e9" />
                <path d="M20 330 c10,-20 40,-20 50,0 c10,20 -20,40 -50,20" fill="#38bdf8" />
                <path d="M10 440 c20,-20 50,-20 65,0 c15,20 -15,40 -65,0" fill="#38bdf8" />
              </g>
            </svg>
          </div>

          <section className={`card intro ${isOpen ? 'unlocked' : ''}`} aria-live="polite">
            <p className="kicker">13 de marzo de 2026</p>
            <h1>Un detalle del mar</h1>
            <figure className="arch-illustration" aria-label="Ilustracion del mar">
              <svg viewBox="0 0 260 140" role="img" aria-hidden="true">
                <path className="wave-path" d="M0,70 Q65,20 130,70 T260,70 V140 H0 Z" fill="#00bcd4" opacity="0.3"/>
                <path className="wave-path" d="M0,80 Q65,30 130,80 T260,80 V140 H0 Z" fill="#4dd0e1" opacity="0.4"/>
                <path className="wave-path" d="M0,90 Q65,40 130,90 T260,90 V140 H0 Z" fill="#80deea" opacity="0.5"/>
                {/* Peces simples */}
                <circle className="fish" cx="50" cy="50" r="3" fill="#ffffff"/>
                <circle className="fish" cx="55" cy="50" r="2" fill="#ffffff"/>
                <circle className="fish" cx="150" cy="60" r="3" fill="#ffffff"/>
                <circle className="fish" cx="155" cy="60" r="2" fill="#ffffff"/>
              </svg>
              <figcaption>Para mi Princesa</figcaption>
            </figure>
            <p className="muted">Abre Esta carta Tengo algo que decirte...</p>
            <div className="letter-shell">
              <div className="actions">
                <button id="openLetterBtn" className="primary" type="button" aria-expanded={isOpen} aria-controls="letterContent" onClick={toggleLetter}>
                  {isOpen ? 'Carta abierta' : 'Abrir carta'}
                </button>
              </div>
              <div id="letterContent" className={`letter-content ${isOpen ? '' : 'hidden'}`} hidden={!isOpen}>
                <p>Hola mi amooor.</p>
                <p>Solo quiero decirte como me encantas, gracias por estos 5 meses a tu lado. Te volviste una parte esencial de mi vida. Amo pasar nuestros tiempos juntos, el tan solo ser el chicle del otro es muy increíble.</p>
                <p>Te hago esta carta para recordarte que me haces muy feliz.</p>
                <p className="love-shout">TE AMOOOOOO!! COMO TU AMAS EL MAR O COMO AMAS TU LOS TIBURONES BALLENA O COMO TU AMAS LA AVIACION O COMO YO AMO EL AUTOMOVILISMO O COMO YO AMO LOS MOTORES O COMO YO AMO LA MUSICA, QUE FUERTEEE!!!</p>
                <p>YA 5 MESES JUNTOS Y OBVIAMENTE VAMOS POR MÁS. Vamos por muchos años más.</p>
                <p>Quiero ser tu lugar seguro donde no paras de reír o tan solo relajarte después de un día de mierda, solo estando tú y yo.</p>
                <p>No me voy a cansar de decirte lo mucho que disfruto mis días a tu lado. No pienso un solo día sin ti.</p>
                <p>Te amo cariño.</p>
                <p className="signature">Con amor, Joss.</p>
              </div>
            </div>
          </section>

          <div className="frame-edge right" aria-hidden="true">
            <svg viewBox="0 0 120 520" preserveAspectRatio="xMidYMid meet" role="img">
              <path d="M0 0 L120 0 L120 520 L0 520 Z" fill="rgba(255,255,255,0.85)" />
              <g className="frame-decor" opacity="0.95">
                <path d="M100 80 C 75 90 75 110 100 115 C 125 120 125 100 100 80 Z" fill="#3b82f6" />
                <circle cx="85" cy="140" r="18" fill="#60a5fa" opacity="0.8" />
                <path d="M110 220 C 90 210 70 240 90 250 C 110 260 120 230 110 220 Z" fill="#0ea5e9" />
                <path d="M100 330 c-10,-20 -40,-20 -50,0 c-10,20 20,40 50,20" fill="#38bdf8" />
                <path d="M100 440 c-20,-20 -50,-20 -65,0 c-15,20 15,40 65,0" fill="#38bdf8" />
              </g>
            </svg>
          </div>
        </div>
      </main>
    </>
  )
}

export default App