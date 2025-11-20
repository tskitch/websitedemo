export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full space-y-16">

        {/* Title */}
        <section className="text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            Fast Lane Precision
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            High-precision CNC machining for aerospace, defense, and demanding industries.
          </p>
        </section>

        {/* Grid Sections */}
        <section className="grid md:grid-cols-3 gap-10">

          {/* Services */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3">Services</h2>
            <p className="text-gray-600">
              5-Axis Milling · 3-Axis Machining · Swiss Turning  
              Titanium · Stainless · Inconel · Aluminum  
              Prototype & Production
            </p>
          </div>

          {/* Quality */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3">Quality</h2>
            <p className="text-gray-600">
              AS9100-grade inspection · Keyence IM/XM/VL  
              Full traceability · Material certs · CMM reports
            </p>
          </div>

          {/* About */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3">About Us</h2>
            <p className="text-gray-600">
              Riverside, CA based machine shop delivering world-class precision components.
            </p>
          </div>

        </section>

        {/* Contact */}
        <section className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <h2 className="text-3xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-600 mb-6">
            Request quotes · NDA-safe project discussions · Lead times & capacity.
          </p>

          <a
            href="mailto:info@fastlaneprecision.com"
            className="inline-block px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Email Us
          </a>
        </section>

      </div>
    </main>
  );
}
