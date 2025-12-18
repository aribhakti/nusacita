import { 
  CreditCard, 
  Smartphone, 
  Monitor, 
  FileText, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe,
  Lock,
  Wallet,
  AlertTriangle
} from 'lucide-react';
import { NavItem, Product, Value } from './types';

// Invariant Constants
export const COMPANY_NAME = "PT NUSANTARA CITA BERSAMA";
export const SHORT_NAME = "Nusacita";
export const ADDRESS = "Grha Artajasa, Jl. Letnan Sutopo B.1/3, Sektor Komersil III B, Serpong - Tangerang Selatan 15321 Banten";
export const EMAIL = "helpdesk@nusacita.co.id";
export const PHONE_1 = "021-29706969";
export const PHONE_2 = "021-29706999";

// Translation Dictionary
export const CONTENT = {
  en: {
    TAGLINE: "Connecting Your Business",
    SUB_TAGLINE: "Everything's Better When We're Together",
    OFFICE_HOURS: "Monday to Friday, 08.00 - 17.00 WIB",
    NAV_ITEMS: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Products', path: '/products' },
      { label: 'Consumer Info', path: '/information' },
      { label: 'Contact', path: '/contact' },
    ],
    HERO_CONTENT: {
      headlineWords: ["Connecting", "Your", "Business"],
      subheadline: "Everything's Better When We're Together. We provide integrated technology-based payment system solutions to modernize your business.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Contact Us",
      memberOf: "Member of Artajasa & Koperasi Nusacita",
      readyToScale: "Ready to",
      scaleUp: "Scale Up?",
      scaleDesc: "Join the ecosystem that powers modern Indonesian businesses. Secure, fast, and integrated.",
      startPartnership: "Start Partnership",
      readRegulations: "Read Regulations",
      solutionsTitle: "Our Solutions",
      solutionsSubtitle: "Integrated Payment Ecosystem",
      solutionsDesc: "Everything you need to accept payments and grow your business."
    },
    ABOUT: {
      title: "About",
      subtitle: "Pioneering integrated information technology-based payment systems to drive the Indonesian economy forward.",
      structure: "Company Structure",
      foundationTitle: "Our Foundation",
      foundationText1: "Nusacita (PT Nusantara Cita Bersama) stands on the shoulders of giants. Founded and owned by",
      foundationText2: "We combine the experience of industry pioneers with the agility of modern tech. Our philosophy is simple yet powerful:",
      quote: "Making payments easy and integrated through cooperation.",
      visionTitle: "Our Vision",
      visionText: "To be the premier partner for business players and the community by providing payment transaction processing services that are efficient, secure, and reliable.",
      missionTitle: "Our Mission",
      missionText: "Prioritizing professionalism, continuous innovation, and competent human resources as the keys to delivering the best service solutions.",
      valuesTitle: "Core Values"
    },
    SERVICES: {
      title: "Our",
      titleHighlight: "Products",
      subtitle: "Scalable financial technology solutions designed to empower your business operations.",
      liveSystem: "Live System",
      capabilities: "Capabilities",
      pricing: "Pricing Structure",
      requestIntegration: "Request Integration",
      customTitle: "Custom Solution Needed?",
      customDesc: "We understand that every financial ecosystem is unique. Let's discuss a tailored architecture for your business.",
      talkExpert: "Talk to Experts"
    },
    PROJECTS: {
      title: "Information Hub",
      subtitle: "Stay informed about security protocols, usage guidelines, and your rights as a partner.",
      topics: "Topics",
      needHelp: "Need Assistance?",
      helpDesc: "Our helpdesk is available 24/7 for fraud reports.",
      contactSupport: "Contact Support",
      tabSecurity: "Security & Passwords",
      tabMerchant: "Merchant Guidelines",
      tabPrivacy: "Privacy Policy",
      contentSecurity: {
        title: "Password Security",
        desc: "Password security is crucial. Here are the mandatory security standards to protect your digital assets.",
        cardTitle: "Password Requirements",
        points: [
          "Minimum length of 14 characters",
          "Cannot be used repeatedly",
          "Combination of Uppercase, Lowercase, Numbers, & Symbols"
        ]
      },
      contentMerchant: {
        title: "Merchant Guidelines",
        desc: "Especially for partners using PGasus Debit services, please pay attention to the following critical points for operational smoothness.",
        card1Title: "Mandatory Compliance",
        card1Desc: "Merchants must understand the GPN transaction mechanism. Double Swiping on cash registers other than EDC is prohibited for customer data security.",
        card2Title: "Risk Management",
        card2Desc: "Always verify the physical card and signature/PIN. If you find a suspicious card, contact Helpdesk immediately."
      },
      contentPrivacy: {
        title: "Privacy Policy",
        cardTitle: "Data Protection Commitment",
        desc: "Nusacita applies high encryption standards to protect every byte of your transaction data. We never share personal data with third parties without consent.",
        warning: "IMPORTANT: Official Nusacita / PGasus Money staff NEVER ask for your PIN, OTP, or Password via telephone or chat."
      }
    },
    CONTACT: {
      title: "Contact Us",
      subtitle: "Contact us anytime if you experience disruptions or need further information regarding our services.",
      addressTitle: "Office Address",
      callTitle: "Call Center",
      hoursTitle: "Operational Hours",
      formTitle: "Send us a Message",
      labels: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        sent: "Message Sent!"
      },
      subjects: [
        "PGasus Online Service",
        "PGasus Debit Service",
        "PGasus Money Service",
        "NusaBill Service",
        "Fraud Report",
        "Business Partnership"
      ]
    },
    FOOTER: {
      desc: "Integrated information technology-based payment system solutions. We change the way you do business.",
      quickLinks: "Quick Links",
      products: "Our Products",
      contact: "Contact Us",
      rights: "All rights reserved."
    },
    PRODUCTS_LIST: [
      {
        id: 'pgasus-online',
        title: 'PGasus Online',
        subtitle: 'Advanced Payment Gateway',
        description: 'Payment Gateway or Payment Interface service intended for online partners or merchants in paying for products or services sold.',
        icon: Globe,
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Various payment methods (Debit/Credit Card, Bank VA, e-Money, Digital Bank & QRIS)',
          'API integration for easy implementation',
          'Settlement every working day',
          'Comprehensive dashboard & transaction reports',
          '24/7 Helpdesk'
        ]
      },
      {
        id: 'pgasus-debit',
        title: 'PGasus Debit',
        subtitle: 'GPN EDC System',
        description: 'System provision service on EDC terminals for merchant shopping transactions with GPN debit cards, covering infrastructure, operations, and acquiring.',
        icon: CreditCard,
        image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Standard & NSICCS certified EDC Terminal',
          'Host Terminal & TMS (Terminal Management System)',
          'Fraud Detection System',
          'Centralized fund settlement',
          'Merchant Management (Scoring, Monitoring)',
          '24/7 Support'
        ],
        tariffs: [
          { category: 'Regular', rate: '1%' },
          { category: 'Education (Special)', rate: '0.75%' },
          { category: 'Gas Station (Special)', rate: '0.50%' },
          { category: 'G2P / Social Donation (Special)', rate: '0%' },
        ]
      },
      {
        id: 'pgasus-money',
        title: 'PGasus Money',
        subtitle: 'Server-Based E-Money',
        description: 'Server-based electronic money service to digitize transactions in your community, foundation, or business.',
        icon: Wallet,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Purchase of Goods',
          'Bill Payment',
          'Transfer between PGasus Money',
          'Transfer to Bank Account',
          'Operational ease (Integration, Reconciliation)',
          'Revenue Sharing'
        ],
        tariffs: [
          { category: 'MDR Purchase Fee', rate: 'Max 1%' },
          { category: 'Biller Payment Fee', rate: 'Biller Terms' },
          { category: 'Transfer Between PGasus Money', rate: 'Free' },
          { category: 'Top Up via ATM Bersama', rate: 'Rp 4.500,-' },
          { category: 'Transfer to Bank', rate: 'Rp 6.500,-' }
        ]
      },
      {
        id: 'nusabill',
        title: 'NusaBill',
        subtitle: 'Integrated Billing System',
        description: 'Facilitates Partners in managing bills for their customers without having to build a complicated system.',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Digital-based Invoice Creation',
          'Bill Broadcast via e-mail & WhatsApp',
          'Payment via Payment Gateway (Multi-source)',
          'Realtime monitoring and Reporting',
          'Cash flow simplification'
        ]
      }
    ],
    CORE_VALUES: [
      {
        title: "Professionalism",
        description: "Prioritizing the spirit of professionalism in building a sustainable business.",
        icon: Users
      },
      {
        title: "Innovation",
        description: "Presenting product innovations needed by the current market based on cutting-edge technology.",
        icon: Zap
      },
      {
        title: "Security",
        description: "Providing efficient, secure, and reliable transaction processing services.",
        icon: ShieldCheck
      }
    ]
  },
  id: {
    TAGLINE: "Menghubungkan Bisnis Anda",
    SUB_TAGLINE: "Segalanya Lebih Baik Saat Kita Bersama",
    OFFICE_HOURS: "Senin sampai Jumat, 08.00 - 17.00 WIB",
    NAV_ITEMS: [
      { label: 'Beranda', path: '/' },
      { label: 'Tentang Kami', path: '/about' },
      { label: 'Produk', path: '/products' },
      { label: 'Info Konsumen', path: '/information' },
      { label: 'Kontak', path: '/contact' },
    ],
    HERO_CONTENT: {
      headlineWords: ["Menghubungkan", "Bisnis", "Anda"],
      subheadline: "Segalanya Lebih Baik Saat Kita Bersama. Kami menyediakan solusi sistem pembayaran berbasis teknologi terintegrasi untuk memodernisasi bisnis Anda.",
      ctaPrimary: "Lihat Produk",
      ctaSecondary: "Hubungi Kami",
      memberOf: "Anggota Artajasa & Koperasi Nusacita",
      readyToScale: "Siap untuk",
      scaleUp: "Berkembang?",
      scaleDesc: "Bergabunglah dengan ekosistem yang memperkuat bisnis modern Indonesia. Aman, cepat, dan terintegrasi.",
      startPartnership: "Mulai Kemitraan",
      readRegulations: "Baca Regulasi",
      solutionsTitle: "Solusi Kami",
      solutionsSubtitle: "Ekosistem Pembayaran Terintegrasi",
      solutionsDesc: "Segala yang Anda butuhkan untuk menerima pembayaran dan mengembangkan bisnis."
    },
    ABOUT: {
      title: "Tentang",
      subtitle: "Memelopori sistem pembayaran berbasis teknologi informasi terintegrasi untuk mendorong ekonomi Indonesia.",
      structure: "Struktur Perusahaan",
      foundationTitle: "Fondasi Kami",
      foundationText1: "Nusacita (PT Nusantara Cita Bersama) berdiri di atas pundak para raksasa. Didirikan dan dimiliki oleh",
      foundationText2: "Kami menggabungkan pengalaman pelopor industri dengan kelincahan teknologi modern. Filosofi kami sederhana namun kuat:",
      quote: "Membuat pembayaran mudah dan terintegrasi melalui kerja sama.",
      visionTitle: "Visi Kami",
      visionText: "Menjadi mitra utama bagi pelaku bisnis dan masyarakat dengan menyediakan layanan pemrosesan transaksi pembayaran yang efisien, aman, andal.",
      missionTitle: "Misi Kami",
      missionText: "Mengutamakan profesionalisme, inovasi berkelanjutan, dan sumber daya manusia yang kompeten sebagai kunci untuk memberikan solusi layanan terbaik.",
      valuesTitle: "Nilai Inti"
    },
    SERVICES: {
      title: "Produk",
      titleHighlight: "Kami",
      subtitle: "Solusi teknologi finansial yang skalabel dirancang untuk memberdayakan operasional bisnis Anda.",
      liveSystem: "Sistem Live",
      capabilities: "Kapabilitas",
      pricing: "Struktur Harga",
      requestIntegration: "Minta Integrasi",
      customTitle: "Butuh Solusi Khusus?",
      customDesc: "Kami mengerti bahwa setiap ekosistem keuangan itu unik. Mari diskusikan arsitektur yang disesuaikan untuk bisnis Anda.",
      talkExpert: "Hubungi Ahli"
    },
    PROJECTS: {
      title: "Pusat Informasi",
      subtitle: "Tetap terinformasi tentang protokol keamanan, panduan penggunaan, dan hak Anda sebagai mitra.",
      topics: "Topik",
      needHelp: "Butuh Bantuan?",
      helpDesc: "Helpdesk kami tersedia 24/7 untuk laporan penipuan.",
      contactSupport: "Hubungi Support",
      tabSecurity: "Keamanan & Password",
      tabMerchant: "Panduan Merchant",
      tabPrivacy: "Kebijakan Privasi",
      contentSecurity: {
        title: "Keamanan Password",
        desc: "Keamanan Password menjadi hal yang sangat krusial. Berikut adalah standar keamanan yang wajib diikuti untuk melindungi aset digital Anda.",
        cardTitle: "Ketentuan Password",
        points: [
          "Panjang minimum 14 karakter",
          "Tidak boleh digunakan berulang",
          "Kombinasi Huruf Besar, Kecil, Angka, & Simbol"
        ]
      },
      contentMerchant: {
        title: "Panduan Merchant",
        desc: "Khusus mitra pengguna layanan PGasus Debit, harap perhatikan poin-poin kritikal berikut untuk kelancaran operasional.",
        card1Title: "Wajib Dipatuhi",
        card1Desc: "Merchant wajib memahami mekanisme transaksi GPN. Dilarang melakukan Double Swipe (penggesekan ganda) pada mesin kasir selain EDC untuk keamanan data nasabah.",
        card2Title: "Manajemen Risiko",
        card2Desc: "Selalu verifikasi fisik kartu dan tanda tangan/PIN. Jika menemukan kartu yang mencurigakan, segera hubungi Helpdesk."
      },
      contentPrivacy: {
        title: "Kebijakan Privasi",
        cardTitle: "Komitmen Perlindungan Data",
        desc: "Nusacita menerapkan standar enkripsi tinggi untuk melindungi setiap byte data transaksi Anda. Kami tidak pernah membagikan data pribadi kepada pihak ketiga tanpa persetujuan.",
        warning: "PENTING: Staf resmi Nusacita / PGasus Money TIDAK PERNAH meminta PIN, OTP, atau Password Anda melalui telepon atau chat."
      }
    },
    CONTACT: {
      title: "Hubungi Kami",
      subtitle: "Hubungi kami setiap saat jika mengalami gangguan atau membutuhkan informasi lebih lanjut mengenai layanan kami.",
      addressTitle: "Alamat Kantor",
      callTitle: "Call Center",
      hoursTitle: "Jam Operasional",
      formTitle: "Kirim Pesan",
      labels: {
        name: "Nama Lengkap",
        email: "Alamat Email",
        phone: "Nomor Telepon",
        subject: "Subjek",
        message: "Pesan",
        send: "Kirim Pesan",
        sending: "Mengirim...",
        sent: "Pesan Terkirim!"
      },
      subjects: [
        "Layanan PGasus Online",
        "Layanan PGasus Debit",
        "Layanan PGasus Money",
        "Layanan NusaBill",
        "Laporan Penipuan / Fraud",
        "Kerjasama Bisnis"
      ]
    },
    FOOTER: {
      desc: "Solusi sistem pembayaran berbasis teknologi informasi terintegrasi. Kami mengubah cara Anda berbisnis.",
      quickLinks: "Tautan Cepat",
      products: "Produk Kami",
      contact: "Hubungi Kami",
      rights: "Hak cipta dilindungi."
    },
    PRODUCTS_LIST: [
      {
        id: 'pgasus-online',
        title: 'PGasus Online',
        subtitle: 'Payment Gateway Canggih',
        description: 'Layanan Payment Gateway atau Payment Interface yang diperuntukan kepada mitra atau merchant online dalam pembayaran produk atau layanan yang dijualnya.',
        icon: Globe,
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Berbagai pilihan metode bayar (Kartu Debit/Kredit, VA Bank, e-Money, Bank Digital & QRIS)',
          'Integrasi dengan API untuk mempermudah implementasi',
          'Settlement dana setiap hari kerja',
          'Dashboard & laporan transaksi lengkap',
          'Helpdesk 24/7'
        ]
      },
      {
        id: 'pgasus-debit',
        title: 'PGasus Debit',
        subtitle: 'Sistem EDC GPN',
        description: 'Layanan penyediaan sistem pada terminal EDC untuk transaksi pembelanjaan merchant dengan kartu debit GPN, mencakup infrastruktur, operasional, dan acquiring.',
        icon: CreditCard,
        image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Terminal EDC standar & tersertifikasi NSICCS',
          'Host Terminal & TMS (Terminal Management System)',
          'Fraud Detection System',
          'Settlement dana terpusat',
          'Merchant Management (Scoring, Monitoring)',
          'Support 24/7'
        ],
        tariffs: [
          { category: 'Reguler', rate: '1%' },
          { category: 'Pendidikan (Khusus)', rate: '0,75%' },
          { category: 'SPBU (Khusus)', rate: '0,50%' },
          { category: 'G2P / Donasi Sosial (Khusus)', rate: '0%' },
        ]
      },
      {
        id: 'pgasus-money',
        title: 'PGasus Money',
        subtitle: 'E-Money Berbasis Server',
        description: 'Layanan uang elektronik berbasis server untuk mendigitalisasi transaksi pada komunitas, yayasan, atau bisnis Anda.',
        icon: Wallet,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Pembelian Barang (Purchase)',
          'Pembayaran Tagihan (Payment)',
          'Transfer antar PGasus Money',
          'Transfer ke rekening Bank',
          'Kemudahan operasional (Integrasi, Rekonsiliasi)',
          'Sharing Revenue'
        ],
        tariffs: [
          { category: 'Biaya Pembelian MDR', rate: 'Maksimal 1%' },
          { category: 'Biaya Pembayaran Biller', rate: 'Ketentuan Biller' },
          { category: 'Transfer Antar PGasus Money', rate: 'Gratis' },
          { category: 'Top Up via ATM Bersama', rate: 'Rp 4.500,-' },
          { category: 'Transfer Antar Bank', rate: 'Rp 6.500,-' }
        ]
      },
      {
        id: 'nusabill',
        title: 'NusaBill',
        subtitle: 'Sistem Penagihan Terintegrasi',
        description: 'Memudahkan Mitra dalam mengelola tagihan untuk pelanggannya tanpa harus membangun sistem yang rumit.',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        features: [
          'Pembuatan Invoice berbasis digital',
          'Broadcast Tagihan via e-mail & WhatsApp',
          'Pembayaran via Payment Gateway (Multi-source)',
          'Realtime monitoring dan Reporting',
          'Penyederhanaan arus kas'
        ]
      }
    ],
    CORE_VALUES: [
      {
        title: "Profesionalisme",
        description: "Mengedepankan semangat profesionalisme dalam membangun bisnis yang berkelanjutan.",
        icon: Users
      },
      {
        title: "Inovasi",
        description: "Menghadirkan inovasi produk yang dibutuhkan market saat ini berbasis teknologi mutakhir.",
        icon: Zap
      },
      {
        title: "Keamanan",
        description: "Menyediakan layanan pemrosesan transaksi yang efisien, aman, dan handal.",
        icon: ShieldCheck
      }
    ]
  }
};