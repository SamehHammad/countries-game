export const getRandomColor = () => {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256); // 0 to 255
  const green = Math.floor(Math.random() * 256); // 0 to 255
  const blue = Math.floor(Math.random() * 256); // 0 to 255

  const color = `rgb(${red}, ${green}, ${blue}`;

  return color;
};
export const countriesData = [
  {
    name: "مـــصــر",
    flagURL: "https://cdn.countryflags.com/thumbs/egypt/flag-square-250.png",
    bgColor: "linear-gradient(red, white, black)",
  },
  {
    name: "فلسطـــين",
    flagURL:
      "https://cdn.countryflags.com/thumbs/palestine/flag-square-250.png",
    bgColor: "linear-gradient(black, red, white,green)",
  },
  {
    name: "العــــراق",
    flagURL: "https://cdn.countryflags.com/thumbs/iraq/flag-square-250.png",
    bgColor: "linear-gradient(red, white, black)",
  },
  {
    name: "السعــوديه",
    flagURL:
      "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-square-250.png",
    bgColor: "linear-gradient( white, green)",
  },
  {
    name: "الكـــويت",
    flagURL: "https://cdn.countryflags.com/thumbs/kuwait/flag-800.png",
    bgColor: "linear-gradient(green, white,red)",
  },
  {
    name: "الأردن",
    flagURL: "https://cdn.countryflags.com/thumbs/jordan/flag-800.png",
    bgColor: "linear-gradient(black, white,red,green)",
  },
  {
    name: "ليـــبيا",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/280px-Flag_of_Libya.svg.png",
    bgColor: "linear-gradient(red, black,white, green)",
  },
  {
    name: "الإمـــارات",
    flagURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GMp_CmAbzcWsW7x0DG5KFcVaVO3SEyRYAridg013Xrj94dlqsowwLKb6BeSJ&s=10",
    bgColor: "linear-gradient(green, white, red,green)",
  },
  {
    name: "لبـــنان",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
    bgColor: "linear-gradient(red, white, green,red)",
  },
  {
    name: "ســـــوريا",
    flagURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Xhjf2S4U2ZaullsGlgpVLegmBWMRp3VqlSsFZmI5b_LSbUx2fTwYpZz7osIl&s=10",
    bgColor: "linear-gradient(red, white, black)",
  },
  {
    name: "المغــــرب",
    flagURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShziVnUL317eaGwuRYyXvjuis2MVSImHQS4dBHYZIigXBMyaeIqgWqcGp6kpfT&s=10",
    bgColor: "linear-gradient(red, green, red,red)",
  },
  {
    name: "تـــــونس",
    flagURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpn05Qum4Z_3zzsmCxpBUlvSZlL66rFw1TDY89eeWgpG-QOiySXJPsBiSYJM&s=10",
    bgColor: "linear-gradient(red, white, red)",
  },
  {
    name: "الجـــزائر",
    flagURL: "https://cdn.countryflags.com/thumbs/algeria/flag-square-250.png",
    bgColor: "linear-gradient(green,white)",
  },
  {
    name: "الســـودان",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
    bgColor: "linear-gradient(red, white, black)",
  },
  {
    name: "سلطنة عمــان",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
    bgColor: "linear-gradient(red, white, green)",
  },
  {
    name: "موريتــانيا",
    flagURL:
      "data:image/png;base64,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",
    bgColor: "linear-gradient(red, yellow, green,green,red)",
  },
  {
    name: "اليــمن",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
    bgColor: "linear-gradient(red, white, black)",
  },
  {
    name: "قطــــر",
    flagURL: "https://cdn.countryflags.com/thumbs/qatar/flag-square-250.png",
    bgColor: "linear-gradient(white,#8D1B3D,#8D1B3D)",
  },
  {
    name: "الصومــــال",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
    bgColor: "linear-gradient(#418FDE, white, #418FDE)",
  },
  {
    name: "جيبــــوتي",
    flagURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_vBg1JTZ-QcGD507Yslt7VM4GxAJD2cZ5QMCE0wirPdNt4ejzHZ6XMLgm6RX&s=10",
    bgColor: "linear-gradient(#418FDE, white, green)",
  },
  {
    name: "جزر القمـــر",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",
    bgColor: "linear-gradient(yellow, green, #418FDE)",
  },
  {
    name: "أمـــريكا",
    flagURL:
      "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
    bgColor: "linear-gradient(#3C3B6E, white, #B22234)",
  },
  {
    name: "إسرائيــل",
    flagURL: "https://cdn.countryflags.com/thumbs/israel/flag-square-250.png",
    bgColor: "linear-gradient(#0038B8, white, #0038B8)",
  },
  {
    name: "روسيـــا",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    bgColor: "linear-gradient(white, #0038B8, red)",
  },
  {
    name: "تركـــيا",
    flagURL: "https://cdn.countryflags.com/thumbs/turkey/flag-square-250.png",
    bgColor: "linear-gradient(red, white)",
  },
  {
    name: "إيـــران",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
    bgColor: "linear-gradient(green, white, red)",
  },
  {
    name: " كوريـــا الجنوبيه",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    bgColor: "linear-gradient(white, white,red, blue,white,white)",
  },
  {
    name: "الصيــــن",
    flagURL: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
    bgColor: "linear-gradient(yellow, #DE2910, black)",
  },
  {
    name: "ألمــــانيا",
    flagURL: "https://cdn.countryflags.com/thumbs/germany/flag-square-250.png",
    bgColor: "linear-gradient(black, #DE2910, yellow)",
  },
  {
    name: "فرنـــسا",
    flagURL: "https://cdn.countryflags.com/thumbs/france/flag-square-250.png",
    bgColor: "linear-gradient(to right, blue , white,#DE2910)",
  },
  {
    name: "كنـــدا",
    flagURL: "https://cdn.countryflags.com/thumbs/canada/flag-square-250.png",
    bgColor: "linear-gradient(to right,red, white, red)",
  },
  {
    name: "البرازيــــل",
    flagURL: "https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png",
    bgColor: "linear-gradient(green,green, yellow,green, green)",
  },
  {
    name: "أسترالـيــا",
    flagURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPUu9_BganHN0KFxI64zxlg-EENdrd05JTl07sECRc8NM3eaanNKjevq8P50S&s=10",
    bgColor: "linear-gradient(red, white, blue,white,blue)",
  },
  {
    name: "اليابـــان",
    flagURL: "https://cdn.countryflags.com/thumbs/japan/flag-square-250.png",
    bgColor: "linear-gradient(white,white,#BC002D, white, white)",
  },
  {
    name: "أسبانيـــا",
    flagURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoobjVCfBtQhBEDA74LX2t6TGUiZC_pSvbSyPQYoUo-aou7_8vKQm6fHT1k4&s=10",
    bgColor: "linear-gradient(#C60B1E, #FFC400, #C60B1E)",
  },
  {
    name: "إيطـــاليا",
    flagURL: "https://cdn.countryflags.com/thumbs/italy/flag-square-250.png",
    bgColor: "linear-gradient(to right , green, white, #C60B1E)",
  },
];
