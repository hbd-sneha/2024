onload = () => {
    const c = setTimeout(() => {
      document.getElementById("body").classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};

var names = [
    'Happy Birthday',                        // English
    'Feliz Cumpleaños',                      // Spanish
    'Joyeux Anniversaire',                   // French
    'Alles Gute zum Geburtstag',             // German
    'Buon Compleanno',                       // Italian
    'Feliz Aniversário',                     // Portuguese
    '生日快乐',              // Chinese (Mandarin)
    'お誕生日おめでとう',  // Japanese
    '생일 축하해요',     // Korean
    'С Днём Рождения',   // Russian
    'जन्मदिन मुबारक हो', // Hindi
    'जन्मदिन शुभेच्छा', // Marathi
    'જન્મ દિવસ મુબારક', // Gujarati
    'Happy Birthday',                        // English
    'Happy Birthday',                        // English
];
setTimeout(() => {
  setInterval(function() {
    var rand = Math.floor(Math.random() * names.length);
    document.getElementById("hbd").innerHTML = names[rand];
  }, 2000)
}, 3000);

setTimeout(() => {
  document.getElementById('birthdayButton').style.display = 'inline-block'; // Display the button after 8 seconds
}, 8000);
