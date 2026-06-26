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
            // 1. Munculkan elemen
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-16', 'scale-95');
            
            // 2. Hentikan pemantauan agar animasi tidak diulang (hanya sekali)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll('.timbul-scroll');
    elements.forEach((el) => observer.observe(el));

    // Cleanup saat komponen unmount
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
    <div className="font-sans bg-white text-slate-800 min-h-screen scroll-smooth overflow-x-hidden">
      
      {/* TOP BAR - Opsi Gradient (Modern & Estetik) */}
      <div className="bg-gradient-to-r from-[#7cb5c8] to-[#d63384] text-white text-center py-2.5 px-4 text-xs font-bold tracking-wide shadow-sm">
        ✨ Khusus Pemula: Dapatkan 1x Sesi FREE TRIAL (Latihan Gratis) untuk Kelas Pertama! 
        <a href="https://wa.me/6281238096091?text=Halo%20Coach,%20saya%20tertarik%20tanya%20jadwal%20trial%20renang" className="underline text-white hover:opacity-80 ml-1.5 transition-all inline-block drop-shadow-md">
          Ambil Slot Gratis→
        </a>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Logo Tirta Jati SC" 
              className="h-14 w-auto object-contain object-center drop-shadow-sm" 
            />
            <div className="leading-tight">
              <span className="font-black text-xl tracking-tight text-[#7cb5c8] block">TIRTA JATI SC</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#d63384]">Di air kita jaya</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 font-bold text-sm text-slate-600">
            <a href="#home" className="hover:text-[#d63384] transition">Beranda</a>
            <a href="#paket" className="hover:text-[#d63384] transition">Kelas Renang</a>
            <a href="#lokasi" className="hover:text-[#d63384] transition">Lokasi</a>
            <a href="#faq" className="hover:text-[#d63384] transition">FAQ</a>
            <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className="bg-[#7cb5c8] text-white px-5 py-2.5 rounded-full hover:bg-[#689aaa] hover:shadow-md transition tracking-wide text-xs uppercase">
              Hubungi Coach
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none p-1 text-[#7cb5c8]">
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
          <div className="md:hidden bg-white px-4 pt-2 pb-6 space-y-3 border-t border-slate-100 flex flex-col font-bold">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="py-2 text-slate-700 hover:text-[#d63384]">Beranda</a>
            <a href="#paket" onClick={() => setIsMenuOpen(false)} className="py-2 text-slate-700 hover:text-[#d63384]">Kelas Renang</a>
            <a href="#lokasi" onClick={() => setIsMenuOpen(false)} className="py-2 text-slate-700 hover:text-[#d63384]">Lokasi</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="py-2 text-slate-700 hover:text-[#d63384]">FAQ</a>
            <a href="https://wa.me/6281238096091" onClick={() => setIsMenuOpen(false)} className="bg-[#7cb5c8] text-white text-center py-3 rounded-xl">Hubungi Coach</a>
          </div>
        )}
      </nav>

      {/* HEADER HERO */}
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
      <section id="keunggulan" className="timbul-scroll opacity-0 translate-y-16 scale-95 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="text-[#d63384] font-extrabold uppercase tracking-widest text-xs">Mengapa Kami</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Keunggulan Tirta Jati SC</h2>
          <div className="w-16 h-1 bg-[#7cb5c8] mx-auto rounded-full mt-3"></div>
        </div>

        {/* --- GRID DIUBAH MENJADI 4 KOLOM --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Pelatih Berlisensi", desc: "Dipandu oleh tim pelatih berpengalaman, memiliki teknik kepelatihan, aman, serta profesional.", icon: "🏅" },
            { title: "Kurikulum Terstruktur", desc: "Materi belajar disesuaikan dengan kemampuan murid, mulai dari adaptasi air, hingga koreksi gaya.", icon: "📋" },
            { title: "Keamanan", desc: "Fokus utama kami adalah keselamatan murid selama berada di kolam dengan rasio pelatih-murid ideal.", icon: "🛡️" },
            { title: "Untuk Semua Tingkatan", desc: "Menerima murid dari berbagai level, mulai dari pemula (nol) hingga program intensif untuk persiapan atlet.", icon: "🎯" } // <-- POIN KE-4 DITAMBAHKAN
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#7cb5c8]/30 transition group flex flex-col">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
            </div> 
          ))}
        </div>
      </section>

      {/* PAKET HARGA */}
      <section id="paket" className="timbul-scroll opacity-0 translate-y-16 scale-95 transition-all duration-700 ease-out bg-slate-50 py-20 px-4 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#d63384] font-extrabold uppercase tracking-widest text-xs">Kelas Renang</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Pilihan Kelas Renang</h2>
            <div className="w-16 h-1 bg-[#7cb5c8] mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`bg-white rounded-3xl shadow-sm border ${pkg.badge ? 'border-[#d63384] ring-2 ring-[#d63384]/10' : 'border-slate-200'} p-8 flex flex-col h-full relative`}>
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#d63384] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {pkg.badge}
                  </span>
                )}
                
                <div className="flex flex-col flex-grow">
                  <h3 className="font-extrabold text-xl text-slate-900 mb-3">{pkg.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 border-b border-slate-100 pb-4 min-h-[48px]">{pkg.desc}</p>
                  
                  <div className="mb-6">
                    {pkg.priceInfo ? (
                      <>
                        {pkg.priceInfo.map((p, i) => (
                          <div key={i} className="mb-3 flex justify-between items-center">
                            <div>
                               <span className="font-black text-[#7cb5c8] text-sm block">{p.label}</span>
                               <span className="text-[10px] text-slate-400 font-medium uppercase">{p.days}</span>
                            </div>
                            <span className="font-bold text-slate-900">{p.price}</span>
                          </div>
                        ))}
                        {pkg.period && (
                          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold italic">
                           {pkg.period}
                          </div>
                        )}
                      </>
                    ) : (
                      <div>
                        <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                        {pkg.period && <span className="text-slate-400 text-xs font-semibold"> {pkg.period}</span>}
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-xs text-slate-600">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#7cb5c8] font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/6281238096091?text=Halo%20Coach Tirta Jati Swimming Club,%20saya%20ingin%20mendaftar%20les renang%20${encodeURIComponent(pkg.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`mt-auto w-full text-center font-black py-3 rounded-xl text-xs uppercase tracking-wider transition ${pkg.badge ? 'bg-[#d63384] hover:bg-[#b02a6c] text-white' : 'bg-[#7cb5c8] hover:bg-[#689aaa] text-white'}`}
                >
                  Daftar Kelas Ini
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center bg-[#7cb5c8]/10 border border-[#7cb5c8]/20 rounded-2xl p-4 max-w-2xl mx-auto text-xs text-slate-700">
          💡 <strong>Khusus Kelas Privat (1-on-1):</strong> Anda bebas menentukan lokasi kolam renang sendiri sesuai kesepakatan bersama Coach.
        </div>
      </section>

      {/* COACH SECTION */}
      <section className="timbul-scroll opacity-0 translate-y-16 scale-95 transition-all duration-700 ease-out max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-[#1c3541] to-[#112129] rounded-3xl shadow-xl overflow-hidden text-white flex flex-col md:flex-row items-stretch border border-white/10">
          
          {/* KOTAK FOTO */}
          <div className="w-full md:w-2/5 h-85 sm:h-96 md:h-auto relative">
            <img 
              src="/img/coachimg1.jpg" 
              alt="Coach Renang" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          
          {/* KOTAK TEKS */}
          <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
            <span className="text-[#d63384] font-bold uppercase tracking-wider text-xs block mb-1">Mengenal Coach</span>
            <h3 className="text-2xl font-black mb-4">Pelatih Friendly & Profesional</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Kami percaya bahwa setiap orang memiliki ritme belajar yang berbeda. Oleh karena itu, para pelatih kami dibekali dengan kemampuan psikologis untuk membimbing dengan sabar, telaten, dan suportif, memastikan anak-anak maupun dewasa bisa berkembang dengan rasa percaya diri yang tinggi.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Kami siap mendidik dan mengantarkan anak-anak maupun dewasa mencapai target kemampuan renang terbaik dengan cara yang aman dan profesional.
            </p>
          </div>
        </div>
      </section>

      {/* LOKASI SECTION */}
      <section id="lokasi" className="timbul-scroll opacity-0 translate-y-16 scale-95 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-20 border-t border-slate-100">
        <div className="text-center mb-12">
          <span className="text-[#d63384] font-extrabold uppercase tracking-widest text-xs">Lokasi Utama</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Lokasi Latihan</h2>
          <div className="w-16 h-1 bg-[#7cb5c8] mx-auto rounded-full mt-3"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#7cb5c8]/50 transition">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">📍</span>
                <h3 className="text-xl font-extrabold text-slate-900">Kolam Renang Bukit Jati</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Jl. Raya Bukit Jati, Samplangan, Kec. Gianyar, Kabupaten Gianyar, Bali 80512
              </p>
              <div className="border-t border-slate-100 pt-4 mb-6">
                <h4 className="text-xs font-bold text-[#7cb5c8] uppercase tracking-wider mb-3">Fasilitas Kolam:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#d63384]">🔹</span> Kolam Olympic
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#d63384]">🔹</span> Area Parkir & Kantin
                  </div>
                </div>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/XKBXLgm1ffGmpRwH9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#7cb5c8] hover:bg-[#689aaa] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-sm"
            >
              🗺️ Lihat Rute Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* GALERI SECTION (Bisa Diklik & Zoom Preview) */}
      <section id="galeri" className="timbul-scroll opacity-0 translate-y-16 scale-95 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-20 bg-slate-50 border-t border-slate-100">
        <div className="text-center mb-12">
          <span className="text-[#d63384] font-extrabold uppercase tracking-widest text-xs">Dokumentasi</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Galeri & Video Latihan</h2>
          <div className="w-16 h-1 bg-[#7cb5c8] mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-square bg-slate-200">
            <iframe 
              src="https://www.instagram.com/reel/DDXIRIcys21/embed" 
              className="w-full h-full border-none"
              allowTransparency={true}
              allow="encrypted-media"
            ></iframe>
          </div>

          {/* FOTO 1 */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-sm aspect-square bg-slate-200 cursor-pointer group"
            onClick={() => setSelectedImg("/img/img1.jpg")}
          >
            <img src="/img/img1.jpg" alt="Latihan 1" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">🔍 Perbesar</span>
            </div>
          </div>

          {/* FOTO 2 */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-sm aspect-square bg-slate-200 cursor-pointer group"
            onClick={() => setSelectedImg("/img/img2.jpg")}
          >
            <img src="/img/img2.jpg" alt="Latihan 2" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">🔍 Perbesar</span>
            </div>
          </div>

          {/* FOTO 3 */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-sm aspect-square bg-slate-200 cursor-pointer group"
            onClick={() => setSelectedImg("/img/img3.jpg")}
          >
            <img src="/img/img3.jpg" alt="Latihan 3" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">🔍 Perbesar</span>
            </div>
          </div>
        </div>

        <a 
          href="https://www.instagram.com/tirta.jati.swimming.club" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block text-center text-slate-500 hover:text-[#d63384] font-medium text-xs mt-8 italic transition-colors"
        >
          *Lihat aktivitas seru lainnya di Instagram kami (@tirta.jati.swimming.club)
        </a>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="timbul-scroll opacity-0 translate-y-16 scale-95 transition-all duration-700 ease-out max-w-3xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900">Pertanyaan Umum (FAQ)</h2>
          <div className="w-16 h-1 bg-[#7cb5c8] mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-slate-500 text-sm mt-2">Menjawab hal-hal umum yang sering ditanyakan sebelum memulai pendaftaran latihan.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 hover:border-[#7cb5c8]/50 transition-colors rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full text-left px-6 py-4 font-bold text-slate-800 hover:text-[#d63384] flex justify-between items-center text-sm sm:text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className={`text-xs transition-transform duration-200 ${activeFaq === index ? 'text-[#d63384] rotate-180' : 'text-[#7cb5c8]'}`}>▼</span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 text-xs py-12 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d63384]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left relative z-10">
          <div>
            <h4 className="font-black text-[#7cb5c8] text-base mb-1 tracking-wider">TIRTA JATI SC</h4>
            <p className="text-slate-400 max-w-sm">Program kursus & bimbingan renang terpercaya untuk anak-anak dan dewasa.</p>
          </div>
          
          <div className="text-center sm:text-right font-medium">
            <p>© {new Date().getFullYear()} Tirta Jati SC. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-400 mt-1.5">
              Created with <span className="text-[#d63384] animate-pulse">❤</span> by Swim Coach IT @buddz
            </p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX POP-UP MODAL (Pratinjau Foto Besar) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/85 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center transition-transform transform scale-100">
            <button 
              className="absolute -top-12 right-0 text-white bg-white/10 hover:bg-white/25 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors focus:outline-none"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImg} 
              alt="Pratinjau Besar" 
              className="max-w-full max-h-[80vh] md:max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
