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
              { name: "Vmax Aufhebung / Drehzahlbegrenzer", price: "150 €" },
              { name: "DPF / AGR / OPF Abschaltung", price: "350 €" },
              { name: "Getriebeoptimierung", price: "350 €" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-cyan-900 text-white rounded-xl p-4 hover:bg-cyan-800 transition duration-300"
              >
                <span className="font-bold text-left w-1/3 text-orange-400">{item.name}</span>
                <span className="text-center w-1/3 font-bold text-orange-400">{item.price}</span>
                <a
                  href={`/${item.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`}
                  className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-sm text-center"
                >
                  Infos
                </a>
              </div>
            ))}
            {/* VCDS Codierung zentriert */}
            <div className="flex items-center justify-between bg-cyan-900 text-white rounded-xl p-4 hover:bg-cyan-800 transition duration-300 md:col-span-2 md:mx-auto max-w-md">
              <span className="font-bold text-left w-1/3 text-orange-400">VCDS Codierung</span>
              <span className="text-center w-1/3 font-bold text-orange-400">50 €</span>
              <a
                href="/vcdscodierung"
                className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-sm text-center"
              >
                Infos
              </a>
            </div>
          </div>
          <a
            href="/kontakt"
            className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl"
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
                <span className="font-bold text-left w-1/3 text-orange-400">{item.name}</span>
                <span className="text-center w-1/3 font-bold text-orange-400">{item.price}</span>
                <a
                  href={`/${item.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`}
                  className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-sm text-center"
                >
                  Infos
                </a>
              </div>
            ))}
          </div>
          <a
            href="/kontakt"
            className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl"
          >
            Termin sichern
          </a>
        </div>
      </div>
    </div>
  );
}

// Platzhalterseiten für Tuning-Details
export function Stage1() {
  return <div className="text-white p-8">Stage 1 Optimierung – Details folgen…</div>;
}
export function Stage2() {
  return <div className="text-white p-8">Stage 2 Optimierung – Details folgen…</div>;
}
export function Stage3() {
  return <div className="text-white p-8">Stage 3 Optimierung – Details folgen…</div>;
}
export function Ecotuning() {
  return <div className="text-white p-8">Eco Tuning – Details folgen…</div>;
}
export function PopsBangs() {
  return <div className="text-white p-8">Pops & Bangs – Details folgen…</div>;
}
export function Vmaxaufhebung() {
  return <div className="text-white p-8">Vmax Aufhebung – Details folgen…</div>;
}
export function DpfAgroopfabschaltung() {
  return <div className="text-white p-8">DPF / AGR / OPF Abschaltung – Details folgen…</div>;
}
export function Getriebeoptimierung() {
  return <div className="text-white p-8">Getriebeoptimierung – Details folgen…</div>;
}
export function Vcdscodierung() {
  return <div className="text-white p-8">VCDS Codierung – Details folgen…</div>;
}
export function Powerpaket() {
  return <div className="text-white p-8">Power Paket – Details folgen…</div>;
}
export function Stage1plus() {
  return <div className="text-white p-8">Stage 1+ – Details folgen…</div>;
}
export function Ecopaket() {
  return <div className="text-white p-8">Eco Paket – Details folgen…</div>;
}
export function Abschaltungspaket() {
  return <div className="text-white p-8">Abschaltungspaket – Details folgen…</div>;
}
