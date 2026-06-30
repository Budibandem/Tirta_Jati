import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedFeature, setClickedFeature] = useState(null);

  useEffect(() => {
   
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(entry.target); // Berhenti mengamati setelah muncul
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.timbul-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      observer.disconnect(); 
    };
  }, []);

  
  const packages = [
    {
      id: 1,
      title: "Kelas Anak-Anak",
      sub: "(Kids Class)",
      desc: "Melatih keberanian di air, pernapasan, hingga bisa menguasai gaya dasar renang.",
      badge: "Terfavorit",
      target: "Usia 4 - 14 Tahun",
      isSplit: true, // Flag untuk membagi tampilan weekdays/weekend
      weekdays: { days: "Senin, Rabu, Jumat", session: "4x Sesi / Bulan" },
      weekend: { days: "Sabtu & Minggu", session: "4x Sesi / Bulan" },
      features: ["Teknik Dasar Renang yang Benar & Aman", "Belajar dari nol (takut air)", "Durasi latihan 60 Menit"],
    },
    {
      id: 2,
      title: "Kelas Dewasa",
      sub: "(Adult Class)",
      desc: "Cocok untuk pemula yang belum bisa renang sama sekali atau untuk terapi kesehatan.",
      target: "Usia 15 - 21+ Tahun",
      isSplit: true,
      weekdays: { days: "Senin, Rabu, Jumat", session: "4x Sesi / Bulan" },
      weekend: { days: "Sabtu & Minggu", session: "4x Sesi / Bulan" },
      features: ["Bebas pilih gaya renang", "Latihan Intensif dengan Suasana Santai", "Durasi latihan 60 Menit"],
    },
    {
      id: 3,
      title: "Privat",
      sub: "(1-on-1 VIP)",
      desc: "Satu pelatih khusus untuk Anda. Progres jauh lebih cepat, intensif, dan personal.",
      badge: "Premium",
      target: "Semua Usia",
      isSplit: false, // Privat biasanya fleksibel tidak kaku terbagi
      flexibleSchedule: "Waktu & Hari Fleksibel (Bebas Atur)",
      system: "1 Murid : 1 Pelatih",
      features: ["Bebas pilih gaya renang", "Fokus koreksi teknik detail", "Jadwal diatur sesuai kesepakatan"],
    }
  ];

  const faqs = [
    { q: "Apakah kalau belum bisa renang sama sekali bisa ikut?", a: "Tentu saja! Mayoritas murid kami mulai dari nol (takut air/tidak bisa mengapung). Pelatih kami dilatih dengan pendekatan sabar untuk membangun kepercayaan diri Anda di dalam air." },
    { q: "Di mana lokasi latihan renangnya?", a: "Kami menggunakan Kolam Renang Bukit Jati di Gianyar sebagai lokasi utama latihan kelompok. Namun, jika Anda mengambil kelas privat, lokasi kolam bisa lebih fleksibel sesuai kesepakatan." },
    { q: "Apakah ada kelas trial (uji coba) gratis?", a: "Ada! Kami menyediakan 1x sesi trial gratis untuk melihat kecocokan metode pelatih dengan murid sebelum Anda memutuskan bergabung." }
  ];

  return (
  
  
    <div className="font-sans bg-[#f8fafc] text-slate-800 min-h-screen scroll-smooth overflow-x-hidden selection:bg-[#7cb5c8]/30 selection:text-slate-900">
      
    
<header className="fixed top-0 left-0 w-full bg-white border-b border-slate-200 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
  
    <a href="#home" className="flex items-center space-x-3">
      <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      <div className="leading-none">
        <span className="font-bold text-[#7cb5c8] text-lg block">TIRTA JATI SC</span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#d63384]">Di air kita jaya</span>
      </div>
    </a>

   
    <nav id="navbar-menu" className="hidden md:flex items-center space-x-8 font-semibold text-sm text-slate-700">
      <a href="#home" className="hover:text-[#d63384] transition-colors">Beranda</a>
      <a href="#paket" className="hover:text-[#d63384] transition-colors">Program</a>
      <a href="#lokasi" className="hover:text-[#d63384] transition-colors">Lokasi</a>
      <a href="#faq" className="hover:text-[#d63384] transition-colors">FAQ</a>
      <a 
  href="https://wa.me/6281238096091?text=Halo%20Coach%20Tirta%20Jati%20Swimming%20Club,%20saya%20ingin%20berkonsultasi%20mengenai%20kelas%20renang.%20Mohon%20infonya%20ya,%20terima%20kasih!" 
  className="bg-[#d63384] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#b02a6c] transition-all"
>
  Hubungi Coach
</a>
    </nav>

    <button 
      className="md:hidden p-2 text-slate-700"
      onClick={() => {
        const menu = document.getElementById('navbar-menu');
        // Ubah dari hidden menjadi flex vertikal saat di HP
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('absolute');
        menu.classList.toggle('top-full');
        menu.classList.toggle('left-0');
        menu.classList.toggle('w-full');
        menu.classList.toggle('bg-white');
        menu.classList.toggle('p-6');
        menu.classList.toggle('space-x-0');
        menu.classList.toggle('space-y-6');
      }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
      </svg>
    </button>
  </div>
</header>

<section 
  id="home" 
  /* min-h-screen: Memastikan section selalu minimal setinggi layar
     flex: Tetap gunakan flex untuk centering
     pt-24 md:pt-32: Padding atas yang lebih aman untuk desktop
     pb-16: Memberikan ruang napas di bawah agar tombol tidak mepet/hilang
  */
  className="relative w-full min-h-screen pt-24 md:pt-32 pb-16 flex flex-col items-center justify-center overflow-hidden"
>
  
  <div className="absolute inset-0 z-0">
    <img 
      src="/img/beranda.jpg" 
      alt="Jasa Belajar Renang" 
      className="w-full h-full object-cover object-center scale-[1.02]" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent"></div>
  </div>

<div className="relative z-10 w-full max-w-4xl px-6 text-center text-white flex flex-col items-center">


  <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] mb-8 tracking-tighter">
    Selamat Datang di <br/>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb5c8] to-[#99d1e3] italic">
      Tirta Jati Swimming Club.
    </span>
  </h1>
  {/* Deskripsi */}
  <p className="text-slate-300 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
   Kami menghadirkan standar pelatihan renang yang terstruktur dan personal. Dengan pendekatan yang mengutamakan keamanan dan kenyamanan, kami membimbing setiap siswa untuk menguasai teknik yang benar sekaligus membangun kepercayaan diri di air.
  </p>

 
  <a href="#paket" className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll untuk Program</span>
    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
  </a>
</div>
</section>
      
      <section id="keunggulan" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="text-[#d63384] font-semibold uppercase tracking-wider text-sm">Mengapa Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Keunggulan Tirta Jati SC</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Pelatih Berlisensi", desc: "Dipandu oleh tim pelatih berpengalaman, menguasai teknik kepelatihan dengan pendekatan aman dan profesional.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" /></svg> },
            { title: "Kurikulum Terstruktur", desc: "Materi belajar disesuaikan dengan kemampuan murid, mulai dari tahap adaptasi air hingga koreksi gaya lanjutan.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
            { title: "Prioritas Keamanan", desc: "Fokus utama kami adalah keselamatan murid selama berada di kolam dengan rasio pengawasan pelatih yang ideal.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
            { title: "Semua Tingkatan", desc: "Menerima murid dari berbagai level; mulai dari pemula hingga program intensif perbaikan teknik dan persiapan atlet.", icon: <svg className="w-7 h-7 text-[#7cb5c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
          ].map((item, index) => (
            <div 
              key={index} 
              onClick={() => {
                setClickedFeature(index);
                // Kembalikan ke normal setelah 300ms
                setTimeout(() => setClickedFeature(null), 300);
              }}
              className={`bg-white p-8 rounded-2xl flex flex-col group cursor-pointer transition-all duration-300 ease-out transform
                ${clickedFeature === index 
                  ? 'scale-105 shadow-[0_20px_40px_-15px_rgba(124,181,200,0.5)] border-2 border-[#7cb5c8] z-10' 
                  : 'border border-slate-100 hover:border-[#7cb5c8]/30 hover:-translate-y-2 hover:shadow-lg'
                }
              `}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                ${clickedFeature === index ? 'bg-[#7cb5c8] text-white' : 'bg-slate-50 group-hover:bg-[#7cb5c8]/10'}
              `}>
             
                {React.cloneElement(item.icon, { 
                  className: `w-7 h-7 transition-colors duration-300 ${clickedFeature === index ? 'text-white' : 'text-[#7cb5c8]'}` 
                })}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div> 
          ))}
        </div>
      </section>

     
      <section id="paket" className="bg-white py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="timbul-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out text-center mb-20">
            <span className="text-[#d63384] font-semibold uppercase tracking-widest text-sm">Pilihan Program</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">Pilih Kelas Sesuai Targetmu</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d63384] to-[#7cb5c8] mx-auto mt-6 rounded-full"></div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id || index} 
              
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group relative rounded-3xl p-1 transition-all duration-500 z-10 cursor-default
                  timbul-scroll opacity-0 translate-y-12 /* Animasi Scroll */
                  md:hover:scale-[1.03] md:hover:shadow-2xl md:hover:z-20 /* Hover untuk Laptop */
                  active:scale-[0.98] /* Efek ditekan untuk Mobile */
                  ${pkg.badge ? 'bg-gradient-to-b from-[#d63384] to-[#ff8da1]' : 'bg-slate-200 md:hover:bg-slate-300'}
                `}
              >
                
                {pkg.badge && (
                  <div className="absolute -top-5 inset-x-0 flex justify-center animate-bounce">
                    <span className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}

              
                <div className="bg-white rounded-[1.4rem] h-full p-8 flex flex-col relative overflow-hidden">
                  
                 
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 md:group-hover:scale-[2] opacity-[0.08] 
                    ${pkg.badge ? 'bg-[#d63384]' : 'bg-[#7cb5c8]'}
                  `}></div>

                 
                  <div className="relative z-10 mb-8">
                    <h3 className="text-2xl font-black text-slate-900 mb-1">{pkg.title}</h3>
                    <p className="text-[#7cb5c8] font-semibold text-sm mb-4">{pkg.sub}</p>
                    <p className="text-slate-500 text-sm leading-relaxed min-h-[3rem]">{pkg.desc}</p>
                  </div>

                
                  <div className="relative z-10 bg-slate-50 rounded-2xl p-5 mb-8 space-y-4 border border-slate-100 md:group-hover:bg-slate-100/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-xs font-semibold uppercase">Target</span>
                      <span className="text-slate-800 text-sm font-bold bg-white px-3 py-1 rounded-full shadow-sm">{pkg.target}</span>
                    </div>
                    
                    <div className="w-full h-px bg-slate-200"></div>
                    
                    <div className="text-left">
                      <span className="text-slate-400 text-xs font-semibold uppercase block mb-3">Jadwal Latihan</span>
                      
                      {pkg.isSplit ? (
                        <div className="space-y-4">
                     
                          <div>
                            <div className="flex justify-between items-center text-sm mb-1.5">
                              <span className="block text-slate-900 font-bold mb-1">Senin, Rabu atau Jumat</span>
                              <span className="font-bold text-[#d63384] text-xs bg-pink-50 px-2 py-1 rounded-md">{pkg.weekdays.session}</span>
                            </div>
                            <span className="text-slate-500 text-xs flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              15.30 - 17.00 WITA
                            </span>
                          </div>

                          <div className="w-full h-px bg-slate-200/60"></div>

                        
                          <div>
                            <div className="flex justify-between items-center text-sm mb-1.5">
                              <span className="block text-slate-900 font-bold mb-1">Sabtu - Minggu</span>
                              <span className="font-bold text-[#d63384] text-xs bg-pink-50 px-2 py-1 rounded-md">{pkg.weekend.session}</span>
                            </div>
                            <span className="text-slate-500 text-xs flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              15.30 - 17.00 WITA
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm font-medium text-slate-700 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
  <span className="block text-slate-900 font-bold mb-1">
    {pkg.flexibleSchedule}
  </span>
  <span className="text-xs text-slate-500 font-normal leading-tight">
    {pkg.system}
  </span>
</div>
                      )}
                    </div>
                  </div>

                 
                  <ul className="relative z-10 space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.badge ? 'text-[#d63384]' : 'text-[#7cb5c8]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-600 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                 
                  <a 
                    href={`https://wa.me/6281238096091?text=${encodeURIComponent(`Halo Coach Tirta Jati Swimming Club, saya tertarik dengan les renang ${pkg.title}. Boleh minta info lebih lanjut?`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`relative z-10 mt-auto w-full text-center font-bold py-4 rounded-xl text-sm transition-all duration-300 overflow-hidden group/btn
                      active:scale-95 /* Efek tombol tertekan di HP */
                      ${pkg.badge 
                        ? 'bg-[#d63384] text-white shadow-[0_10px_20px_-10px_rgba(214,51,132,0.6)] md:hover:bg-[#b02a6c]' 
                        : 'bg-slate-900 text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.6)] md:hover:bg-slate-800'
                      }
                    `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Daftar Sekarang
                      <svg className="w-4 h-4 md:group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                    <div className="absolute inset-0 h-full w-0 bg-white/10 transition-[width] duration-300 ease-out md:group-hover/btn:w-full hidden md:block"></div>
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-5xl mx-auto px-4 py-24 border-b border-slate-100">
        <div 
          onClick={() => {
            
            setClickedFeature("coach-card");
            setTimeout(() => setClickedFeature(null), 300);
          }}
          className={`bg-[#182a33] rounded-3xl overflow-hidden text-white flex flex-col md:flex-row items-stretch shadow-lg cursor-pointer transition-all duration-300 ease-out transform
            ${clickedFeature === "coach-card" 
              ? 'scale-[1.02] shadow-[0_20px_50px_-15px_rgba(24,42,51,0.5)] border-2 border-[#7cb5c8]' 
              : 'hover:shadow-2xl hover:-translate-y-1'
            }
          `}
        >
         
          <div 
            className="w-full md:w-2/5 relative min-h-[300px] bg-slate-800 group"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg("/img/coachimg1.jpg");
            }}
          >
            <img src="/img/coachimg1.jpg" alt="Coach Renang" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
           
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>

       
          <div className="p-10 md:p-14 w-full md:w-3/5 flex flex-col justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">
            <span className="text-[#7cb5c8] font-semibold uppercase tracking-widest text-xs mb-3 block">Mengenal Coach</span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Coach yang Supportif & Profesional</h3>
            <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              <p>Kami percaya bahwa setiap orang memiliki ritme belajar yang berbeda. Oleh karena itu, para pelatih kami dibekali dengan pendekatan psikologis untuk membimbing dengan sabar, telaten, and suportif.</p>
              <p>Hal ini memastikan anak-anak maupun orang dewasa bisa berkembang dan mengatasi ketakutan terhadap air dengan rasa percaya diri yang tinggi.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="lokasi" className="timbul-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out max-w-6xl mx-auto px-4 py-24">
        <div className="bg-white rounded-[3rem] border border-slate-200 p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row gap-8 items-center">
          
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
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#7cb5c8] rounded-full"></div> Kantin</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-[#7cb5c8] rounded-full"></div> Kamar Bilas Bersih</div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[350px] md:h-[450px] relative rounded-[2rem] overflow-hidden shadow-inner border-4 border-slate-50">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.628521292054!2d115.33377257501304!3d-8.535397291507538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2179abf515f03%3A0x147e606d5109e17e!2sTirta%20Jati%20Swimming%20Club!5e0!3m2!1sid!2sid!4v1782458350332!5m2!1sid!2sid" 
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

      
      <footer className="bg-slate-50 border-t border-slate-100 text-slate-500 pt-24 pb-12 px-6 mt-12 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-200 pb-16 mb-12">
          <div>
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Ayo Bergabung</h2>
            <p className="font-light max-w-sm leading-relaxed mb-8">Ambil langkah pertama untuk belajar berenang dengan percaya diri bersama pelatih profesional kami.</p>
            <a 
  href={`https://wa.me/6281238096091?text=${encodeURIComponent("Halo Coach Tirta Jati Swimming Club, saya ingin berkonsultasi mengenai kelas renang. Mohon infonya ya, terima kasih!")}`}
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-block bg-[#d63384] text-white px-8 py-3 rounded-full font-medium hover:bg-[#b02a6c] transition-colors"
>
  Chat WhatsApp
</a>
          </div>
          
          <div className="flex flex-col md:items-end justify-end space-y-4">
            <p className="text-xl font-serif text-slate-900 italic">Tirta Jati Swimming Club</p>
            <p className="font-light text-sm">Gianyar, Bali, Indonesia.</p>
            
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
          <p className="text-xs">Created with <span className="text-[#d63384]"></span> by swim coach @buddz</p>
        </div>
      </footer>
      
     
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer opacity-100 transition-opacity duration-300"
          onClick={() => setSelectedImg(null)}
        >
         
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all focus:outline-none"
            onClick={() => setSelectedImg(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
         
          <img 
            src={selectedImg} 
            alt="Dokumentasi Zoom" 
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl cursor-default object-contain" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

    </div>
  );
}

export default App;
