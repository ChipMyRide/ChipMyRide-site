import './index.css';

export default function Stage1InfoPage() {
  return (
    <div className="min-h-screen bg-black text-white bg-cover bg-fixed p-8" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/leiterbahn-bg-cleaned.png')" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-orange-500 mb-4 text-center">Stage 1</h1>

        {/* Icon Platzhalter */}
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-cyan-600 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">Icon</span>
          </div>
        </div>

        {/* Bild Platzhalter */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img src="/stage1-placeholder.jpg" alt="Stage 1 Beispielbild" className="w-full object-cover h-64" />
        </div>

        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Das Stage 1 Tuning ist die erste Leistungsstufe zur Optimierung deines Fahrzeugs. Es konzentriert sich auf die elektronische Anpassung der Motorsoftware, ohne mechanische Änderungen.
          </p>
          <p>
            Ziel ist eine bessere Leistungsentfaltung, mehr Drehmoment und ein direkteres Ansprechverhalten – und das bei vollem Erhalt der Alltagstauglichkeit und Herstellertoleranzen.
          </p>
          <p>
            Voraussetzungen sind ein serienmäßiger Motorzustand und eine nachvollziehbare Wartungshistorie. Du erhältst eine maßgeschneiderte Anpassung für dein Fahrzeug – individuell abgestimmt und rückspielbar auf Serienzustand.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="/kontakt"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-xl"
          >
            Tuning sichern
          </a>
        </div>
      </div>
    </div>
  );
}
