import './index.css';

export default function ChipMyRidePage() {
  return (
    <div className="min-h-screen bg-black text-white bg-cover bg-fixed" style={{ backgroundImage: "url('/leiterbahn-bg-cleaned.png')" }}>
      <div className="w-full max-w-screen-xl mx-auto pt-0">
        <div className="w-full">
          <img
            src="/chipmyride-banner.png"
            alt="Chip My Ride Banner"
            className="h-64 w-full object-contain"
          />
        </div>

        {/* Slogan unter dem Logo */}
        <div className="text-center mt-4">
          <p className="text-8xl font-bold text-blue-300">Verpass deinem Auto mehr Charakter.</p>
        </div>

        {/* Preis-Kacheln */}
        <div className="flex flex-col items-center mt-12 px-4">
          <h2 className="text-4xl font-bold mb-4 text-orange-500">Tuning Preise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
            {[ 
              { name: "Stage 1", price: "550 €" },
              { name: "Stage 2", price: "750 €" },
              { name: "Stage 3", price: "950 €" },
              { name: "Eco Tuning", price: "450 €" },
              { name: "Pops & Bangs", price: "450 €" },
              { name: "Vmax Aufhebung / Drehzahlbegrenzer", price: "150 €" },
              { name: "DPF / AGR / OPF Abschaltung", price: "350 €" },
              { name: "Getriebeoptimierung", price: "350 €" },
              { name: "VCDS Codierung", price: "50 €" },
              { name: "3x VCDS Codierungen", price: "100 €" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-cyan-900 text-white rounded-xl p-4 hover:bg-cyan-800 transition duration-300"
              >
                <span className="font-bold text-left w-1/3">{item.name}</span>
                <span className="text-center w-1/3 font-bold">{item.price}</span>
                <a
                  href="#"
                  className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
                >
                  Infos
                </a>
              </div>
            ))}
          </div>

          <a
            href="/kontakt"
            className="mt-8 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
          >
            Termin sichern
          </a>
        </div>

        <h2 className="text-4xl font-bold mt-16 mb-4 text-center text-orange-500">Tuning Pakete</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
          {[ 
            { name: "Power Paket", price: "900 €" },
            { name: "Stage 1+", price: "750 €" },
            { name: "Eco Paket", price: "750 €" },
            { name: "Abschaltungspaket", price: "850 €" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-cyan-900 text-white rounded-xl p-4 hover:bg-cyan-800 transition duration-300"
            >
              <span className="font-bold text-left w-1/3">{item.name}</span>
              <span className="text-center w-1/3 font-bold">{item.price}</span>
              <a
                href="#"
                className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
              >
                Infos
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/kontakt"
            className="mt-8 inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
          >
            Termin sichern
          </a>
        </div>
      </div>
    </div>
  );
}
