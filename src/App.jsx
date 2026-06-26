import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const packages = [
    {
      id: 1,
      title: "Kelas Anak-Anak (Kids)",
      desc: "Melatih keberanian di air, teknik mengapung, pernapasan, hingga menguasai gaya dasar.",
      features: ["Mulai Usia 4 Tahun", "Pendekatan Sabar & Ceria", "Durasi 60 Menit / Sesi"],
      priceInfo: [{ label: "Weekdays", days: "Senin, Rabu, Jumat" }, { label: "Weekend", days: "Sabtu, Minggu" }],
      period: "per bulan (4x latihan)",
      badge: "Populer"
    },
    {
      id: 2,
      title: "Kelas Dewasa (Adult)",
      desc: "Cocok untuk pemula yang belum bisa renang sama sekali atau untuk terapi kesehatan/stamina.",
      features: ["Usia 15 - 35+ Tahun", "Bebas Pilih Fokus Gaya", "Metode Cepat & Terukur", "Durasi 60 Menit / Sesi"],
      priceInfo: [{ label: "Weekdays", days: "Senin, Rabu, Jumat" }, { label: "Weekend", days: "Sabtu, Minggu" }],
      period: "per bulan (4x latihan)",
      badge: ""
    },
    {
      id: 3,
      title: "Privat (1-on-1)",
      desc: "Satu pelatih khusus memegang satu murid. Progres belajar jauh lebih cepat dan intensif.",
      features: ["Semua Tingkat Usia", "Jadwal & Lokasi Fleksibel", "Bebas Pilih Fokus Gaya", "Selesai Lebih Cepat"],
      badge: "Tercepat"
    }
  ];

  const faqs = [
    { q: "Apakah kalau belum bisa renang sama sekali bisa ikut?", a: "Tentu saja! Mayoritas murid kami mulai dari nol (takut air/tidak bisa mengapung). Pelatih kami dilatih dengan pendekatan sabar untuk membangun kepercayaan diri Anda di dalam air." },
    { q: "Di mana lokasi latihan renangnya?", a: "Kami menggunakan Kolam Renang Bukit Jati di Gianyar sebagai lokasi utama latihan kelompok. Namun, jika Anda mengambil kelas privat, lokasi kolam bisa lebih fleksibel sesuai kesepakatan." },
    { q: "Apakah ada kelas trial (uji coba) gratis?", a: "Ada! Kami menyediakan 1x sesi trial gratis untuk melihat kecocokan metode pelatih dengan murid sebelum Anda memutuskan bergabung." }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="font-sans bg-[#f4f4f6] text-slate-900 min-h-screen scroll-smooth selection:bg-[#d63384] selection:text-white">
      
      {/* FLOATING PROMO BAR */}
      <div className="bg-slate-900 text-white text-center py-2.5 px-4 text-xs font-medium tracking-wide">
        <span className="opacity-80">✨ Khusus Pemula: Dapatkan 1x Sesi FREE TRIAL (Latihan Gratis) untuk Kelas Pertama!</span>
        <a href="https://wa.me/6281238096091" className="ml-3 font-bold text-[#7cb5c8] hover:text-white transition-colors underline decoration-[#7cb5c8] underline-offset-4">
          Ambil Slot Gratis
        </a>
      </div>

      {/* FLOATING NAVBAR (Modern Apple-Style) */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <nav className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl shadow-slate-200/50 rounded-full px-6 py-3 flex justify-between items-center pointer-events-auto transition-all duration-300">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
            <span className="font-black text-lg tracking-tighter text-slate-900 leading-none">
              TIRTA JATI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-500">
            <a href="#keunggulan" className="hover:text-slate-900 transition-colors">Keunggulan</a>
            <a href="#paket" className="hover:text-slate-900 transition-colors">Kelas</a>
            <a href="#lokasi" className="hover:text-slate-900 transition-colors">Lokasi</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </div>

          <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#d63384] hover:shadow-lg hover:shadow-[#d63384]/30 transition-all duration-300 transform hover:-translate-y-0.5">
            Hubungi Coach
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 rounded-full bg-slate-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}></path></svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="max-w-5xl mx-auto mt-2 bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-4 flex flex-col space-y-2 pointer-events-auto font-semibold">
            {['Keunggulan', 'Paket', 'Lokasi', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 bg-slate-50 rounded-xl text-slate-800 active:bg-slate-200">
                {item}
              </a>
            ))}
            <a href="https://wa.me/6281238096091" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 bg-slate-900 text-white rounded-xl text-center mt-2">
              Hubungi Coach
            </a>
          </div>
        )}
      </div>

      {/* HERO SECTION (Teks Lama, Visual Baru Premium) */}
      <header id="home" className="relative pt-40 pb-32 px-4 overflow-hidden bg-slate-900 rounded-b-[3rem] md:rounded-b-[5rem]">
        {/* Dynamic Abstract Background Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#7cb5c8] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#d63384] rounded-full mix-blend-screen filter blur-[150px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-20"></div>

        <div className="relative max-w-5xl mx-auto z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-white max-w-4xl">
            Belajar Renang Jadi Mudah, <br className="hidden md:block"/>
            <span className="relative inline-block mt-2 md:mt-0">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7cb5c8] to-[#d63384]">Aman & Menyenangkan!</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Metode kepelatihan terstruktur untuk segala usia (Anak-Anak s/d Dewasa). Dipandu langsung oleh pelatih profesional berlisensi untuk membantu Anda menguasai teknik renang dengan cepat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#paket" className="w-full sm:w-auto bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 text-sm">
              Lihat Pilihan Kelas Renang
            </a>
            <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
              <span>💬 Hubungi Coach</span>
            </a>
          </div>
        </div>
      </header>

      {/* KEUNGGULAN (Bento Box Layout) */}
      <section id="keunggulan" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">Standar Kami.</h2>
          <p className="text-slate-500 text-lg max-w-md font-medium">Fasilitas dan metode pelatihan terbaik yang kami siapkan untuk perkembangan Anda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm flex flex-col justify-end relative overflow-hidden group animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7cb5c8]/20 to-transparent rounded-bl-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Pelatih Berlisensi Profesional</h3>
              <p className="text-slate-500 font-medium max-w-sm">Dipandu oleh tim pelatih berpengalaman, memiliki teknik kepelatihan terkini, aman, dan sangat suportif.</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col justify-end relative overflow-hidden group animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100 ease-out">
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[#d63384] blur-[50px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2">Kurikulum Terstruktur</h3>
              <p className="text-slate-400 font-medium text-sm">Materi disesuaikan dengan kemampuan murid secara presisi.</p>
            </div>
          </div>

          <div className="bg-[#7cb5c8] rounded-[2rem] p-8 text-slate-900 flex flex-col justify-end animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200 ease-out">
            <h3 className="text-2xl font-black mb-2">Keamanan Utama</h3>
            <p className="text-slate-800 font-medium text-sm">Fokus pada keselamatan dengan rasio pelatih-murid yang ideal.</p>
          </div>

          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm flex flex-col justify-end animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-300 ease-out">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Untuk Semua Tingkatan</h3>
            <p className="text-slate-500 font-medium max-w-sm">Menerima murid dari berbagai level, mulai dari pemula (nol) hingga program intensif untuk persiapan menjadi atlet daerah.</p>
          </div>
        </div>
      </section>

      {/* PAKET KELAS (Premium Minimalist Cards) */}
      <section id="paket" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Program Kelas.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {packages.map((pkg, idx) => {
            const isPopular = pkg.id === 1;
            return (
              <div key={pkg.id} className={`rounded-[2rem] p-8 transition-all duration-500 animate-on-scroll opacity-0 translate-y-12 ease-out ${isPopular ? 'bg-slate-900 text-white shadow-2xl scale-100 lg:scale-105 z-10 border border-slate-700' : 'bg-white text-slate-900 shadow-sm border border-slate-200/60 hover:shadow-xl hover:-translate-y-2'}`} style={{transitionDelay: `${idx * 150}ms`}}>
                {pkg.badge && (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${isPopular ? 'bg-[#d63384] text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {pkg.badge}
                  </span>
                )}
                
                <h3 className={`text-2xl font-black mb-4 tracking-tight ${isPopular ? 'text-white' : 'text-slate-900'}`}>{pkg.title}</h3>
                <p className={`text-sm mb-8 h-16 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>
                
                <div className={`rounded-2xl p-5 mb-8 ${isPopular ? 'bg-slate-800' : 'bg-slate-50'}`}>
                  {pkg.priceInfo ? (
                    <div className="space-y-3">
                      {pkg.priceInfo.map((p, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className={`font-bold ${isPopular ? 'text-slate-200' : 'text-slate-700'}`}>{p.label}</span>
                          <span className={`text-xs font-semibold ${isPopular ? 'text-[#7cb5c8]' : 'text-[#d63384]'}`}>Tanya Admin</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <span className={`font-bold text-sm ${isPopular ? 'text-slate-200' : 'text-slate-700'}`}>Jadwal Fleksibel</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${isPopular ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-800'}`}>1-on-1</span>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <svg className={`w-5 h-5 ${isPopular ? 'text-[#7cb5c8]' : 'text-slate-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                      <span className={isPopular ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href={`https://wa.me/6281238096091?text=Halo%20Coach,%20saya%20tertarik%20dengan%20${pkg.title}`} target="_blank" rel="noopener noreferrer" className={`block w-full text-center font-bold py-4 rounded-full text-sm transition-all duration-300 ${isPopular ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-[#d63384]'}`}>
                  Daftar Sekarang
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROFIL PELATIH (Offset Image Layout) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200/60 shadow-sm flex flex-col lg:flex-row items-center gap-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <div className="lg:w-1/2 relative w-full">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src="/img/coachimg1.jpg" alt="Coach Tirta Jati" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Dekorasi Abstract */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#7cb5c8] rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-6">Dilatih dengan hati, berkembang dengan pasti.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              Setiap individu memiliki ritme belajar yang berbeda. Kami menerapkan pendekatan psikologis agar proses adaptasi air tidak menjadi hal yang menakutkan, melainkan menyenangkan.
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1">
                <h4 className="font-black text-2xl text-slate-900 mb-1">500+</h4>
                <p className="text-sm font-semibold text-slate-500">Murid Lulus</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1">
                <h4 className="font-black text-2xl text-slate-900 mb-1">100%</h4>
                <p className="text-sm font-semibold text-slate-500">Fokus Keamanan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOKASI & MAPS (Split View Modern) */}
      <section id="lokasi" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 mb-12">
              <h2 className="text-4xl font-black tracking-tighter mb-4">Tempat Latihan</h2>
              <h3 className="text-2xl font-bold text-[#7cb5c8] mb-4">Kolam Renang Bukit Jati</h3>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                Jl. Raya Bukit Jati, Samplangan, Kec. Gianyar, Kabupaten Gianyar, Bali 80512
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold backdrop-blur-md">Kolam Standar</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold backdrop-blur-md">Parkir & Aman</span>
              </div>
              <a href="https://maps.app.goo.gl/XKBXLgm1ffGmpRwH9" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-white text-slate-900 font-bold py-4 px-8 rounded-full text-center hover:bg-slate-200 transition-colors">
                Buka Arah Google Maps
              </a>
            </div>
          </div>

          <div className="h-[450px] lg:h-auto rounded-[3rem] overflow-hidden border border-slate-200/60 shadow-sm relative group p-2 bg-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.628521292054!2d115.33377257501304!3d-8.535397291507538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2179abf515f03%3A0x147e606d5109e17e!2sTirta%20Jati%20Swimming%20Club!5e0!3m2!1sid!2sid!4v1782440051754!5m2!1sid!2sid" 
              className="w-full h-full min-h-[300px]"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kolam Renang Bukit Jati"
            ></iframe>
          </div>
        </div>
      </section>

      {/* DOKUMENTASI (Asymmetrical Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-4xl font-black tracking-tighter text-slate-900">Momen Latihan.</h2>
          <a href="https://instagram.com/tirta.jati.swimming.club" target="_blank" rel="noopener noreferrer" className="font-bold text-[#d63384] hover:text-slate-900 transition-colors mt-4 md:mt-0 underline underline-offset-4">
            Lihat Instagram
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden bg-white p-2 border border-slate-200/60">
            <iframe 
              src="https://www.instagram.com/reel/DDXIRIcys21/embed" 
              className="w-full h-full rounded-[1.5rem] border-none"
              allowTransparency={true}
            ></iframe>
          </div>
          {["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"].map((src, i) => (
            <div key={i} className={`rounded-[2rem] overflow-hidden bg-white p-2 border border-slate-200/60 cursor-pointer group ${i === 0 ? 'col-span-2' : ''}`} onClick={() => setSelectedImg(src)}>
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img src={src} alt="Dokumentasi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (Clean Typographic Accordion) */}
      <section id="faq" className="py-32 px-6 max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
        <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-12 text-center">Pertanyaan Umum.</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="bg-white rounded-[1.5rem] border border-slate-200/60 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-6 font-black text-slate-900 text-lg flex justify-between items-center focus:outline-none"
                >
                  <span className="pr-8">{faq.q}</span>
                  <span className={`text-2xl font-light text-slate-400 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 font-medium leading-relaxed px-6 pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BIG FOOTER */}
      <footer className="bg-slate-900 text-white pt-24 pb-8 px-6 mt-12 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] text-center opacity-5 pointer-events-none select-none">
          <h1 className="text-[15vw] font-black leading-none tracking-tighter whitespace-nowrap">TIRTA JATI SC</h1>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-black mb-4">Siap untuk nyebur?</h3>
            <p className="text-slate-400 font-medium mb-8 max-w-sm">Hubungi kami hari ini untuk mengamankan jadwal latihan Anda atau sekadar berkonsultasi tentang program.</p>
            <a href="https://wa.me/6281238096091" className="inline-block bg-[#d63384] text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-colors">
              Chat via WhatsApp
            </a>
          </div>
          <div className="md:text-right flex flex-col md:items-end justify-end">
            <p className="text-slate-500 font-medium">© {new Date().getFullYear()} Tirta Jati Swimming Club.</p>
            <p className="text-slate-600 font-medium mt-1">Gianyar, Bali.</p>
            <p className="text-slate-600 font-medium mt-1">Created with ❤ by Swim Coach IT @buddz.</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX (Minimalist Modal) */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"></div>
          <img src={selectedImg} alt="Preview" className="relative z-10 max-w-full max-h-[85vh] rounded-[2rem] shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-md" onClick={() => setSelectedImg(null)}>
            ✕
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
