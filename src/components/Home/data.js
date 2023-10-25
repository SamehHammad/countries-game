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
  },
  {
    name: "فلسطـــين",
    flagURL:
      "https://cdn.countryflags.com/thumbs/palestine/flag-square-250.png",
  },
  {
    name: "العــــراق",
    flagURL: "https://cdn.countryflags.com/thumbs/iraq/flag-square-250.png",
  },
  {
    name: "السعــوديه",
    flagURL: "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-square-250.png",
  },
  {
    name: "الكـــويت",
    flagURL: "https://cdn.countryflags.com/thumbs/kuwait/flag-800.png",
  },
  {
    name: "الأردن",
    flagURL: "https://cdn.countryflags.com/thumbs/jordan/flag-800.png",
  },
  {
    name: "ليـــبيا",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/280px-Flag_of_Libya.svg.png",
  },
  {
    name: "الإمـــارات",
    flagURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GMp_CmAbzcWsW7x0DG5KFcVaVO3SEyRYAridg013Xrj94dlqsowwLKb6BeSJ&s=10",
  },
  {
    name: "لبـــنان",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
  },
  {
    name: "ســـــوريا",
    flagURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Xhjf2S4U2ZaullsGlgpVLegmBWMRp3VqlSsFZmI5b_LSbUx2fTwYpZz7osIl&s=10",
  },
  {
    name: "المغــــرب",
    flagURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShziVnUL317eaGwuRYyXvjuis2MVSImHQS4dBHYZIigXBMyaeIqgWqcGp6kpfT&s=10",
  },
  {
    name: "تـــــونس",
    flagURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpn05Qum4Z_3zzsmCxpBUlvSZlL66rFw1TDY89eeWgpG-QOiySXJPsBiSYJM&s=10",
  },
  {
    name: "الجـــزائر",
    flagURL: "https://cdn.countryflags.com/thumbs/algeria/flag-square-250.png",
  },
  {
    name: "الســـودان",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
  },
  {
    name: "سلطنة عمــان",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
  },
  {
    name: "موريتــانيا",
    flagURL: "https://cdn.countryflags.com/thumbs/ksa/flag-square-250.png",
  },
  {
    name: "اليــمن",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
  },
  {
    name: "قطــــر",
    flagURL: "https://cdn.countryflags.com/thumbs/qatar/flag-square-250.png",
  },
  {
    name: "الصومــــال",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
  },
  {
    name: "جيبــــوتي",
    flagURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_vBg1JTZ-QcGD507Yslt7VM4GxAJD2cZ5QMCE0wirPdNt4ejzHZ6XMLgm6RX&s=10",
  },
  {
    name: "جزر القمـــر",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",
  },
  {
    name: "أمـــريكا",
    flagURL: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
  },
  {
    name: "إسرائيــل",
    flagURL: "https://cdn.countryflags.com/thumbs/israel/flag-square-250.png",
  },
  {
    name: "روسيـــا",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
  },
  {
    name: "تركـــيا",
    flagURL: "https://cdn.countryflags.com/thumbs/turkey/flag-square-250.png",
  },
  {
    name: "إيـــران",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
  },
  {
    name: " كوريـــا الجنوبيه",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  },
  {
    name: "الصيــــن",
    flagURL: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
  },
  {
    name: "ألمــــانيا",
    flagURL: "https://cdn.countryflags.com/thumbs/germany/flag-square-250.png",
  },
  {
    name: "فرنـــسا",
    flagURL: "https://cdn.countryflags.com/thumbs/france/flag-square-250.png",
  },
  {
    name: "كنـــدا",
    flagURL: "https://cdn.countryflags.com/thumbs/canada/flag-square-250.png",
  },
  {
    name: "البرازيــــل",
    flagURL: "https://cdn.countryflags.com/thumbs/brazil/flag-square-250.png",
  },
  {
    name: "أسترالـيــا",
    flagURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPUu9_BganHN0KFxI64zxlg-EENdrd05JTl07sECRc8NM3eaanNKjevq8P50S&s=10",
  },
  {
    name: "اليابـــان",
    flagURL: "https://cdn.countryflags.com/thumbs/japan/flag-square-250.png",
  },
  {
    name: "أسبانيـــا",
    flagURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoobjVCfBtQhBEDA74LX2t6TGUiZC_pSvbSyPQYoUo-aou7_8vKQm6fHT1k4&s=10",
  },
  {
    name: "إيطـــاليا",
    flagURL: "https://cdn.countryflags.com/thumbs/italy/flag-square-250.png",
  },
];
