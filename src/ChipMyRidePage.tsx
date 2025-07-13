import './index.css';

export default function ChipMyRidePage() {
  return (
    <div className="min-h-screen bg-black text-white bg-cover bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/leiterbahn-bg-cleaned.png')" }}>
      <div className="w-full max-w-screen-xl mx-auto pt-0">
        <div className="w-full max-w-screen-xl overflow-hidden rounded-2xl">
          <img
            src="/chipmyride-banner.png"
            alt="Chip My Ride Banner"
            className="h-64 w-full object-contain rounded-4xl"
          />
        </div>

        {/* Slogan unter dem Logo */}
        <div className="text-center mt-4">
          <p className="text-8xl font-bold text-cyan-600">Verpass deinem Auto mehr Charakter.</p>
        </div>

        {/* Preis-Kacheln */}
        <div className="flex flex-col items-center mt-12 px-4">
          <h2 className="text-8xl font-bold mb-4 text-orange-500">Tuning Preise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
            {["Stage 1","Stage 2","Stage 3","Eco Tuning","Pops & Bangs","Vmax Aufhebung / Drehzahlbegrenzer","DPF / AGR / OPF Abschaltung","Getriebeoptimierung","VCDS Kodierung"].map((name, index) => {
              const prices = ["550 €","750 €","950 €","450 €","450 €","150 €","350 €","350 €","50 €"];
              const centerIndex = 8;
              return (
              <div
                key={index}
                className={`flex flex-col items-center text-center bg-cyan-600 text-white rounded-2xl p-4 hover:bg-cyan-500 transition duration-300 $1`}
              >
                  <span className="font-bold text-xl mb-2">{name}</span>
                <span className="text-lg font-bold mb-2">{prices[index]}</span>
                  <a
                    href="#"
                    className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
                  >
                    Infos
                  </a>
                </div>
              );
            })}
          </div>

          <a
            href="/kontakt"
            className="mt-8 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
          >
            Termin sichern
          </a>
        </div>

        <h2 className="text-8xl font-bold mt-16 mb-4 text-center text-orange-500">Tuning Pakete</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
          {["Power Paket","Stage 1+","Eco Paket","Abschaltungspaket","VCDS Kombo"].map((name, index) => {
            const prices = ["900 €","750 €","750 €","850 €","100 €"];
            const centerIndex = 4;
            return (
              <div
                key={index}
                className={`flex items-center justify-between bg-cyan-600 text-white rounded-2xl p-4 hover:bg-cyan-500 transition duration-300 ${index === centerIndex ? 'md:col-span-2 justify-center' : ''}`}
              >
                <span className="font-bold text-left w-1/3">{name}</span>
                <span className="text-center w-1/3 font-bold">{prices[index]}</span>
                <a
                  href="#"
                  className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
                >
                  Infos
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="/kontakt"
            className="mt-8 inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
          >
            Termin sichern
          </a>

          <h2 className="text-8xl font-bold mt-16 mb-8 text-center text-orange-500">Tuning Konfigurator & Verfügbarkeit</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="bg-cyan-600 text-white rounded-2xl p-6 w-full md:w-96 hover:bg-cyan-500 transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Chip My Ride Fahrzeugliste</h3>
                <p className="text-sm mb-4">Fahrzeugabgleich bei unserem Partner Alientech.<br/>Hier kannst du prüfen, ob dein Auto bei uns optimiert werden kann.</p>
              </div>
              <a
                href="https://www.alientech-tools.com/vehicles/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-center"
              >
                Fahrzeugliste öffnen
              </a>
            </div>

            <div className="bg-cyan-600 text-white rounded-2xl p-6 w-full md:w-96 hover:bg-cyan-500 transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Übersicht über das Potenzial deines Autos</h3>
                <p className="text-sm mb-4">File-Abgleich durch unseren Partner Tuningfiles Germany.</p>
              </div>
              <a
                href="https://tuningfiles-germany.de/#tuningkonfigurator"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-center"
              >
                Konfigurator öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
