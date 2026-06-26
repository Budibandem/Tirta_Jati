import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  
  // STATE UNTUK TOGGLE WEEKDAYS / WEEKEND
  const [scheduleMode, setScheduleMode] = useState('weekdays'); 

  const packages = [
    {
      id: 1,
      title: "Kelas Anak-Anak (Kids)",
      desc: "Melatih keberanian di air, teknik mengapung, pernapasan, hingga menguasai gaya dasar.",
      features: ["Mulai Usia 4 Tahun", "Pendekatan Sabar & Ceria", "Durasi 60 Menit / Sesi"],
      schedules: {
        weekdays: { 
          name: "Weekdays", 
          days: "Senin, Rabu, atau Jumat", 
          priceLabel: "Harga Reguler",
          highlight: "Lebih Hemat"
        },
        weekend: { 
          name: "Weekend", 
          days: "Sabtu atau Minggu", 
          priceLabel: "Harga Weekend",
          highlight: "Kuota Terbatas"
        }
      },
      badge: "Terfavorit"
    },
    {
      id: 2,
      title: "Kelas Dewasa (Adult)",
      desc: "Cocok untuk pemula yang belum bisa renang sama sekali atau untuk terapi kesehatan/stamina.",
      features: ["Usia 15 - 35+ Tahun", "Bebas Pilih Fokus Gaya", "Metode Cepat & Terukur", "Durasi 60 Menit / Sesi"],
      schedules: {
        weekdays: { 
          name: "Weekdays", 
          days: "Senin, Rabu, atau Jumat", 
          priceLabel: "Harga Reguler",
          highlight: "Lebih Santai"
        },
        weekend: { 
          name: "Weekend", 
          days: "Sabtu atau Minggu", 
          priceLabel: "Harga Weekend",
          highlight: "Cocok Untuk Pekerja"
        }
      }
    },
    {
      id: 3,
      title: "Privat (1-on-1)",
      desc: "Satu pelatih khusus memegang satu murid. Progres belajar jauh lebih cepat dan intensif.",
      features: ["Semua Tingkat Usia", "Bebas Pilih Fokus Gaya", "Selesai Lebih Cepat"],
      schedules: {
        flexible: {
          name: "Fleksibel",
          days: "Jadwal Bebas Sesuai Kesepakatan",
          priceLabel: "Harga Privat",
          highlight: "Paling Eksklusif"
        }
      },
      badge: "Premium"
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

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => document.querySelectorAll('.fade-in-up').forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="font-sans bg-[#F9F7F3] text-[#1A2E35] min-h-screen scroll-smooth selection:bg-[#D96C5A] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR: ELEGANT & STICKY */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F7F3]/80 backdrop-blur-lg border-b border-[#E6E2D6] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* PENAMBAHAN LOGO */}
            <img src="/logo.png" alt="Logo Tirta Jati" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-serif italic font-bold text-2xl tracking-wide text-[#0A2533]">
              Tirta Jati SC.
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase text-[#546870]">
            <a href="#keunggulan" className="hover:text-[#D96C5A] transition-colors">Kualitas</a>
            <a href="#paket" className="hover:text-[#D96C5A] transition-colors">Program</a>
            <a href="#lokasi" className="hover:text-[#D96C5A] transition-colors">Lokasi</a>
          </div>

          <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-[#0A2533] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#D96C5A] transition-all duration-500 shadow-lg shadow-[#0A2533]/20">
            Hubungi
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#0A2533]">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}></path></svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-[#F9F7F3] border-b border-[#E6E2D6] p-6 flex flex-col space-y-4 shadow-xl">
            {['Keunggulan', 'Paket', 'Lokasi', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#1A2E35]">
                {item}
              </a>
            ))}
            <a href="https://wa.me/6281238096091" onClick={() => setIsMenuOpen(false)} className="bg-[#0A2533] text-white px-6 py-4 rounded-xl text-center font-medium mt-4">
              Hubungi Admin
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION (Text Asli, Visual Premium Resort) */}
      <header id="home" className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center min-h-[95vh] text-center overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#E3E8E6] rounded-full filter blur-[100px] opacity-60 -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#F2E5DD] rounded-full filter blur-[80px] opacity-60 -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto z-10 fade-in-up opacity-0 translate-y-12 transition-all duration-1000">
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-medium leading-[1.1] text-[#0A2533] mb-8">
            Belajar Renang Jadi Mudah, <br className="hidden md:block"/>
            <span className="italic text-[#D96C5A]">Aman & Menyenangkan!</span>
          </h1>
          <p className="text-lg md:text-xl text-[#546870] max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Metode kepelatihan terstruktur untuk segala usia (Anak-Anak s/d Dewasa). Dipandu langsung oleh pelatih profesional berlisensi untuk membantu Anda menguasai teknik renang dengan cepat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#paket" className="w-full sm:w-auto bg-[#0A2533] text-white font-medium px-10 py-4 rounded-full hover:bg-[#1A2E35] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Jelajahi Program
            </a>
            <a href="https://wa.me/6281238096091" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-[#0A2533] font-medium px-10 py-4 rounded-full border border-[#0A2533]/20 hover:border-[#0A2533] hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D96C5A] animate-pulse"></span>
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </header>

      {/* KEUNGGULAN (Arched Cards) */}
      <section id="keunggulan" className="py-24 px-6 bg-[#0A2533] text-[#F9F7F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-up opacity-0 translate-y-12 transition-all duration-700">
            <h2 className="text-sm tracking-[0.3em] uppercase text-[#C3D3D4] font-semibold mb-4">Filosofi Kami</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Kualitas Tanpa Kompromi.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Pelatih Lisensi", desc: "Dipandu profesional berlisensi, mengutamakan kesabaran dan dukungan mental." },
              { title: "Kurikulum Terukur", desc: "Materi bertahap, disesuaikan dengan kemampuan fisik dan keberanian tiap individu." },
              { title: "Fokus Keamanan", desc: "Protokol keselamatan ketat dengan rasio ideal antara pelatih dan peserta." },
              { title: "Semua Usia", desc: "Mulai dari balita (pengenalan air) hingga dewasa dan persiapan atlet daerah." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-t-full rounded-b-3xl text-center flex flex-col items-center pt-16 hover:-translate-y-4 hover:bg-white/10 transition-all duration-500 fade-in-up opacity-0 translate-y-12" style={{transitionDelay: `${idx * 150}ms`}}>
                <div className="w-16 h-16 bg-[#D96C5A] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#D96C5A]/30 text-2xl">
                  💧
                </div>
                <h4 className="text-xl font-serif mb-4">{item.title}</h4>
                <p className="text-[#C3D3D4] text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM KELAS (DENGAN INTERACTIVE TOGGLE WEEKDAY/WEEKEND) */}
      <section id="paket" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up opacity-0 translate-y-12 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A2533] mb-6">Pilihan Program.</h2>
          <p className="text-[#546870] text-lg max-w-xl mx-auto mb-10">Pilih program yang sesuai. Harga dan jadwal dapat disesuaikan dengan ketersediaan waktu Anda.</p>
          
          {/* THE MAGIC TOGGLE SWITCH */}
          <div className="inline-flex bg-[#EAE7DF] p-1.5 rounded-full shadow-inner max-w-full overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setScheduleMode('weekdays')}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${scheduleMode === 'weekdays' ? 'bg-white text-[#0A2533] shadow-md' : 'text-[#84949B] hover:text-[#0A2533]'}`}
            >
              Jadwal Weekdays
            </button>
            <button 
              onClick={() => setScheduleMode('weekend')}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${scheduleMode === 'weekend' ? 'bg-[#0A2533] text-white shadow-md' : 'text-[#84949B] hover:text-[#0A2533]'}`}
            >
              Jadwal Weekend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            // Logika untuk menentukan data mana yang tampil berdasarkan toggle
            const scheduleData = pkg.schedules.flexible ? pkg.schedules.flexible : pkg.schedules[scheduleMode];
            
            return (
              <div key={pkg.id} className="bg-white rounded-[2.5rem] p-10 border border-[#EAE7DF] shadow-sm hover:shadow-2xl hover:shadow-[#0A2533]/5 transition-all duration-500 relative flex flex-col fade-in-up opacity-0 translate-y-12" style={{transitionDelay: `${idx * 150}ms`}}>
                {pkg.badge && (
                  <span className="absolute -top-4 left-10 bg-[#D96C5A] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-md">
                    {pkg.badge}
                  </span>
                )}
                
                <h3 className="text-3xl font-serif text-[#0A2533] mb-4">{pkg.title}</h3>
                <p className="text-[#546870] font-light leading-relaxed mb-8 h-20">{pkg.desc}</p>
                
                {/* DYNAMIC PRICING BOX */}
                <div className={`rounded-3xl p-6 mb-8 transition-colors duration-500 ${pkg.schedules.flexible ? 'bg-[#F2E5DD]/50' : (scheduleMode === 'weekdays' ? 'bg-[#F9F7F3]' : 'bg-[#0A2533] text-white')}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-bold tracking-widest uppercase ${pkg.schedules.flexible ? 'text-[#D96C5A]' : (scheduleMode === 'weekdays' ? 'text-[#D96C5A]' : 'text-[#C3D3D4]')}`}>
                      {scheduleData.name}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${pkg.schedules.flexible ? 'bg-white text-[#D96C5A]' : (scheduleMode === 'weekdays' ? 'bg-white text-[#D96C5A]' : 'bg-white/20 text-white')}`}>
                      {scheduleData.highlight}
                    </span>
                  </div>
                  <div className={`font-medium text-lg mb-1 ${!pkg.schedules.flexible && scheduleMode === 'weekend' ? 'text-white' : 'text-[#0A2533]'}`}>
                    {scheduleData.days}
                  </div>
                  <div className={`text-sm opacity-80 ${!pkg.schedules.flexible && scheduleMode === 'weekend' ? 'text-white' : 'text-[#546870]'}`}>
                    {scheduleData.priceLabel} — (4x Pertemuan)
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#8D9F87] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-[#1A2E35] font-medium text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href={`https://wa.me/6281238096091?text=Halo%20Admin,%20saya%20mau%20tanya%20${pkg.title}%20untuk%20jadwal%20${scheduleData.name}`} target="_blank" rel="noopener noreferrer" className={`w-full block text-center py-4 rounded-full font-semibold transition-all duration-300 ${pkg.schedules.flexible ? 'bg-[#0A2533] text-white hover:bg-[#1A2E35]' : 'border-2 border-[#0A2533] text-[#0A2533] hover:bg-[#0A2533] hover:text-white'}`}>
                  Cek Harga & Slot
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* VISUAL BREAK / IMAGE BANNER */}
      <section className="py-12 px-6 max-w-7xl mx-auto fade-in-up opacity-0 translate-y-12 transition-all duration-700">
        <div className="relative w-full h-[60vh] rounded-[3rem] overflow-hidden group cursor-pointer" onClick={() => setSelectedImg("/img/img1.jpg")}>
          <img src="/img/img1.jpg" alt="Swim Club" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-[#0A2533]/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Menyatu dengan Air.</h2>
            <p className="text-lg font-light tracking-wide opacity-90 max-w-md">Menghilangkan phobia dan membangun insting alami tubuh.</p>
          </div>
        </div>
      </section>

      {/* LOKASI (Clean & Organic Style) */}
      <section id="lokasi" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-[#EAE7DF] shadow-sm flex flex-col lg:flex-row gap-16 fade-in-up opacity-0 translate-y-12 transition-all duration-700">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-sm tracking-[0.2em] uppercase text-[#D96C5A] font-semibold mb-4">Lokasi Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0A2533] mb-6">Kolam Renang Bukit Jati.</h2>
            <p className="text-[#546870] text-lg leading-relaxed mb-8">
              Terletak di lingkungan yang tenang di Kabupaten Gianyar. Fasilitas kolam standar dengan sirkulasi air yang baik dan kebersihan yang selalu terjaga.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F9F7F3] rounded-full flex items-center justify-center text-xl">📍</div>
                <p className="text-[#1A2E35] font-medium text-sm md:text-base">Jl. Raya Bukit Jati, Samplangan, Gianyar, Bali 80512</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F9F7F3] rounded-full flex items-center justify-center text-xl">🚗</div>
                <p className="text-[#1A2E35] font-medium text-sm md:text-base">Area parkir & aman</p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/XKBXLgm1ffGmpRwH9" target="_blank" rel="noopener noreferrer" className="self-start text-[#0A2533] font-bold border-b-2 border-[#D96C5A] pb-1 hover:text-[#D96C5A] transition-colors">
              Buka di Google Maps →
            </a>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto rounded-[2rem] overflow-hidden">
            {/* PERBAIKAN LEBAR IFRAME RESPONSIVE */}
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

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto fade-in-up opacity-0 translate-y-12 transition-all duration-700">
        <h2 className="text-4xl font-serif text-center text-[#0A2533] mb-12">Pertanyaan Umum.</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="bg-white rounded-2xl border border-[#EAE7DF] overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-6 md:p-8 font-semibold text-[#0A2533] text-lg flex justify-between items-center focus:outline-none"
                >
                  <span className="pr-8">{faq.q}</span>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F7F3] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#546870] leading-relaxed px-6 md:px-8 pb-8 font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A2533] text-[#C3D3D4] pt-24 pb-12 px-6 mt-12 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10 pb-16 mb-12">
          <div>
            <h2 className="text-4xl font-serif text-white mb-6">Mulai perjalanan Anda.</h2>
            <p className="font-light max-w-sm leading-relaxed mb-8">Ambil langkah pertama untuk menguasai air dengan percaya diri bersama pelatih profesional kami.</p>
            <a href="https://wa.me/6281238096091" className="inline-block bg-[#D96C5A] text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#0A2533] transition-colors">
              Chat WhatsApp
            </a>
          </div>
          <div className="flex flex-col md:items-end justify-end space-y-4">
            <p className="text-xl font-serif text-white italic">Tirta Jati Swimming Club</p>
            <p className="font-light text-sm">Gianyar, Bali, Indonesia.</p>
            <a href="https://instagram.com/tirta.jati.swimming.club" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
              Instagram @tirta.jati.swimming.club
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-sm font-light opacity-60 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Tirta Jati SC.</p>
          <p className="mt-2 md:mt-0">Created with ❤ by Swim Coach IT @buddz.</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <div className="absolute inset-0 bg-[#0A2533]/90 backdrop-blur-sm"></div>
          <img src={selectedImg} alt="Preview" className="relative z-10 max-w-full max-h-[85vh] rounded-[2rem] shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors" onClick={() => setSelectedImg(null)}>
            ✕
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
