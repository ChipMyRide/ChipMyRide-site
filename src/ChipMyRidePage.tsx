import './index.css';

export default function ChipMyRidePage() {
  return (
    <div className="min-h-screen bg-black text-white bg-cover bg-fixed" style={{ backgroundImage: "url('/leiterbahn-bg-cleaned.png')" }}>
      <div className="w-full max-w-screen-xl mx-auto py-8">
        <img
          src="/chipmyride-banner.png"
          alt="Chip My Ride Logo"
          className="h-32 mx-auto rounded-2xl"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mt-8 mb-4">Tuning Preise</h2>
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

          <h2 className="text-xl font-bold mt-8 mb-4">Tuning Pakete</h2>
          <ul className="space-y-2">
            <li><strong>Power Paket</strong> – Stage 1 + Pops & Bangs + Begrenzer – 900 €</li>
            <li><strong>Stage 1+</strong> – Stage 1 + Getriebeoptimierung – 750 €</li>
            <li><strong>Eco Paket</strong> – Eco Tuning + AGR Abschaltung – 750 €</li>
            <li><strong>Abschaltungspaket</strong> – 3 Abschaltungen – 850 €</li>
            <li><strong>VCDS Codierung</strong> – 2 Codierungen – 50 €</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
