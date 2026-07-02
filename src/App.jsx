import React, { useState, useEffect } from 'react';

function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [clickedFeature, setClickedFeature] = useState(null);


  
const keywords = [
  "Teknik yang Tepat", 
  "Kepercayaan Diri", 
  "Kenyamanan di Air", 
  "Metode yang Aman"
];
const [keywordIndex, setKeywordIndex] = React.useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setKeywordIndex((prev) => (prev + 1) % keywords.length);
  }, 2500);
  return () => clearInterval(interval);
}, []);


// State untuk mengontrol mode tampilan seluruh kartu (Ringkasan vs Kurikulum)
const [viewMode, setViewMode] = React.useState('ringkasan'); 

const programs = [
  {
    id: 1,
    number: "01",
    title: "Reguler Pemula",
    target: "Untuk Anak-anak hingga Dewasa",
    shortDesc: "Jalur terstruktur bagi pemula. Fokus kami adalah membangun fondasi yang kuat-mulai dari adaptasi air, melatih pernapasan, hingga memastikan Anda menguasai teknik renang dengan benar.",
    fullKurikulum: [
      "Metode adaptasi & hilangkan trauma air",
      "Latihan pernapasan & mengapung mandiri",
      "Teknik kayuhan kaki & tangan yang benar",
      "Penguasaan gaya dada & gaya bebas dasar"
    ],
    themeColor: "border-pink-100 group-hover:border-[#d63384]/30",
    badgeBg: "bg-blue-50 text-[#7cb5c8]"
  },
  {
    id: 2,
    number: "02",
    title: "Lanjutan & Prestasi",
    target: "Khusus Bakat Muda & Calon Atlet",
    shortDesc: "Tingkatkan potensi Anda ke level berikutnya. Program ini dirancang bagi perenang yang ingin menyempurnakan teknik, menambah kecepatan, serta membangun ketahanan fisik agar siap bersaing di jalur kompetitif.",
    fullKurikulum: [
      "Koreksi detail mekanika 4 gaya renang",
      "Latihan fisik intensif (Stamina & Speed)",
      "Teknik meluncur (Start) & pembalikan (Turn)",
      "Evaluasi catatan waktu (Time Trial) rutin"
    ],
    themeColor: "border-blue-100 group-hover:border-[#7cb5c8]/40",
    badgeBg: "bg-blue-50 text-[#7cb5c8]"
  },
  {
    id: 3,
    number: "03",
    title: "Privat",
    target: "1 Pelatih khusus untuk 1 Siswa (Semua Umur)",
    shortDesc: "Solusi terbaik untuk hasil yang cepat dan privat penuh. program disesuaikan 100% dengan kemampuan Anda, serta jadwal latihan yang sepenuhnya fleksibel mengikuti waktu luang Anda.",
    fullKurikulum: [
      "Pendampingan privat 1-on-1 tanpa gangguan",
      "Bebas pilih hari & jam latihan sendiri",
      "Materi adaptif langsung ke kelemahan siswa",
      "Progres belajar dijamin 2x lebih cepat"
    ],
    themeColor: "border-slate-200 group-hover:border-slate-900/20",
    badgeBg: "bg-slate-100 text-slate-800"
  }
];

  const faqs = [
    { q: "Apakah kalau belum bisa renang sama sekali bisa ikut?", a: "Tentu saja! Mayoritas murid kami mulai dari nol (takut air/tidak bisa mengapung). Pelatih kami dilatih dengan pendekatan sabar untuk membangun kepercayaan diri Anda di dalam air." },
    { q: "Di mana lokasi latihan renangnya?", a: "Kami menggunakan Kolam Renang Bukit Jati di Gianyar sebagai lokasi utama latihan kelompok. Namun, jika Anda mengambil kelas privat, lokasi kolam bisa lebih fleksibel sesuai kesepakatan." },
    { q: "Apakah ada kelas trial (uji coba) gratis?", a: "Ada! Kami menyediakan 1x sesi trial gratis untuk melihat kecocokan metode pelatih dengan murid sebelum Anda memutuskan bergabung." }
  ];

  return (

    
  
    // 1. Hapus "pt-20" di sini, biarkan konten dimulai dari atas
    <div className="font-sans bg-[#f8fafc] text-slate-800 min-h-screen scroll-smooth overflow-x-hidden selection:bg-[#7cb5c8]/30 selection:text-slate-900">
      
    {/* NAVBAR UTAMA (Update Warna & Sinkronisasi) */}
<header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
    {/* Logo & Brand (Disesuaikan agar lebih selaras) */}
<a href="#home" className="flex items-center space-x-3">
  <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
  <div className="leading-none text-left">
    <span className="font-black text-[#0077b6] text-lg block tracking-tight">TIRTA JATI SC</span>
  </div>
</a>

    {/* Menu (Desktop) */}
    <nav id="navbar-menu" className="hidden md:flex items-center space-x-8 font-bold text-xs uppercase tracking-widest text-slate-600">
      <a href="#home" className="hover:text-[#0077b6] transition-colors">Beranda</a>
      <a href="#paket" className="hover:text-[#0077b6] transition-colors">Program</a>
      <a href="#faq" className="hover:text-[#0077b6] transition-colors">FAQ</a>
      
      {/* Tombol Hubungi Coach (Diselaraskan dengan gaya tombol beranda) */}
      <a 
        href="https://wa.me/6281238096091?text=Halo%20Coach%20Tirta%20Jati,%20saya%20ingin%20berkonsultasi%20mengenai%20kelas%20renang." 
        className="bg-[#0077b6] text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#005f8f] transition-all shadow-lg shadow-[#0077b6]/20"
      >
        Hubungi Coach
      </a>
    </nav>

    {/* Hamburger Button */}
    <button 
      className="md:hidden p-2 text-[#0077b6]"
      onClick={() => {
        const menu = document.getElementById('navbar-menu');
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
        menu.classList.toggle('shadow-xl');
      }}
    >
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
      </svg>
    </button>
  </div>
</header>
{/* =========================================
    HERO SECTION (2026 ULTRA-SPORTY LIGHT PREMIUM THEME)
========================================= */}
<section id="home" className="relative w-full min-h-screen flex items-center py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
    
    {/* Kolom Teks */}
    <div className="lg:col-span-7 space-y-6">
      {/* Judul utama diturunkan sedikit untuk mobile (text-3xl) */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
        <span className="text-sm md:text-lg font-medium text-slate-500 block mb-2 uppercase tracking-[0.1em]">
          Selamat Datang di Tirta Jati SC
        </span>
        <span className="block text-slate-800">MULAI LANGKAHMU <br className="hidden md:block" /> DENGAN</span>
        <span 
          key={keywordIndex}
          className="block italic text-[#0077b6] animate-[fadeInUp_0.4s_ease-out]"
        >
          {keywords[keywordIndex]}
        </span>
      </h1>

      {/* Deskripsi diperkecil agar tidak memenuhi layar HP */}
      <p className="text-sm md:text-base text-slate-600 max-w-lg leading-relaxed border-l-2 border-blue-500 pl-4 md:pl-6">
        Tirta Jati Swimming Club menghadirkan sistem pelatihan renang profesional, terprogram, dan aman untuk segala tingkat usia dan keahlian siswa.
      </p>

      <div className="flex gap-4 pt-2">
        <a href="#paket" className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-[#0077b6] transition-all text-sm">Daftar Sekarang</a>
      </div>
    </div>

    {/* Kolom Visual */}
    <div className="lg:col-span-5 relative">
      <div className="relative z-10 w-full h-[350px] md:h-[500px] overflow-hidden rounded-[2rem] shadow-xl">
        <img src="/img/beranda.jpg" alt="Swim" className="w-full h-full object-cover" />
        
        {/* Card Lokasi Minimalis */}
        <a 
  href="https://maps.app.goo.gl/ayNTCDePa7tD66wv9" 
  target="_blank" 
  rel="noopener noreferrer"
  // Menambahkan class 'animate-breathe' agar selalu bergerak halus
  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl flex items-center gap-3 border border-white/50 shadow-lg animate-breathe"
>
  <div className="flex-shrink-0">
    <svg className="w-6 h-6 md:w-8 md:h-8 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  </div>
  
  <div className="flex-grow">
    <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-slate-500">Lokasi Utama</p>
    <p className="text-sm md:text-base font-bold text-slate-900 leading-tight">Kolam Renang Bukit Jati, Gianyar</p>
  </div>
  
  <div className="flex-shrink-0">
    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px]">
      →
    </div>
  </div>
</a>
      </div>
    </div>
  </div>
</section>
      {/* =========================================
    KEUNGGULAN SECTION (NARRATIVE FLOW)
========================================= */}
<section className="bg-[#f8fafc] py-24 px-6 overflow-hidden">
  <div className="max-w-3xl mx-auto text-center">
    
    {/* Headline dengan Animasi Fade-In */}
    <span className="inline-block text-[#0077b6] font-black uppercase tracking-[0.3em] text-[10px] mb-4 animate-[fadeIn_1s_ease-out]">
      Tirta Jati Swimming Club
    </span>
    
    <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] leading-tight mb-12 animate-[fadeIn_1.2s_ease-out]">
      Lebih dari sekadar belajar renang, <br />
      kami membangun kepercayaan diri.
    </h2>

    {/* Konten Narasi (Digabung) */}
    <div className="relative group p-8 md:p-12 bg-white rounded-[2rem] shadow-sm border border-slate-100 transition-all duration-700 hover:shadow-2xl hover:shadow-[#0077b6]/5">
      
      {/* Animasi Garis Samping */}
      <div className="absolute left-0 top-10 bottom-10 w-1 bg-gradient-to-b from-[#0077b6] to-transparent rounded-full opacity-50"></div>
      
      <p className="text-base md:text-lg text-slate-600 leading-relaxed md:leading-loose">
  Mari belajar berenang bersama Tirta Jati SC melalui bimbingan pelatih berlisensi serta program yang disesuaikan dengan kebutuhan Anda. Kami memastikan setiap sesi latihan berlangsung aman, sehingga siapa pun bisa belajar dengan rasa tenang dan percaya diri. Fokus kami adalah menciptakan ruang latihan yang menyenangkan bagi semua orang, dari pemula hingga atlet yang sedang mengejar prestasi.
</p>

      {/* Dekorasi Animasi */}
      <div className="mt-10 flex justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse delay-300"></div>
        <div className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse delay-500"></div>
      </div>
    </div>
  </div>

  {/* CSS Animasi (Tambahkan ini di file CSS atau di dalam tag <style>) */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
</section>

    {/* =========================================
    PROGRAM KELAS (EDITORIAL DASHBOARD WITH VIEW SWITCHER 2026)
========================================= */}
<section id="paket" className="bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
        Program Pelatihan Renang
      </h2>
      <p className="text-slate-500 text-sm md:text-base mt-3 max-w-xl mx-auto font-light">
        Sistem kelas yang fleksibel dan personal, disesuaikan dengan setiap tingkat kemampuan.
      </p>
    </div>

    {/* JAVASCRIPT SWITCHER: Tombol Pengubah Mode Tampilan */}
    <div className="flex justify-center mb-12">
      <div className="bg-slate-200/70 p-1 rounded-xl inline-flex border border-slate-200/30">
        <button
          onClick={() => setViewMode('ringkasan')}
          className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 active:scale-95
            ${viewMode === 'ringkasan' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'}`}
        >
          Pilihan Kelas
        </button>
        <button
          onClick={() => setViewMode('kurikulum')}
          className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 active:scale-95
            ${viewMode === 'kurikulum' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'}`}
        >
          Lihat Detail Materi
        </button>
      </div>
    </div>

    {/* Grid Utama: Kolom Tunggal di HP, 3 Kolom di Laptop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
      {programs.map((pkg) => (
        <div 
          key={pkg.id}
          className={`group bg-white rounded-[2rem] p-6 md:p-8 border transition-all duration-500 flex flex-col relative overflow-hidden
                     hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.04)] hover:-translate-y-1 ${pkg.themeColor}`}
        >
          {/* Angka Dekoratif Besar di Background (Ciri UI Premium Tanpa Gambar) */}
          <div className="absolute top-4 right-6 text-7xl md:text-8xl font-black text-slate-100/70 select-none tracking-tighter transition-colors group-hover:text-slate-100">
            {pkg.number}
          </div>

          {/* Konten Kartu */}
          <div className="relative z-10 flex flex-col flex-grow">
            
            {/* Label Sasaran / Target */}
            <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md self-start mb-4 ${pkg.badgeBg}`}>
              {pkg.target}
            </span>

            {/* Judul Kelas */}
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">
              {pkg.title}
            </h3>

            {/* Area Transisi JavaScript (Berubah Berdasarkan Tombol di Atas) */}
            <div className="flex-grow min-h-[140px] md:min-h-[160px]">
              {viewMode === 'ringkasan' ? (
                // TAMPILAN RINGKASAN
                <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                  {pkg.shortDesc}
                </p>
              ) : (
                // TAMPILAN DETAIL MATERI / KURIKULUM
                <ul className="space-y-3 animate-[fadeIn_0.3s_ease-out]">
                  {pkg.fullKurikulum.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-slate-900 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 font-medium text-xs md:text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Tombol CTA Dengan Respons Sentuh Jari di HP */}
            <div className="mt-8 pt-6 border-t border-slate-50">
              <a 
                href={`https://wa.me/6281238096091?text=${encodeURIComponent(`Halo Coach Tirta Jati, saya mau tanya pendaftaran untuk kelas ${pkg.title} (${pkg.target}).`)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full flex items-center justify-between bg-slate-900 text-white font-bold py-3.5 px-5 rounded-xl text-sm transition-all duration-300
                           
                           /* Animasi Touch Mobile (Mengecil & Berubah Warna Lembut) */
                           active:scale-[0.97] active:bg-slate-800
                           
                           /* Animasi Hover Laptop */
                           md:hover:bg-slate-800 md:hover:shadow-md"
              >
                <span>Tanya Jadwal & Biaya</span>
                <svg className="w-4 h-4 transition-transform duration-300 active:translate-x-1 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
    {/* =========================================
    COACH SECTION (MIDNIGHT SLATE - COHESIVE BLACK)
========================================= */}
<section className="max-w-5xl mx-auto px-6 py-24">
  <div 
    className="group bg-[#0f172a] rounded-[2.5rem] overflow-hidden text-white flex flex-col md:flex-row items-stretch shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#0f172a]/20"
  >
    
    {/* Bagian Foto */}
    <div 
      className="w-full md:w-2/5 relative min-h-[300px] bg-[#1e293b]"
      onClick={() => setSelectedImg("/img/coachimg1.jpg")}
    >
      <img 
        src="/img/coachimg1.jpg" 
        alt="Coach Renang" 
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
      />
      {/* Overlay memberikan kesan gelap yang konsisten */}
      <div className="absolute inset-0 bg-[#0f172a]/20 group-hover:opacity-0 transition-opacity"></div>
    </div>

    {/* Bagian Teks */}
    <div className="p-10 md:p-14 w-full md:w-3/5 flex flex-col justify-center bg-[#0f172a]">
      <span className="text-[#94a3b8] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
        Mengenal Coach
      </span>
      <h3 className="text-3xl font-black mb-8 leading-tight text-white">
        Supportif, Profesional, & Berpengalaman
      </h3>
      <div className="space-y-6 text-[#cbd5e1] font-light text-sm sm:text-base leading-relaxed">
        <p>
          Kami percaya setiap orang memiliki ritme belajar yang berbeda. Oleh karena itu, para pelatih kami dibekali dengan pendekatan psikologis untuk membimbing dengan sabar, telaten, dan suportif.
        </p>
        <p>
          Hal ini memastikan anak-anak maupun orang dewasa bisa berkembang dan mengatasi ketakutan terhadap air dengan rasa percaya diri yang tinggi.
        </p>
      </div>

      {/* Aksen garis putih/biru muda */}
      <div className="mt-10">
        <div className="w-12 h-1 bg-[#38bdf8] rounded-full"></div>
      </div>
    </div>
  </div>
</section>
      

      {/* =========================================
    GALERI SECTION (MIDNIGHT SLATE THEME)
========================================= */}
<section id="galeri" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-100">
  <div className="text-center mb-16">
    {/* Mengganti warna Pink menjadi biru muda yang kontras dengan tema gelap */}
    <span className="text-[#38bdf8] font-black uppercase tracking-[0.3em] text-[10px]">Dokumentasi</span>
    <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-3">Momen Latihan</h2>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    {/* Instagram Reel Container */}
    <div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-square border border-slate-200">
      <iframe 
        src="https://www.instagram.com/reel/DDXIRIcys21/embed" 
        className="w-full h-full border-none" 
        allowTransparency={true} 
        allow="encrypted-media" 
        title="Instagram Video"
      ></iframe>
    </div>

    {/* Foto Grid */}
    {["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"].map((img, idx) => (
      <div 
        key={idx} 
        className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-square cursor-pointer group border border-slate-200" 
        onClick={() => setSelectedImg(img)}
      >
        <img 
          src={img} 
          alt={`Dokumentasi Latihan ${idx + 1}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Hover Overlay dengan warna Midnight Slate */}
        <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/30 transition-all duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
     {/* =========================================
    FAQ SECTION
========================================= */}
<section id="faq" className="max-w-3xl mx-auto py-24 px-4 border-t border-slate-100">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold text-slate-900">Pertanyaan Umum (FAQ)</h2>
    <p className="text-slate-500 text-sm mt-4 font-light">Hal-hal yang sering ditanyakan sebelum memulai pendaftaran latihan.</p>
  </div>
  
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
        <button 
          onClick={() => setActiveFaq(activeFaq === index ? null : index)} 
          className="w-full text-left px-6 py-5 font-medium text-slate-800 flex justify-between items-center focus:outline-none"
        >
          <span className="pr-4">{faq.q}</span>
          
          {/* Warna diubah menjadi biru netral sesuai tema website */}
          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-slate-100 text-slate-900' : 'bg-transparent text-slate-400'}`}>
            <svg 
              className={`w-4 h-4 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
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
{/* =========================================
    FOOTER (MIDNIGHT SLATE THEME)
========================================= */}
<footer className="bg-[#0f172a] border-t border-slate-800 text-slate-400 pt-24 pb-12 px-6 mt-12 rounded-t-[3rem]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-800 pb-16 mb-12">
    <div>
      <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Ayo Bergabung</h2>
      <p className="font-light max-w-sm leading-relaxed mb-8 text-slate-300">
        Ambil langkah pertama untuk belajar berenang dengan percaya diri bersama pelatih profesional kami.
      </p>
      <a 
  href={`https://wa.me/6281238096091?text=${encodeURIComponent("Halo Coach Tirta Jati Swimming Club, saya ingin berkonsultasi mengenai kelas renang. Mohon infonya ya, terima kasih!")}`}
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-flex items-center gap-4 group transition-all hover:opacity-80"
>
  {/* Ikon WhatsApp besar */}
  <svg className="w-10 h-10" fill="#25D366" viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.328 0-6.031 2.703-6.031 6.031 0 1.063.281 2.078.797 2.953l-.844 3.141 3.234-.844c.844.469 1.828.703 2.813.703 3.328 0 6.031-2.703 6.031-6.031 0-3.328-2.703-6.031-6.031-6.031zm0 10.969c-.891 0-1.766-.234-2.531-.672l-.188-.109-1.953.5.516-1.875-.125-.203c-.5-0.797-.766-1.719-.766-2.656 0-2.813 2.297-5.109 5.109-5.109s5.109 2.297 5.109 5.109c0 2.813-2.297 5.109-5.109 5.109zM15.438 13.938c-.141-.078-.844-.422-.969-.469s-.219-.078-.313.078c-.094.156-.375.469-.453.563-.078.094-.156.109-.313.031s-.672-.25-1.281-.797c-.469-.422-.781-.938-.875-1.094s-.094-.234-.047-.328c.047-.063.094-.156.141-.234.047-.078.063-.141.094-.219.031-.078.016-.141-.016-.203s-.313-.75-.438-1.016c-.125-.266-.25-.234-.313-.234h-.281c-.094 0-.25.031-.375.156s-.484.469-.484 1.156c0 .688.5 1.344.563 1.438s.938 1.438 2.266 2.016c.313.141.563.219.75.281.313.109.594.094.813.063.25-.031.844-.344.969-.672s.125-.609.094-.672c-.031-.063-.094-.094-.234-.156z"/>
  </svg>
  
  {/* Tulisan yang tadi tidak kelihatan, sekarang sudah dimasukkan di sini */}
  <span className="text-lg font-bold text-white hover:underline">
    Chat via WhatsApp
  </span>
</a>
    </div>
    
    <div className="flex flex-col md:items-end justify-end space-y-4">
      <p className="text-xl font-black text-white italic">Tirta Jati Swimming Club</p>
      <p className="font-light text-sm text-slate-400">Gianyar, Bali, Indonesia.</p>
      
      <a 
        href="https://instagram.com/tirta.jati.swimming.club" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex items-center gap-2 text-slate-300 hover:text-[#38bdf8] transition-colors"
      >
        <svg className="w-5 h-5 text-slate-500 group-hover:text-[#38bdf8] transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        <span className="font-light underline decoration-slate-600 underline-offset-4">Instagram @tirta.jati.swimming.club</span>
      </a>
    </div>
  </div>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-light text-slate-500 gap-6">
    <p>© {new Date().getFullYear()} Tirta Jati SC.</p>
    <p className="text-xs">Created with <span className="text-[#38bdf8]"></span> by swim coach @buddz</p>
  </div>
</footer>
      {/* =========================================
          MODAL GALERI (LIGHTBOX ZOOM)
      ========================================= */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer opacity-100 transition-opacity duration-300"
          onClick={() => setSelectedImg(null)}
        >
          {/* Tombol Close (X) */}
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all focus:outline-none"
            onClick={() => setSelectedImg(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Gambar yang di-zoom */}
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
