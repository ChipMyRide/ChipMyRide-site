// CHIPMYRIDE – Offizielle Website (V1)
// Jetzt mit echten Inhalten: Logo, Preisliste, Kontaktformular und Leiterbahn-Background

import { useState } from "react";
import { motion } from "framer-motion";

export default function ChipMyRidePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white font-sans bg-[url('/leiterbahn-bg.jpg')] bg-cover bg-fixed">
      <section className="py-12 px-6 text-center">
        <img
          src="/logo.png"
          alt="Chip My Ride Logo"
          className="mx-auto mb-4 w-40"
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CHIP MY RIDE
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Individuelles Chiptuning. Keine Massenware. 100 % Leidenschaft.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4 grid gap-6">
        <h2 className="text-2xl font-semibold">Tuning Preise</h2>
        <ul className="space-y-2 text-left">
          <li><strong>Stage 1</strong> – 550 €</li>
          <li><strong>Stage 2</strong> – 750 €</li>
          <li><strong>Stage 3</strong> – 950 €</li>
          <li><strong>Eco Tuning</strong> – 450 €</li>
          <li><strong>Pops & Bangs</strong> – 450 €</li>
          <li><strong>Vmax Aufhebung</strong> – 350 €</li>
          <li><strong>DPF / AGR / OPF Abschaltung</strong> – je 350 €</li>
          <li><strong>Getriebeoptimierung</strong> – 350 €</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12">Tuning Pakete</h2>
        <ul className="space-y-2 text-left">
          <li><strong>Power Paket</strong> – Stage 1 + Pops & Bangs + Begrenzer – 900 €</li>
          <li><strong>Stage 1+</strong> – Stage 1 + Getriebeoptimierung – 750 €</li>
          <li><strong>Eco Paket</strong> – Eco Tuning + AGR Abschaltung – 750 €</li>
          <li><strong>Abschaltungspaket</strong> – 3 Abschaltungen – 850 €</li>
          <li><strong>VCDS Codierung</strong> – 2 Codierungen – 50 €</li>
        </ul>
      </section>

      <section className="bg-gray-900 py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Kontaktformular</h2>
        {!submitted ? (
          <form
            className="max-w-xl mx-auto grid gap-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Name" required />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" type="email" placeholder="E-Mail" required />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Marke" />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Modell" />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Baujahr" />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Motor" />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Leistung (PS)" />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Kraftstoff" />
            <input className="p-2 rounded bg-gray-800 border border-gray-600" placeholder="Erstzulassung" />
            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Anfrage senden
            </button>
          </form>
        ) : (
          <p className="text-green-400">Danke für deine Anfrage! Wir melden uns bald bei dir.</p>
        )}
      </section>
    </main>
  );
}
