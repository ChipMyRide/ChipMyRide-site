import './index.css';

export default function ChipMyRidePage() {
  return (
    <div className="min-h-screen bg-black text-white bg-cover bg-fixed" style={{ backgroundImage: "url('/leiterbahn-bg-cleaned.png')" }}>
      <div className="w-full max-w-screen-xl mx-auto pt-0">
        <div className="flex justify-center mt-0 pt-2">
          <img
            src="/chipmyride-banner.png"
            alt="Chip My Ride Banner"
            className="h-64 rounded-2xl object-contain"
          />
        </div>

        {/* Preisboxen */}
        <div className="flex flex-col gap-8 items-center mt-12 px-4">
          {/* Tuning Preise */}
          <div className="w-full max-w-5xl bg-black/60 rounded-xl p-6 hover:bg-black/80 transition duration-300">
            <h2 className="text-2xl font-bold mb-4">Tuning Preise</h2>
            <ul className="space-y-2">
              <li><strong>Stage 1</strong> – 550 €</li>
              <li><strong>Stage 2</strong> – 750 €</li>
              <li><strong>Stage 3</strong> – 950 €</li>
              <li><strong>Eco Tuning</strong> – 450 €</li>
              <li><strong>Pops & Bangs</strong> – 450 €</li>
              <li><strong>Vmax Aufhebung</strong> – 350 €</li>
              <li><strong>DPF / AGR / OPF Abschaltung</strong> – je 350 €</li>
              <li><strong>Getriebeoptimierung</strong> – 350 €</li>
            </ul>
          </div>

          {/* Tuning Pakete */}
          <div className="w-full max-w-5xl bg-black/60 rounded-xl p-6 hover:bg-black/80 transition duration-300">
            <h2 className="text-2xl font-bold mb-4">Tuning Pakete</h2>
            <ul className="space-y-2">
              <li><strong>Power Paket</strong> – Stage 1 + Pops & Bangs + Begrenzer – 900 €</li>
              <li><strong>Stage 1+</strong> – Stage 1 + Getriebeoptimierung – 750 €</li>
              <li><strong>Eco Paket</strong> – Eco Tuning + AGR Abschaltung – 750 €</li>
              <li><strong>Abschaltungspaket</strong> – 3 Abschaltungen – 850 €</li>
              <li><strong>VCDS Codierung</strong> – 2 Codierungen – 50 €</li>
            </ul>

            <div className="mt-6 text-right">
              <a
                href="/kontakt"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
              >
                Termin sichern
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
