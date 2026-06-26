import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  // --- DATA PAKET ---
  const packages = [
    {
      id: 1,
      title: "Kelas Anak-Anak (Kids Class)",
      desc: "Melatih keberanian di air, teknik mengapung, pernapasan, hingga menguasai gaya dasar.",
      features: ["Mulai Usia 4 Tahun","Pendekatan Sabar & Ceria", "Durasi 60 Menit / Sesi"],
      priceInfo: [
        { label: "Weekdays",  days: "Senin, Rabu, Jumat" }, 
        { label: "Weekend",  days: "Sabtu, Minggu" }
      ],
      period: "per bulan (4x latihan)",
      badge: "Populer"
    },
    {
      id: 2,
      title: "Kelas Dewasa (Adult Class)",
      desc: "Cocok untuk pemula yang belum bisa renang sama sekali atau untuk terapi kesehatan/stamina.",
      features: ["Usia 15 - 35+ Tahun", "Bebas Pilih Fokus Gaya", "Metode Cepat & Terukur", "Durasi 60 Menit / Sesi"],
      priceInfo: [
        { label: "Weekdays",  days: "Senin, Rabu, Jumat" }, 
        { label: "Weekend",  days: "Sabtu, Minggu" }
      ],
      period: "per bulan (4x latihan)",
      badge: ""
    },
    {
      id: 3,
      title: "Kelas Privat (1-on-1)",
      desc: "Satu pelatih khusus memegang satu murid. Progres belajar jauh lebih cepat dan intensif.",
      features: ["Semua Tingkat Usia", "Jadwal & Lokasi Fleksibel", "Bebas Pilih Fokus Gaya", "Selesai Lebih Cepat"],
      badge: "Tercepat"
    }
  ];

  // --- ANIMASI SCROLL ---
  useEffect(() => {
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
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqs = [
    { q: "Apakah kalau belum bisa renang sama sekali bisa ikut?", a: "Tentu saja! Mayoritas murid kami mulai dari nol (takut air/tidak bisa mengapung). Pelatih kami dilatih dengan pendekatan sabar untuk membangun kepercayaan diri Anda di dalam air." },
    { q: "Di mana lokasi latihan renangnya?", a: "Kami menggunakan Kolam Renang Bukit Jati di Gianyar sebagai lokasi utama latihan kelompok. Namun, jika Anda mengambil kelas privat, lokasi kolam bisa lebih fleksibel sesuai kesepakatan." },
    { q: "Apakah ada kelas trial (uji coba) gratis?", a: "Ada! Kami menyediakan 1x sesi trial gratis untuk melihat kecocokan metode pelatih dengan murid sebelum Anda memutuskan bergabung." }
  ];

  return (
    <div className="font-sans bg-white text-slate-800 min-h-screen scroll-smooth overflow-x-hidden selection:bg-[#7cb5c8]/30 selection:text-slate-900">
      
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-[#7cb5c8] to-[#d63384] text-white text-center py-2.5 px-4 text-xs font-medium tracking-wide">
        Khusus Pemula: Dapatkan 1x Sesi FREE TRIAL (Latihan Gratis) untuk Kelas Pertama! 
        <a href="https://wa.me/6281238096091?text=Halo%20Coach,%20saya%20tertarik%20tanya%20jadwal%20trial%20renang" className="underline text-white/90 hover:text-white ml-2 transition-colors font-semibold inline-block">
          Ambil Slot Gratis &rarr;
        </a>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 transition-all">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Logo Tirta Jati SC" 
              className="h-12 w-auto object-contain object-center" 
            />
            <div className="leading-none">
              <span className="font-bold text-lg tracking-tight text-[#7cb5c8] block">TIRTA JATI SC</span>
              <span className="text-[9px] uppercase font-semibold tracking-[0.2em] text-[#d63384] mt-1 block">Di air kita jaya</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-slate-600">
            <a href="#home" className="hover:text-[#d63384] transition-colors">Beranda</a>
            <a href="#paket" className="hover:text-[#d63384] transition-colors">Kelas Renang</a>
            <a href="#lokasi" className="hover:text-[#d63384] transition-colors">Lokasi</a>
            <a href="#faq" className="hover:text-[#d63384] transition-colors">FAQ</a>
            <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className="bg-[#7cb5c8] text-white px-5 py-2 rounded-full hover:bg-[#689aaa] transition-colors text-sm font-semibold">
              Hubungi Coach
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none p-2 text-slate-500 hover:text-[#7cb5c8] transition-colors">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-6 space-y-1 border-t border-slate-100 flex flex-col font-medium shadow-lg">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="py-3 px-2 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-lg">Beranda</a>
            <a href="#paket" onClick={() => setIsMenuOpen(false)} className="py-3 px-2 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-lg">Kelas Renang</a>
            <a href="#lokasi" onClick={() => setIsMenuOpen(false)} className="py-3 px-2 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-lg">Lokasi</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="py-3 px-2 text-slate-600 hover:text-[#d63384] hover:bg-slate-50 rounded-lg mb-4">FAQ</a>
            <a href="https://wa.me/6281238096091" onClick={() => setIsMenuOpen(false)} className="bg-[#7cb5c8] text-white text-center py-3 rounded-xl font-semibold">Hubungi Coach</a>
          </div>
        )}
      </nav>

      {/* HEADER HERO (TIDAK DIRUBAH KATA-KATANYA SESUAI PERMINTAAN) */}
      <header 
        id="home" 
        className="relative py-24 md:py-32 px-4 overflow-hidden"
        style={{
          backgroundColor: '#7cb5c8',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(124, 181, 200, 1) 0%, rgba(74, 140, 161, 1) 90%)'
        }}
      >
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto z-10 bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-sm">
              Belajar Renang Jadi Mudah, <br/>
              <span className="text-[#d63384] bg-white/90 px-4 py-1 rounded-full border border-pink-100 inline-block mt-2 shadow-lg">
                Aman & Menyenangkan!
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
              Metode kepelatihan terstruktur untuk segala usia (Anak-Anak s/d Dewasa). Dipandu langsung oleh pelatih profesional berlisensi untuk membantu Anda menguasai teknik renang dengan cepat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#paket" className="w-full sm:w-auto bg-[#d63384] text-white font-black px-8 py-4 rounded-full shadow-xl hover:bg-[#b02a6c] hover:scale-105 transition duration-300 uppercase tracking-wider text-sm">
                Lihat Pilihan Kelas Renang
              </a>
              <a href="https://wa.me/6281238096091?text=Halo%20Coach,%20saya%20tertarik%20tanya%20jadwal%20trial%20renang" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full shadow-lg transition duration-300 border border-white/30 backdrop-blur-sm flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                <span>💬 Hubungi Coach</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* KEUNGGULAN SECTION */}
      <section id="keunggulan" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="text-[#d63384] font-semibold uppercase tracking-wider text-sm">Mengapa Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Keunggulan Tirta Jati SC</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Pelatih Berlisensi", 
              desc: "Dipandu oleh tim pelatih berpengalaman, menguasai teknik kepelatihan dengan pendekatan aman dan profesional.", 
              icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            },
            { 
              title: "Kurikulum Terstruktur", 
              desc: "Materi belajar disesuaikan dengan kemampuan murid, mulai dari tahap adaptasi air hingga koreksi gaya lanjutan.", 
              icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            },
            { 
              title: "Prioritas Keamanan", 
              desc: "Fokus utama kami adalah keselamatan murid selama berada di kolam dengan rasio pengawasan pelatih yang ideal.", 
              icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            },
            { 
              title: "Semua Tingkatan", 
              desc: "Menerima murid dari berbagai level; mulai dari pemula mutlak hingga program intensif perbaikan teknik.", 
              icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            }
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

      {/* PAKET HARGA */}
      <section id="paket" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out bg-slate-50/50 py-24 px-4 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#d63384] font-semibold uppercase tracking-wider text-sm">Program Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Pilihan Kelas Renang</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`bg-white rounded-3xl p-8 flex flex-col h-full relative ${pkg.badge ? 'border border-[#d63384]/20 shadow-lg shadow-[#d63384]/5' : 'border border-slate-100 shadow-sm'}`}>
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-8 bg-[#d63384] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    {pkg.badge}
                  </span>
                )}
                
                <div className="flex flex-col flex-grow mt-2">
                  <h3 className="font-bold text-2xl text-slate-900 mb-3">{pkg.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light border-b border-slate-100 pb-6 min-h-[72px]">{pkg.desc}</p>
                  
                  <div className="mb-8">
                    {pkg.priceInfo ? (
                      <div className="space-y-4">
                        {pkg.priceInfo.map((p, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <div>
                               <span className="font-semibold text-[#7cb5c8] text-sm block">{p.label}</span>
                               <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{p.days}</span>
                            </div>
                            <span className="font-semibold text-slate-800">{p.price}</span>
                          </div>
                        ))}
                        {pkg.period && (
                          <div className="pt-4 border-t border-slate-50 text-[12px] text-slate-400 font-medium italic text-center">
                           {pkg.period}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-3xl font-bold text-slate-900">{pkg.price}</span>
                        {pkg.period && <span className="text-slate-400 text-sm"> {pkg.period}</span>}
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-10 text-sm text-slate-600 font-light flex-grow">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#7cb5c8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/6281238096091?text=Halo%20Coach%20Tirta%20Jati%20Swimming%20Club,%20saya%20ingin%20mendaftar%20les%20renang%20${encodeURIComponent(pkg.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`mt-auto w-full text-center font-medium py-3.5 rounded-xl text-sm transition-colors ${pkg.badge ? 'bg-[#d63384] hover:bg-[#c22d76] text-white' : 'bg-slate-50 hover:bg-slate-100 text-[#7cb5c8] border border-slate-200'}`}
                >
                  Daftar Kelas Ini
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50/50 border border-blue-100 rounded-2xl p-5 max-w-2xl mx-auto flex items-start gap-4">
            <svg className="w-6 h-6 text-[#7cb5c8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              <strong className="font-semibold text-slate-800">Khusus Kelas Privat (1-on-1):</strong> Anda bebas menentukan lokasi kolam renang sendiri sesuai kesepakatan bersama Coach.
            </p>
          </div>
        </div>
      </section>

      {/* COACH SECTION */}
      <section className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-5xl mx-auto px-4 py-24">
        <div className="bg-[#182a33] rounded-3xl overflow-hidden text-white flex flex-col md:flex-row items-stretch shadow-lg">
          <div className="w-full md:w-2/5 relative min-h-[300px] bg-slate-800">
            <img 
              src="/img/coachimg1.jpg" 
              alt="Coach Renang" 
              className="absolute inset-0 w-full h-full object-cover object-top" 
            />
          </div>
          
          <div className="p-10 md:p-14 w-full md:w-3/5 flex flex-col justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">
            <span className="text-[#7cb5c8] font-semibold uppercase tracking-widest text-xs mb-3 block">Mengenal Coach</span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Coach yang Supportif & Profesional</h3>
            <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              <p>
                Kami percaya bahwa setiap orang memiliki ritme belajar yang berbeda. Oleh karena itu, para pelatih kami dibekali dengan pendekatan psikologis untuk membimbing dengan sabar, telaten, dan suportif.
              </p>
              <p>
                Hal ini memastikan anak-anak maupun orang dewasa bisa berkembang dan mengatasi ketakutan terhadap air dengan rasa percaya diri yang tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOKASI SECTION */}
      <section id="lokasi" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24 border-t border-slate-100">
        <div className="text-center mb-16">
          <span className="text-[#d63384] font-semibold uppercase tracking-wider text-sm">Lokasi Utama</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Pusat Latihan Kami</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#7cb5c8]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kolam Renang Bukit Jati</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Jl. Raya Bukit Jati, Samplangan, Kec. Gianyar, Kabupaten Gianyar, Bali 80512
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-6 mb-8">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Fasilitas Tersedia</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 font-light">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Kolam Olympic
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Area Parkir $ Aman
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Kantin / Area Tunggu
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Kamar Bilas
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/XKBXLgm1ffGmpRwH9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#7cb5c8] hover:bg-[#689aaa] text-white font-medium py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            Buka di Google Maps
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </section>

      {/* GALERI SECTION */}
      <section id="galeri" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="text-center mb-16">
          <span className="text-[#d63384] font-semibold uppercase tracking-wider text-sm">Dokumentasi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Momen Latihan</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-square border border-slate-100">
            <iframe 
              src="https://www.instagram.com/reel/DDXIRIcys21/embed" 
              className="w-full h-full border-none"
              allowTransparency={true}
              allow="encrypted-media"
              title="Instagram Video"
            ></iframe>
          </div>

          {["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"].map((img, idx) => (
            <div 
              key={idx}
              className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-square cursor-pointer group border border-slate-100"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Dokumentasi Latihan ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/tirta.jati.swimming.club" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#d63384] font-medium text-sm transition-colors border-b border-transparent hover:border-[#d63384] pb-0.5"
          >
            Lihat aktivitas seru lainnya di Instagram @tirta.jati.swimming.club
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-3xl mx-auto py-24 px-4 border-t border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Pertanyaan Umum (FAQ)</h2>
          <p className="text-slate-500 text-sm mt-4 font-light">Hal-hal yang sering ditanyakan sebelum memulai pendaftaran latihan.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#7cb5c8]/50 transition-colors">
              <button 
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full text-left px-6 py-5 font-medium text-slate-800 flex justify-between items-center focus:outline-none"
              >
                <span className="pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-slate-50 text-[#d63384]' : 'bg-transparent text-slate-400'}`}>
                  <svg className={`w-4 h-4 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 text-sm text-slate-500 font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-100 text-slate-500 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-2">Tirta Jati SC.</h4>
            <p className="text-sm font-light">Gianyar Swim Partner</p>
          </div>
          
          <div className="text-sm font-light">
            <p className="mb-1">© {new Date().getFullYear()} Tirta Jati SC. All Rights Reserved.</p>
            <p className="text-xs text-slate-400">
              Created with <span className="text-[#d63384]">❤</span> by @buddz
            </p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-slate-900/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center text-3xl transition-colors focus:outline-none"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>
            <img 
              src={selectedImg} 
              alt="Pratinjau" 
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
