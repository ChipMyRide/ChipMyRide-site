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
          <p className="text-xl font-semibold text-white">Verpass deinem Auto mehr Charakter.</p>
        </div>

        {/* Preis-Kacheln */}
        <div className="flex flex-col gap-6 items-center mt-12 px-4">
          <h2 className="text-2xl font-bold mb-2">Tuning Preise</h2>

          {/* 3x VCDS Codierungen zentriert */}
          <div className="flex items-center justify-between bg-cyan-900 text-white rounded-xl p-4 hover:bg-cyan-800 transition duration-300 md:col-span-2 md:mx-auto max-w-md">
            <span className="font-bold text-left w-1/3">3x VCDS Codierungen</span>
            <span className="text-center w-1/3 font-bold">100 €</span>
            <a
              href="/3xvcdscodierungen"
              className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
            >
              Infos
            </a>
          </div>

          {[ 
            { name: "Stage 1", price: "550 €" },
            { name: "Stage 2", price: "750 €" },
            { name: "Stage 3", price: "950 €" },
            { name: "Eco Tuning", price: "450 €" },
            { name: "Pops & Bangs", price: "450 €" },
            { name: "Vmax Aufhebung / Drehzahlbegrenzer", price: "150 €" },
            { name: "DPF / AGR / OPF Abschaltung", price: "350 €" },
            { name: "Getriebeoptimierung", price: "350 €" },
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

          {/* VCDS Codierung zentriert */}
          <div className="flex items-center justify-between bg-cyan-900 text-white rounded-xl p-4 hover:bg-cyan-800 transition duration-300 md:col-span-2 md:mx-auto max-w-md">
            <span className="font-bold text-left w-1/3">VCDS Codierung</span>
            <span className="text-center w-1/3 font-bold">50 €</span>
            <a
              href="/vcdscodierung"
              className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
            >
              Infos
            </a>
          </div>
        </div>

        <a
          href="/kontakt"
          className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
        >
          Termin sichern
        </a>

        <h2 className="text-2xl font-bold mt-12 mb-2">Tuning Pakete</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
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

        <a
          href="/kontakt"
          className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
        >
          Termin sichern
        </a>
      </div>
    </div>
  );
}
