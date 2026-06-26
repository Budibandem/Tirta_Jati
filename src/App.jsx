import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSchedule, setActiveSchedule] = useState('Weekdays');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll('.timbul-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // --- DATA PAKET ---
  const packages = [
  {
    id: 1,
    title: "Kelas Anak-Anak",
    sub: "(Kids Class)",
    desc: "Melatih keberanian di air, pernapasan, hingga bisa menguasai gaya dasar renang.",
    badge: "Terfavorit",
    target: "Usia 4 - 14 Tahun",
    features: ["Pendekatan Sabar & Ceria", "Belajar dari nol (takut air)", "Durasi latihan 60 Menit"],
    priceInfo: [
      { label: "Weekdays", days: "Senin, Rabu, atau Jumat" },
      { label: "Weekend", days: "Sabtu atau Minggu" }
    ]
  },
  {
    id: 2,
    title: "Kelas Dewasa",
    sub: "(Adult Class)",
    desc: "Cocok untuk pemula yang belum bisa renang sama sekali atau untuk terapi kesehatan.",
    target: "Usia 15 - 35+ Tahun",
    features: ["Bebas pilih gaya renang", "Pendekatan rileks anti-panik", "Durasi latihan 60 Menit"],
    priceInfo: [
      { label: "Weekdays", days: "Senin, Rabu, atau Jumat" },
      { label: "Weekend", days: "Sabtu atau Minggu" }
    ]
  },
  {
    id: 3,
    title: "Privat",
    sub: "(1-on-1 VIP)",
    desc: "Satu pelatih khusus untuk Anda. Progres jauh lebih cepat, intensif, dan personal.",
    badge: "Premium",
    target: "Semua Usia",
    features: ["Bebas pilih gaya renang", "Fokus koreksi teknik detail", "Waktu dan hari fleksibel"],
    isPrivate: true,
  }
];

  const faqs = [
    { q: "Apakah kalau belum bisa renang sama sekali bisa ikut?", a: "Tentu saja! Mayoritas murid kami mulai dari nol (takut air/tidak bisa mengapung). Pelatih kami dilatih dengan pendekatan sabar untuk membangun kepercayaan diri Anda di dalam air." },
    { q: "Di mana lokasi latihan renangnya?", a: "Kami menggunakan Kolam Renang Bukit Jati di Gianyar sebagai lokasi utama latihan kelompok. Namun, jika Anda mengambil kelas privat, lokasi kolam bisa lebih fleksibel sesuai kesepakatan." },
    { q: "Apakah ada kelas trial (uji coba) gratis?", a: "Ada! Kami menyediakan 1x sesi trial gratis untuk melihat kecocokan metode pelatih dengan murid sebelum Anda memutuskan bergabung." }
  ];

  return (
    <div className="font-sans bg-[#f8fafc] text-slate-800 min-h-screen scroll-smooth overflow-x-hidden selection:bg-[#7cb5c8]/30 selection:text-slate-900 pt-20">
      
      {/* =========================================
          HEADER WRAPPER
      ========================================= */}
      <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className={`bg-gradient-to-r from-[#7cb5c8] to-[#d63384] text-white text-center px-4 font-medium tracking-wide origin-top transition-all duration-500 overflow-hidden flex items-center justify-center ${isScrolled ? 'h-0 opacity-0' : 'h-10 text-xs opacity-100'}`}>
          Khusus Pemula: Dapatkan 1x Sesi FREE TRIAL untuk Kelas Pertama! 
          <a href="https://wa.me/6281238096091" className="underline text-white/90 hover:text-white ml-2 transition-colors font-semibold">
            Ambil Slot &rarr;
          </a>
        </div>

        <div className={`relative flex justify-center transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}>
          <nav className={`relative w-full flex justify-between items-center transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-4xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full py-2 px-6' : 'max-w-6xl bg-white/95 backdrop-blur-md border-b border-slate-200/50 py-3 px-6 mx-auto'}`}>
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Logo" className={`w-auto object-contain object-center transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10 md:h-12'}`} />
              <div className="leading-none flex flex-col justify-center">
                <span className={`font-bold tracking-tight text-[#7cb5c8] transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg'}`}>TIRTA JATI SC</span>
                {!isScrolled && <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#d63384] mt-0.5 opacity-100 transition-opacity duration-300">Di air kita jaya</span>}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-slate-600">
              <a href="#home" className="hover:text-[#d63384] transition-colors">Beranda</a>
              <a href="#paket" className="hover:text-[#d63384] transition-colors">Program</a>
              <a href="#lokasi" className="hover:text-[#d63384] transition-colors">Lokasi</a>
              <a href="#faq" className="hover:text-[#d63384] transition-colors">FAQ</a>
              <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className={`text-white px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 ${isScrolled ? 'bg-[#d63384] hover:bg-[#b02a6c]' : 'bg-slate-900 hover:bg-slate-800'}`}>
                Hubungi Coach
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none p-2 text-slate-500 hover:text-[#d63384] transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" /> : <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />}
              </svg>
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-[calc(100%+10px)] left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl p-4 rounded-3xl border border-slate-100 flex flex-col font-medium shadow-2xl origin-top transition-all">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="py-3 px-4 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-2xl transition-colors">Beranda</a>
                <a href="#paket" onClick={() => setIsMenuOpen(false)} className="py-3 px-4 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-2xl transition-colors">Program</a>
                <a href="#lokasi" onClick={() => setIsMenuOpen(false)} className="py-3 px-4 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-2xl transition-colors">Lokasi</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="py-3 px-4 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-2xl transition-colors mb-4">FAQ</a>
                <a href="https://wa.me/6281238096091" onClick={() => setIsMenuOpen(false)} className="bg-slate-900 text-white text-center py-4 rounded-2xl font-bold shadow-md">Hubungi Coach &rarr;</a>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* =========================================
          HERO SECTION
      ========================================= */}
      <header id="home" className="relative py-24 md:py-32 px-4 overflow-hidden -mt-20" style={{ backgroundColor: '#7cb5c8', backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(124, 181, 200, 1) 0%, rgba(74, 140, 161, 1) 90%)' }}>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto z-10 bg-white/10 backdrop-blur-md p-8 md:p-14 rounded-[3rem] border border-white/20 shadow-2xl mt-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-sm">
              Belajar Renang Jadi Mudah, <br/>
              <span className="text-[#d63384] bg-white/95 px-5 py-2 rounded-full border border-pink-100 inline-block mt-3 shadow-xl">Aman & Menyenangkan!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
              Metode kepelatihan terstruktur untuk segala usia. Dipandu langsung oleh pelatih profesional berlisensi untuk membantu Anda menguasai teknik renang dengan cepat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#paket" className="w-full sm:w-auto bg-[#d63384] text-white font-black px-8 py-4 rounded-full shadow-xl hover:bg-[#b02a6c] hover:scale-105 transition duration-300 uppercase tracking-wider text-sm">Lihat Pilihan Kelas</a>
              <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full shadow-lg transition duration-300 border border-white/30 backdrop-blur-sm flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                <span>💬 Hubungi Coach</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          KEUNGGULAN SECTION
      ========================================= */}
      <section id="keunggulan" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="text-[#d63384] font-semibold uppercase tracking-wider text-sm">Mengapa Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Keunggulan Tirta Jati SC</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Pelatih Berlisensi", desc: "Dipandu oleh tim pelatih berpengalaman, menguasai teknik kepelatihan dengan pendekatan aman dan profesional.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
            { title: "Kurikulum Terstruktur", desc: "Materi belajar disesuaikan dengan kemampuan murid, mulai dari tahap adaptasi air hingga koreksi gaya lanjutan.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
            { title: "Prioritas Keamanan", desc: "Fokus utama kami adalah keselamatan murid selama berada di kolam dengan rasio pengawasan pelatih yang ideal.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
            { title: "Semua Tingkatan", desc: "Menerima murid dari berbagai level; mulai dari pemula hingga program intensif perbaikan teknik.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#7cb5c8]/30 transition-all duration-300 flex flex-col group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7cb5c8]/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div> 
          ))}
        </div>
      </section>

      {/* =========================================
          PAKET HARGA (UI 2026 - BENTO STYLE)
      ========================================= */}
      <section id="paket" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out bg-slate-50/50 py-24 px-4 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-[#d63384]/10 text-[#d63384] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs">Pilih Kelasmu</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 tracking-tight">Program Latihan Renang</h2>
            <p className="text-slate-500 mt-4 text-base max-w-lg mx-auto">Silakan pilih jadwal yang sesuai dengan kesibukan Anda di bawah ini.</p>
          </div>

          {/* TOGGLE JADWAL */}
          <div className="flex justify-center mb-16">
            <div className="bg-white p-1.5 rounded-full inline-flex relative shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100">
              <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#7cb5c8] shadow-md rounded-full transition-transform duration-500 ease-out ${activeSchedule === 'Weekend' ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}`}></div>
              <button onClick={() => setActiveSchedule('Weekdays')} className={`relative z-10 w-32 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${activeSchedule === 'Weekdays' ? 'text-white' : 'text-slate-500 hover:text-slate-700'}`}>Weekdays</button>
              <button onClick={() => setActiveSchedule('Weekend')} className={`relative z-10 w-32 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${activeSchedule === 'Weekend' ? 'text-white' : 'text-slate-500 hover:text-slate-700'}`}>Weekend</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`group relative bg-white rounded-[2.5rem] p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${pkg.badge ? 'border-2 border-[#d63384]/20 shadow-[0_20px_40px_-15px_rgba(214,51,132,0.15)] md:-translate-y-4' : 'border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]'}`}>
                
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d63384] to-[#f472b6] text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}
                
                <div className="text-center mb-6 mt-4">
                  <h3 className="font-extrabold text-2xl text-slate-900">{pkg.title}</h3>
                  <span className="text-[#7cb5c8] font-bold text-sm block mt-1">{pkg.sub}</span>
                </div>

                <p className="text-slate-500 text-sm text-center leading-relaxed mb-6 h-16">{pkg.desc}</p>
                
                {/* INFO BOX BENTO */}
                <div className="bg-slate-50 rounded-3xl p-5 mb-8 space-y-3 border border-slate-100">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200/60">
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider font-bold flex items-center gap-2"><svg className="w-4 h-4 text-[#d63384]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> Untuk Siapa?</span>
                    <span className="text-slate-800 text-xs font-extrabold text-right">{pkg.target}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200/60">
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider font-bold flex items-center gap-2"><svg className="w-4 h-4 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> Hari Latihan</span>
                    <span className="text-slate-800 text-xs font-bold text-right bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                      {pkg.isPrivate ? "Pilih Sendiri" : pkg.priceInfo.find(p => p.label === activeSchedule).days}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider font-bold flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Sistem</span>
                    <span className="text-slate-800 text-xs font-bold text-right">
                      {pkg.isPrivate ? "1 Murid : 1 Pelatih" : "4x Pertemuan / Bulan"}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 text-sm text-slate-600 font-medium text-left flex-grow">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href={`https://wa.me/6281238096091?text=Halo%20Coach,%20saya%20ingin%20daftar%20${encodeURIComponent(pkg.title)}`} target="_blank" rel="noopener noreferrer" className={`mt-auto w-full text-center font-bold py-4 rounded-2xl text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${pkg.badge ? 'bg-[#d63384] hover:bg-[#b02a6c] text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                  Pilih Kelas Ini &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          COACH SECTION
      ========================================= */}
      <section className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-5xl mx-auto px-4 py-24 border-b border-slate-100">
        <div className="bg-[#182a33] rounded-3xl overflow-hidden text-white flex flex-col md:flex-row items-stretch shadow-lg">
          <div className="w-full md:w-2/5 relative min-h-[300px] bg-slate-800">
            <img src="/img/coachimg1.jpg" alt="Coach Renang" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
          <div className="p-10 md:p-14 w-full md:w-3/5 flex flex-col justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">
            <span className="text-[#7cb5c8] font-semibold uppercase tracking-widest text-xs mb-3 block">Mengenal Coach</span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Coach yang Supportif & Profesional</h3>
            <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              <p>Kami percaya bahwa setiap orang memiliki ritme belajar yang berbeda. Oleh karena itu, para pelatih kami dibekali dengan pendekatan psikologis untuk membimbing dengan sabar, telaten, dan suportif.</p>
              <p>Hal ini memastikan anak-anak maupun orang dewasa bisa berkembang dan mengatasi ketakutan terhadap air dengan rasa percaya diri yang tinggi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LOKASI SECTION (DENGAN GOOGLE MAPS)
      ========================================= */}
      <section id="lokasi" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24">
        <div className="bg-white rounded-[3rem] border border-slate-200 p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row gap-8 items-center">
          
          {/* Teks Info Lokasi */}
          <div className="w-full md:w-1/2 md:pr-8">
            <span className="bg-[#7cb5c8]/10 text-[#7cb5c8] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs">Lokasi Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 mb-4">Pusat Latihan Renang</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">Kami berlatih di fasilitas kolam renang yang nyaman, bersih, dan dilengkapi dengan area tunggu untuk keluarga Anda.</p>
            
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-[#d63384]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Kolam Renang Bukit Jati</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Jl. Raya Bukit Jati, Samplangan, Kec. Gianyar, Kabupaten Gianyar, Bali 80512</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 font-medium mb-8">
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#7cb5c8] rounded-full"></div> Kolam Olympic</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#7cb5c8] rounded-full"></div> Area Parkir</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#7cb5c8] rounded-full"></div> Kantin / Ruang Tunggu</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#7cb5c8] rounded-full"></div> Kamar Bilas Bersih</div>
            </div>
            
            <a href="https://maps.app.goo.gl/XKBXLgm1ffGmpRwH9" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full text-sm transition-colors items-center justify-center gap-2">
              Buka di Aplikasi Maps
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          {/* Iframe Embed Maps HTML */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[450px] relative rounded-[2rem] overflow-hidden shadow-inner border-4 border-slate-50">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.628521292054!2d115.33377257501304!3d-8.535397291507538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2179abf515f03%3A0x147e606d5109e17e!2sTirta%20Jati%20Swimming%20Club!5e0!3m2!1sid!2sid!4v1782458350332!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Peta Lokasi Kolam Renang Bukit Jati"
              ></iframe>
          </div>

        </div>
      </section>

      {/* =========================================
          GALERI SECTION
      ========================================= */}
      <section id="galeri" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="text-center mb-16">
          <span className="text-[#d63384] font-semibold uppercase tracking-wider text-sm">Dokumentasi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Momen Latihan</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-square border border-slate-100">
            <iframe src="https://www.instagram.com/reel/DDXIRIcys21/embed" className="w-full h-full border-none" allowTransparency={true} allow="encrypted-media" title="Instagram Video"></iframe>
          </div>
          {["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"].map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-square cursor-pointer group border border-slate-100" onClick={() => setSelectedImg(img)}>
              <img src={img} alt={`Dokumentasi Latihan ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          FAQ SECTION
      ========================================= */}
      <section id="faq" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-3xl mx-auto py-24 px-4 border-t border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Pertanyaan Umum (FAQ)</h2>
          <p className="text-slate-500 text-sm mt-4 font-light">Hal-hal yang sering ditanyakan sebelum memulai pendaftaran latihan.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#7cb5c8]/50 transition-colors">
              <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full text-left px-6 py-5 font-medium text-slate-800 flex justify-between items-center focus:outline-none">
                <span className="pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-slate-50 text-[#d63384]' : 'bg-transparent text-slate-400'}`}>
                  <svg className={`w-4 h-4 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          FOOTER (Kembali ke versi terang + Icon IG)
      ========================================= */}
      <footer className="bg-slate-50 border-t border-slate-100 text-slate-500 pt-24 pb-12 px-6 mt-12 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-200 pb-16 mb-12">
          <div>
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Mulai perjalanan Anda.</h2>
            <p className="font-light max-w-sm leading-relaxed mb-8">Ambil langkah pertama untuk menguasai air dengan percaya diri bersama pelatih profesional kami.</p>
            <a href="https://wa.me/6281238096091" className="inline-block bg-[#d63384] text-white px-8 py-3 rounded-full font-medium hover:bg-[#b02a6c] transition-colors">
              Chat WhatsApp
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-end space-y-4">
            <p className="text-xl font-serif text-slate-900 italic">Tirta Jati Swimming Club</p>
            <p className="font-light text-sm">Gianyar, Bali, Indonesia.</p>
            
            {/* LINK INSTAGRAM DENGAN ICON SVG DI FOOTER TERANG */}
            <a href="https://instagram.com/tirta.jati.swimming.club" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-500 hover:text-[#d63384] transition-colors">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-[#d63384] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="font-light underline decoration-slate-300 underline-offset-4">Instagram @tirta.jati.swimming.club</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-light text-slate-400 gap-6">
          <p>© {new Date().getFullYear()} Tirta Jati SC.</p>
          <p className="text-xs">Created with <span className="text-[#d63384]">❤</span> by swim coach @buddz</p>
        </div>
      </footer>

      {/* MODAL GAMBAR */}
      {selectedImg && (
        <div className="fixed inset-0 bg-slate-900/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity" onClick={() => setSelectedImg(null)}>
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center text-3xl transition-colors focus:outline-none" onClick={() => setSelectedImg(null)}>×</button>
            <img src={selectedImg} alt="Pratinjau" className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
