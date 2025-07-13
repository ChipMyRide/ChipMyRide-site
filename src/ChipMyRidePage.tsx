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

        {/* Preis-Kacheln */}
        <div className="flex flex-col gap-6 items-center mt-12 px-4">
          <h2 className="text-2xl font-bold mb-2">Tuning Preise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
            {[
              { name: "Stage 1", price: "550 €" },
              { name: "Stage 2", price: "750 €" },
              { name: "Stage 3", price: "950 €" },
              { name: "Eco Tuning", price: "450 €" },
              { name: "Pops & Bangs", price: "450 €" },
              { name: "Vmax Aufhebung", price: "350 €" },
              { name: "DPF / AGR / OPF Abschaltung", price: "350 €" },
              { name: "Getriebeoptimierung", price: "350 €" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white text-black rounded-xl p-4 hover:bg-gray-100 transition duration-300"
              >
                <span className="font-semibold text-left w-1/3">{item.name}</span>
                <span className="text-center w-1/3">{item.price}</span>
                <a
                  href="/kontakt"
                  className="text-right w-1/3 text-sm text-orange-400 hover:text-orange-500 font-semibold"
                >
                  Termin sichern
                </a>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-2">Tuning Pakete</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
            {[
              { name: "Power Paket", price: "900 €" },
              { name: "Stage 1+", price: "750 €" },
              { name: "Eco Paket", price: "750 €" },
              { name: "Abschaltungspaket", price: "850 €" },
              { name: "VCDS Codierung", price: "50 €" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-black/60 rounded-xl p-4 hover:bg-black/80 transition duration-300"
              >
                <span className="font-semibold text-left w-1/3">{item.name}</span>
                <span className="text-center w-1/3">{item.price}</span>
                <a
                  href="/kontakt"
                  className="text-right w-1/3 text-sm text-orange-400 hover:text-orange-500 font-semibold"
                >
                  Termin sichern
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
