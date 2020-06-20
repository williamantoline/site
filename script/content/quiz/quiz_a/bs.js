// create our questions
let questions = [
  {
    question: "Di dunia ini, ada yang namanya Danau Tahu dan Danau Tempe",
    imgSrc: "",
    choiceA: "Benar",
    choiceB: "Salah",
    correct: "a",
    info:
      "Danau Tahoe terletak di Amerika Serikat dan Danau Tempe terletak di Sulawesi, Indonesia",
  },
  {
    question:
      "Jumlah bintang di Bendera Amerika Serikat sama dengan jumlah Negara Bagiannya",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info:
      "Jumlah bintang pada benderanya adalah 50, sama dengan jumlah negara bagiannya",
  },
  {
    question:
      "Hanya ada 1 negara di dunia yang tanggal kemerdekaannya 17 Agustus",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info:
      "Selain Indonesia, ada 1 negara di Afrika yang tanggal kemerdekaannya juga 17 Agustus, yaitu Gabon, pada 17 Agustus 1960",
  },
  {
    question:
      "Jika kita mengeja 1-100 dalam Bahasa Inggris, tidak ada huruf 'a' disitu",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info: "huruf 'a' baru akan ditemui setelah mencapai 1000 (one thousAnd)",
  },
  {
    question:
      "Tanggal kematian Einstein sama dengan tanggal kelahiran Stephen Hawking",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info:
      "Yang sama adalah tanggal kelahiran Einstein dan tanggal kematian Stephen Hawking",
  },
  {
    question:
      "Winston Churchill (Perdana Mentri Inggris di masa PD2) dilahirkan di toilet wanita",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info: "",
  },
  {
    question: "Sumpit berasal dari Jepang",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info: "Sumpit berasal dari Tiongkok",
  },
  {
    question: "Telinga akan terus bertumbuh sepanjang hidup manusia",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info:
      "Telinga dan hidung, tidak akan berhenti bertumbuh sepanjang hidup manusia",
  },
  {
    question:
      "Judul lagu kebangsaan Amerika Serikat adalah tentang Bendera Negaranya",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info:
      'Judul lagu Kebangsaan Amerika Serikat dalam Bahasa Indonesia adalah "Panji Berhiaskan Bintang" yang mana menjelakan tentang bendera.',
  },
  {
    question: "Lagu Kebangsaan Inggris adalah tentang Ratu",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info:
      'Lagu Kebangsaan Inggris adalah "God Save the Queen" yang artinya "Tuhan Melindungi Sang Ratu"',
  },
  {
    question: "Lagu Kebangsaan Spanyol tidak punya lirik",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info:
      "Lagu Kebangsaan Spanyol hanya berbentuk musik dan tidak ada liriknya",
  },
  {
    question:
      "Pelukis terkenal Vincent van Gogh bisa menulis dengan satu tangan, dan tangan yang lain bisa menggambar dalam waktu bersamaan",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info: "Yang bisa melakukan itu adalah Leonardo da Vinci",
  },
  {
    question: "Kemacetan terparah di dunia berlangsung di New York",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info: "Kemacetan terparah sepanjang sejarah terjadi di Beijing",
  },
  {
    question: "Hanya ada dua negara yang benderanya memiliki warna ungu",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info: "Benar! Negara itu adalah Nikaragua dan Dominika",
  },
  {
    question:
      "Walaupun ada 24 jam sehari di bumi, ada lebih dari 24 zona waktu di bumi.",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info:
      "Ada beberapa zona waktu yang hanya berlangsung 30menit atau 45menit dibanding zona waktu disebelahnya",
  },
  {
    question:
      "Jumlah pulau yang dimiliki Finlandia lebih banyak daripada Indonesia.",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info:
      "Indoneia punya sekitar 17500 pulau, sedangkan Finlandia punya sekitar 187000 pulau",
  },
  {
    question: "Jerapah tidak memiliki lidah",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info:
      "Jerapah punya lidah yang sangat panjang, hingga ia bisa membersihkan telinganya sendiri dengan lidahnya itu.",
  },
  {
    question: "Hotel tertua di dunia berada di Yunani",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info: "Hotel tertua berada di Jepang.",
  },
  {
    question: "Nama Soekarno dijadikan nama jalan di Maroko",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info: "",
  },
  {
    question:
      "Kebiasaan menggigit jari bisa meningkatkan sistem kekebalan tubuh",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "a",
    info: "",
  },
  {
    question: "Candi terbesar di dunia adalah Candi Borobudur",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info: "Candi terbesar di dunia adalah Angkor Wat, di Kamboja",
  },
  {
    question: "Lebih dari 80% pekerja di Jepang tidak mengambil cuti kerjanya",
    imgSrc: "",
    choiceA: "",
    choiceB: "",
    correct: "b",
    info: "Hanya kurang dari 40% yang demikian",
  },
  {
    question: "Beruang kutub hanya dapat ditemukan di Kutub Selatan",
    imgSrc: "",
    choiceA: "",
    choiceB: "b",
    correct: "Beruang kutub hanya dapat ditemukan di Kutub Utara",
    info: "",
  },
  // {
  //   question: "",
  //   imgSrc: "",
  //   choiceA: "",
  //   choiceB: "",
  //   correct: "",
  //   info: "",
  // },
  // {
  //   question: "",
  //   imgSrc: "",
  //   choiceA: "",
  //   choiceB: "",
  //   correct: "",
  //   info: "",
  // },
  // {
  //   question: "",
  //   imgSrc: "",
  //   choiceA: "",
  //   choiceB: "",
  //   correct: "",
  //   info: "",
  // },
];
