// create our questions
let questions = [
  {
    question: "Ibukota Negara India..",
    imgSrc: "",
    choiceA: "Colombo",
    choiceB: "Delhi",
    choiceC: "Kathmandu",
    choiceD: "New Delhi",
    correct: "d",
  },
  {
    question: "Ibukota Negara Russia..",
    imgSrc: "",
    choiceA: "Stalingrad",
    choiceB: "Moskow",
    choiceC: "Talinn",
    choiceD: "Riga",
    correct: "b",
  },
  {
    question: "Ibukota Negara Malaysia..",
    imgSrc: "",
    choiceA: "Kuala Lumpur",
    choiceB: "Hanoi",
    choiceC: "Vientiane",
    choiceD: "Naypitaw",
    correct: "a",
  },
  {
    question: "Ibukota Negara Jepang..",
    imgSrc: "",
    choiceA: "Seoul",
    choiceB: "Macau",
    choiceC: "Tokyo",
    choiceD: "Kyoto",
    correct: "c",
  },
  {
    question: "Ibukota Negara Mesir..",
    imgSrc: "",
    choiceA: "Dakar",
    choiceB: "Rabat",
    choiceC: "Tripoli",
    choiceD: "Kairo",
    correct: "d",
  },
  {
    question: "Ibukota Negara Amerika Serikat..",
    imgSrc: "",
    choiceA: "Manchester",
    choiceB: "Ottawa",
    choiceC: "New York",
    choiceD: "Washington D.C.",
    correct: "d",
  },
  {
    question: "Ibukota Negara RRT..",
    imgSrc: "",
    choiceA: "Ulan Bator",
    choiceB: "Beijing",
    choiceC: "Shanghai",
    choiceD: "Macau",
    correct: "b",
  },
  {
    question: "Ibukota Negara Kamboja..",
    imgSrc: "",
    choiceA: "Phnom Penh",
    choiceB: "Dili",
    choiceC: "Port Moresby",
    choiceD: "Angkor Wat",
    correct: "a",
  },
  {
    question: "Ibukota Negara Indonesia..",
    imgSrc: "",
    choiceA: "Kuala Lumpur",
    choiceB: "Medan",
    choiceC: "Jakarta",
    choiceD: "Bali",
    correct: "c",
  },
  {
    question: "Ibukota Negara Australia..",
    imgSrc: "",
    choiceA: "Victoria",
    choiceB: "Canberra",
    choiceC: "New South Wales",
    choiceD: "Wellington",
    correct: "b",
  },
  {
    question: "Ibukota Negara Prancis..",
    imgSrc: "",
    choiceA: "Madrid",
    choiceB: "Munich",
    choiceC: "Berlin",
    choiceD: "Paris",
    correct: "d",
  },
  {
    question: "Ibukota Negara Inggris..",
    imgSrc: "",
    choiceA: "London",
    choiceB: "Manchester",
    choiceC: "New South Wales",
    choiceD: "Dublin",
    correct: "a",
  },
  {
    question: "Ibukota Negara Brasil..",
    imgSrc: "",
    choiceA: "Buenos Aires",
    choiceB: "Brasilia",
    choiceC: "Santiago",
    choiceD: "Caracas",
    correct: "b",
  },
  {
    question: "Ibukota Negara New Zealand..",
    imgSrc: "",
    choiceA: "Auckland",
    choiceB: "Wellington",
    choiceC: "Victoria",
    choiceD: "Quebec",
    correct: "b",
  },
  {
    question: "Ibukota Negara Myanmar..",
    imgSrc: "",
    choiceA: "Bangkok",
    choiceB: "Vientiane",
    choiceC: "Dili",
    choiceD: "Naypitaw",
    correct: "d",
  },
  {
    question: "Ibukota Negara Thailand..",
    imgSrc: "",
    choiceA: "Hatyai",
    choiceB: "Singapura",
    choiceC: "Bangkok",
    choiceD: "Naypitaw",
    correct: "c",
  },
  {
    question: "Ibukota Negara Madagaskar..",
    imgSrc: "",
    choiceA: "Antananarivo",
    choiceB: "Lusaka",
    choiceC: "Harare",
    choiceD: "Moroni",
    correct: "a",
  },
  {
    question: "Ibukota Negara Afrika Selatan..",
    imgSrc: "",
    choiceA: "Tripoli",
    choiceB: "Djibouti",
    choiceC: "Nairobi",
    choiceD: "Cape Town",
    correct: "d",
  },
  {
    question: "Ibukota Negara Filipina..",
    imgSrc: "",
    choiceA: "Buenos Aires",
    choiceB: "Manila",
    choiceC: "Auckland",
    choiceD: "Hanoi",
    correct: "b",
  },
  {
    question: "Ibukota Negara Singapura..",
    imgSrc: "",
    choiceA: "Singapura",
    choiceB: "Port Moresby",
    choiceC: "Kuala Lumpur",
    choiceD: "Bangkok",
    correct: "a",
  },
  //   {
  //     question: "Ibukota Jakarta",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
  //   {
  //     question: "",
  //     imgSrc: "",
  //     choiceA: "",
  //     choiceB: "",
  //     choiceC: "",
  //     correct: "",
  //   },
];
