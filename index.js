
const lngInput = document.getElementById("lng-input");
const clearBtn = document.querySelector(".clear");
const fromSelect = document.getElementById("from-lng");
const toSelect = document.getElementById("to-lng");
const micBtn = document.getElementById("micBtn");
const changeBtn = document.querySelector(".change-btn");
const maxAvailable = document.querySelector(".max-available");
const translateBtn = document.querySelector(".translate"); 
const resultInput = document.querySelectorAll("#lng-input")[1]; 
const speakBtn = document.getElementById("speak-btn");
const copyBtn = document.getElementById("copy-btn");
 

// --- 2. DYNAMIC LANGUAGES LOAD ---
const languages = [
    {code: "af", name: "Afrikaans"},
    {code: "sq", name: "Albanian - shqip"},
    {code: "am", name: "Amharic - አማርኛ"},
    {code: "ar", name: "Arabic - العربية"},
    {code: "an", name: "Aragonese - aragonés"},
    {code: "hy", name: "Armenian - հայերեն"},
    {code: "ast", name: "Asturian - asturianu"},
    {code: "az", name: "Azerbaijani - azərbaycan dili"},
    {code: "eu", name: "Basque - euskara"},
    {code: "be", name: "Belarusian - беларуская"},
    {code: "bn", name: "Bengali - বাংলা"},
    {code: "bs", name: "Bosnian - bosanski"},
    {code: "br", name: "Breton - brezhoneg"},
    {code: "bg", name: "Bulgarian - български"},
    {code: "ca", name: "Catalan - català"},
    {code: "ckb", name: "Central Kurdish - کوردی (دەستنوسی عەرەبی)"},
    {code: "zh", name: "Chinese - 中文"},
    {code: "zh-HK", name: "Chinese (Hong Kong) - 中文（香港）"},
    {code: "zh-CN", name: "Chinese (Simplified) - 中文（简体）"},
    {code: "zh-TW", name: "Chinese (Traditional) - 中文（繁體）"},
    {code: "co", name: "Corsican"},
    {code: "hr", name: "Croatian - hrvatski"},
    {code: "cs", name: "Czech - čeština"},
    {code: "da", name: "Danish - dansk"},
    {code: "nl", name: "Dutch - Nederlands"},
    {code: "en", name: "English"},
    {code: "en-AU", name: "English (Australia)"},
    {code: "en-CA", name: "English (Canada)"},
    {code: "en-IN", name: "English (India)"},
    {code: "en-NZ", name: "English (New Zealand)"},
    {code: "en-ZA", name: "English (South Africa)"},
    {code: "en-GB", name: "English (United Kingdom)"},
    {code: "en-US", name: "English (United States)"},
    {code: "eo", name: "Esperanto - esperanto"},
    {code: "et", name: "Estonian - eesti"},
    {code: "fo", name: "Faroese - føroyskt"},
    {code: "fil", name: "Filipino"},
    {code: "fi", name: "Finnish - suomi"},
    {code: "fr", name: "French - français"},
    {code: "fr-CA", name: "French (Canada) - français (Canada)"},
    {code: "fr-FR", name: "French (France) - français (France)"},
    {code: "fr-CH", name: "French (Switzerland) - français (Suisse)"},
    {code: "gl", name: "Galician - galego"},
    {code: "ka", name: "Georgian - ქართული"},
    {code: "de", name: "German - Deutsch"},
    {code: "de-AT", name: "German (Austria) - Deutsch (Österreich)"},
    {code: "de-DE", name: "German (Germany) - Deutsch (Deutschland)"},
    {code: "de-LI", name: "German (Liechtenstein) - Deutsch (Liechtenstein)"},
    {code: "de-CH", name: "German (Switzerland) - Deutsch (Schweiz)"},
    {code: "el", name: "Greek - Ελληνικά"},
    {code: "gn", name: "Guarani"},
    {code: "gu", name: "Gujarati - ગુજરાતી"},
    {code: "ha", name: "Hausa"},
    {code: "haw", name: "Hawaiian - ʻŌlelo Hawaiʻi"},
    {code: "he", name: "Hebrew - עברית"},
    {code: "hi", name: "Hindi - हिन्दी"},
    {code: "hu", name: "Hungarian - magyar"},
    {code: "is", name: "Icelandic - íslenska"},
    {code: "id", name: "Indonesian - Indonesia"},
    {code: "ia", name: "Interlingua"},
    {code: "ga", name: "Irish - Gaeilge"},
    {code: "it", name: "Italian - italiano"},
    {code: "it-IT", name: "Italian (Italy) - italiano (Italia)"},
    {code: "it-CH", name: "Italian (Switzerland) - italiano (Svizzera)"},
    {code: "ja", name: "Japanese - 日本語"},
    {code: "kn", name: "Kannada - ಕನ್ನಡ"},
    {code: "kk", name: "Kazakh - қазақ тілі"},
    {code: "km", name: "Khmer - ខ្មែរ"},
    {code: "ko", name: "Korean - 한국어"},
    {code: "ku", name: "Kurdish - Kurdî"},
    {code: "ky", name: "Kyrgyz - кыргызча"},
    {code: "lo", name: "Lao - ລາວ"},
    {code: "la", name: "Latin"},
    {code: "lv", name: "Latvian - latviešu"},
    {code: "ln", name: "Lingala - lingála"},
    {code: "lt", name: "Lithuanian - lietuvių"},
    {code: "mk", name: "Macedonian - македонски"},
    {code: "ms", name: "Malay - Bahasa Melayu"},
    {code: "ml", name: "Malayalam - മലയാളം"},
    {code: "mt", name: "Maltese - Malti"},
    {code: "mr", name: "Marathi - मराठी"},
    {code: "mn", name: "Mongolian - монгол"},
    {code: "ne", name: "Nepali - नेपाली"},
    {code: "no", name: "Norwegian - norsk"},
    {code: "nb", name: "Norwegian Bokmål - norsk bokmål"},
    {code: "nn", name: "Norwegian Nynorsk - nynorsk"},
    {code: "oc", name: "Occitan"},
    {code: "or", name: "Oriya - ଓଡ଼ିଆ"},
    {code: "om", name: "Oromo - Oromoo"},
    {code: "ps", name: "Pashto - پښتو"},
    {code: "fa", name: "Persian - فارسی"},
    {code: "pl", name: "Polish - polski"},
    {code: "pt", name: "Portuguese - português"},
    {code: "pt-BR", name: "Portuguese (Brazil) - português (Brasil)"},
    {code: "pt-PT", name: "Portuguese (Portugal) - português (Portugal)"},
    {code: "pa", name: "Punjabi - ਪੰਜਾਬੀ"},
    {code: "qu", name: "Quechua"},
    {code: "ro", name: "Romanian - română"},
    {code: "mo", name: "Romanian (Moldova) - română (Moldova)"},
    {code: "rm", name: "Romansh - rumantsch"},
    {code: "ru", name: "Russian - русский"},
    {code: "gd", name: "Scottish Gaelic"},
    {code: "sr", name: "Serbian - српски"},
    {code: "sh", name: "Serbo - Croatian"},
    {code: "sn", name: "Shona - chiShona"},
    {code: "sd", name: "Sindhi"},
    {code: "si", name: "Sinhala - සිංහල"},
    {code: "sk", name: "Slovak - slovenčina"},
    {code: "sl", name: "Slovenian - slovenščina"},
    {code: "so", name: "Somali - Soomaali"},
    {code: "st", name: "Southern Sotho"},
    {code: "es", name: "Spanish - español"},
    {code: "es-AR", name: "Spanish (Argentina) - español (Argentina)"},
    {code: "es-419", name: "Spanish (Latin America) - español (Latinoamérica)"},
    {code: "es-MX", name: "Spanish (Mexico) - español (México)"},
    {code: "es-ES", name: "Spanish (Spain) - español (España)"},
    {code: "es-US", name: "Spanish (United States) - español (Estados Unidos)"},
    {code: "su", name: "Sundanese"},
    {code: "sw", name: "Swahili - Kiswahili"},
    {code: "sv", name: "Swedish - svenska"},
    {code: "tg", name: "Tajik - тоҷикӣ"},
    {code: "ta", name: "Tamil - தமிழ்"},
    {code: "tt", name: "Tatar"},
    {code: "te", name: "Telugu - తెలుగు"},
    {code: "th", name: "Thai - ไทย"},
    {code: "ti", name: "Tigrinya - ትግርኛ"},
    {code: "to", name: "Tongan - lea fakatonga"},
    {code: "tr", name: "Turkish - Türkçe"},
    {code: "tk", name: "Turkmen"},
    {code: "tw", name: "Twi"},
    {code: "uk", name: "Ukrainian - українська"},
    {code: "ur", name: "Urdu - اردو"},
    {code: "ug", name: "Uyghur"},
    {code: "uz", name: "Uzbek - o‘zbek"},
    {code: "vi", name: "Vietnamese - Tiếng Việt"},
    {code: "wa", name: "Walloon - wa"},
    {code: "cy", name: "Welsh - Cymraeg"},
    {code: "fy", name: "Western Frisian"},
    {code: "xh", name: "Xhosa"},
    {code: "yi", name: "Yiddish"},
    {code: "yo", name: "Yoruba - Èdè Yorùbá"},
    {code: "zu", name: "Zulu - isiZulu"}
];

// kan waxa uu soo load garenaya languages ka 
function loadLanguages() {
    languages.forEach(lang => {
        let isSelectedFrom = (lang.code === "en") ? "selected" : "";
        fromSelect.innerHTML += `<option value="${lang.code}" ${isSelectedFrom}>${lang.name}</option>`;

        let isSelectedTo = (lang.code === "tr") ? "selected" : "";
        toSelect.innerHTML += `<option value="${lang.code}" ${isSelectedTo}>${lang.name}</option>`;
    });
}
loadLanguages();

// --- 4. SPEECH RECOGNITION (MICROPHONE) ---
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    micBtn.addEventListener("click", () => {
        recognition.lang = fromSelect.value; 
        try {
            recognition.start();
            lngInput.placeholder = "Waan ku dhageysanayaa...";
            micBtn.style.color = "yellow";
            micBtn.style.backgroundColor = "#3b78ad";
             setTimeout(() => {
           
            micBtn.style.color = "#fff";
             micBtn.style.backgroundColor = "#da0000";
        }, 4000);
        } catch (e) {
            console.log("Mic error ama mar hore ayuu furnaa");
        }
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        lngInput.value = transcript;
        micBtn.style.color = "#fff";
        // Cusboonaysii tirada xarfaha ka dib hadalka
        maxAvailable.textContent = `${lngInput.value.length}/500`;
    };

    recognition.onerror = () => { micBtn.style.color = "#fff"; };
    recognition.onend = () => { micBtn.style.color = "#fff"; };
}

//  fucntion waxa uu turjumaya luuqada waxan ku dhax jiro API ga translate ka 
translateBtn.addEventListener("click", () => {
    let text = lngInput.value.trim();
    let translateFrom = fromSelect.value;
    let translateTo = toSelect.value;

    if (!text) return;

    resultInput.placeholder = "Turjumid ayaa socota...";
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            resultInput.value = data.responseData.translatedText;
            resultInput.placeholder = "Translate...";
        })
        .catch(() => {
            alert("Khalad ayaa dhacay!");
            resultInput.placeholder = "Error!";
        });
});

// function tiriniya qoraalka
lngInput.addEventListener("input", () => {
    let currentLength = lngInput.value.length;
    maxAvailable.textContent = `${currentLength}/500`;
    
    if (currentLength >= 500) {
        maxAvailable.style.color = "red";
    } else {
        maxAvailable.style.color = "gray";
    }
});

// function tiraayo wax walbo input lagu qoro
clearBtn.addEventListener("click", () => {
    lngInput.value = "";
    resultInput.value = "";
    lngInput.placeholder = "Type Something To Translate...";
    maxAvailable.textContent = "0/500"; // Dib u celi tirada
});

// kan waxa uu qabnaya in uu isku badalo wax walbo input ku jira iyo luuqadaha 
changeBtn.addEventListener("click", () => {
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    [lngInput.value, resultInput.value] = [resultInput.value, lngInput.value];
    maxAvailable.textContent = `${lngInput.value.length}/500`;
});

// speak
speakBtn.addEventListener("click", () => {
    const text = resultInput.value;
    if (!text) return;

    window.speechSynthesis.cancel(); // Jooji hadalkii hore haddii uu socday
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = toSelect.value; 
    window.speechSynthesis.speak(utterance);
});

//  CLIPBOARD 
copyBtn.addEventListener("click", () => {
    const text = resultInput.value;
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        // Beddel icon-ka si kumeel-gaar ah (Feedback)
        const originalClass = copyBtn.className;
        copyBtn.className = "fa-solid fa-check";
        copyBtn.style.color = "#27ae60";
        copyBtn.style.backgroundColor = "#ffffff";

        setTimeout(() => {
            copyBtn.className = originalClass;
            copyBtn.style.color = "#fff";
              copyBtn.style.backgroundColor = "#da0000";
        }, 2000);
    }).catch(err => {
        console.error("Copy failed", err);
    });
});



























// speakBtn.addEventListener("click", () => {
//     const textToSpeak = resultInput.value; // Qoraalka turjuman soo qaad
//     if (textToSpeak !== "") {
//         const speech = new SpeechSynthesisUtterance(textToSpeak);
//         speech.lang = toSelect.value; // Luuqadda loo turjumay ku hadal
//         window.speechSynthesis.speak(speech);
//     }
// });;

// copyBtn.addEventListener("click", () => {
//     const textToCopy = resultInput.value; // Qoraalka turjuman soo qaad
//     if (textToCopy !== "") {
//         navigator.clipboard.writeText(textToCopy); // Koobi gareey
//         alert("Waa la koobiyeeyay!");
//     }
// });